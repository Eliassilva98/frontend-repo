import { FiCheckCircle } from 'react-icons/fi'
import FadeIn from '../FadeIn'
import {
  ListContainer,
  ListItem,
  FileInfo,
  IconWrapper,
  FileName,
  TimeStamp,
  DownloadButton,
  EmptyMessage,
  TitleHistory
} from './styles'

const CompletedTransfers = ({ transfers }) => {
  if (!transfers || transfers.length === 0) {
    return (
      <ListContainer>
        <EmptyMessage>Nenhuma conversão concluída.</EmptyMessage>
      </ListContainer>
    )
  }

  const formatTimestamp = (timestamp) => {
    const data = new Date(timestamp)
    return data.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handleDownload = (url, fileName) => {
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', fileName || 'arquivo.pdf')
    link.setAttribute('target', '_blank')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <ListContainer>
      <TitleHistory>Histórico de conversões</TitleHistory>
      {transfers.map((transfer) => (
        <FadeIn key={transfer.id}>
          <ListItem>
            <FileInfo>
              <IconWrapper>
                <FiCheckCircle />
              </IconWrapper>
              <div>
                <FileName>{transfer.originalName}</FileName>
                <TimeStamp>{formatTimestamp(transfer.timestamp)}</TimeStamp>
              </div>
            </FileInfo>
            <DownloadButton onClick={() => {
              handleDownload(transfer.downloadUrl, transfer.convertedName)
            }}>
              Baixar
            </DownloadButton>
          </ListItem>
        </FadeIn>
      ))}
    </ListContainer>
  )
}

export default CompletedTransfers