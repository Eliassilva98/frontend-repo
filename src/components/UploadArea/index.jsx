import { useState, useRef, useCallback } from 'react'
import { Container, Icon, Text, FileName, Button } from './styles'

const UploadArea = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const fileInputRef = useRef(null)

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const validateAndSetFile = (file) => {
    if (file && (file.name.endsWith('.docx') || file.name.endsWith('.doc'))) {
      setSelectedFile(file)
      onFileSelect && onFileSelect(file)
    } else {
      alert('Selecione um arquivo .docx ou .doc.')
    }
  }

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    validateAndSetFile(file)
  }, [])

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    validateAndSetFile(file)
  }

  const handleClick = () => {
    fileInputRef.current.click()
  }

  return (
    <Container
      $isDragging={isDragging}
      $hasFile={selectedFile}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept=".docx,.doc"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {selectedFile ? (
        <>
          <Icon />
          <FileName>{selectedFile.name}</FileName>
        </>
      ) : (
        <>
          <Icon />
          <Text>
            {window.innerWidth <= 480
              ? 'Toque para selecionar um arquivo .docx'
              : 'Arraste e solte seus arquivos .docx aqui'}
          </Text>
          <Button
            onClick={(e) => {
              e.stopPropagation()
              fileInputRef.current.click()
            }}
          >
            Selecionar arquivo
          </Button>
        </>
      )}
    </Container>
  )
}

export default UploadArea
