import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'
import { uploadFile, getHistory } from '../../services/api.js'
import Header from '../../components/Header'
import UploadArea from '../../components/UploadArea'
import ConversionProgress from '../../components/ConversionProgress'
import CompletedTransfers from '../../components/CompletedTransfers'
import Spinner from '../../components/Spinner'
import { Container, ConvertButton } from './styles'

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [completedTransfers, setCompletedTransfers] = useState([])
  const intervalRef = useRef(null)

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const data = await getHistory()
        const formattedData = data.map(item => ({
          id: item.id || item._id,
          originalName: item.originalName,
          convertedName: item.pdfName,
          downloadUrl: item.downloadUrl,
          timestamp: item.createdAt
        }))
        setCompletedTransfers(formattedData)
      } catch (error) {
        console.error('Erro ao carregar histórico:', error)
      }
    }
    loadHistory()
  }, [])

  const handleFileSelect = (file) => {
    setSelectedFile(file)
  }

  const handleConvert = async () => {
    if (!selectedFile || isConverting) return

    toast.info('Conversão iniciada...')
    setIsConverting(true)
    setProgress(0)

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(intervalRef.current)
          return 90
        }
        return prev + 10
      })
    }, 1000)

    try {
      const response = await uploadFile(selectedFile)
      clearInterval(intervalRef.current)
      setProgress(100)
      toast.success('Conversão concluída!')

      const newTransfer = {
        id: uuidv4(),
        originalName: selectedFile.name,
        convertedName: response.pdfName,
        downloadUrl: response.downloadUrl,
        timestamp: new Date().toISOString()
      }

      setCompletedTransfers((prev) => [...prev, newTransfer])

      setTimeout(() => {
        setIsConverting(false)
        setProgress(0)
      }, 2000)
    } catch (error) {
      console.error('Erro:', error)
      clearInterval(intervalRef.current)
      setIsConverting(false)
      setProgress(0)
      toast.error('Erro na conversão. Tente novamente.')
    }
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <Container>
      <Header />
      <UploadArea onFileSelect={handleFileSelect} />
      {selectedFile && !isConverting && (
        <ConvertButton onClick={handleConvert}>Converter</ConvertButton>
      )}
      {isConverting && <Spinner />}
      {isConverting && <ConversionProgress progress={progress} />}
      <CompletedTransfers transfers={completedTransfers} onDownload={(url) => window.open(url, '_blank')} />
    </Container>
  )
}

export default Home