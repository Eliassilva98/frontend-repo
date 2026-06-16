import { render, screen } from '../../utils/test-utils'
import CompletedTransfers from './index'

jest.mock('../FadeIn', () => ({ children }) => <div>{children}</div>)

describe('CompletedTransfers', () => {
  it('mostra mensagem quando não há conversões', () => {
    render(<CompletedTransfers transfers={[]} />)
    expect(screen.getByText('Nenhuma conversão concluída.')).toBeInTheDocument()
  })

  it('mostra o título e arquivo convertido', () => {
    const mockTransfers = [
      {
        id: '1',
        originalName: 'documento.docx',
        convertedName: 'documento.pdf',
        downloadUrl: 'http://localhost:5000/uploads/documento.pdf',
        timestamp: '2026-05-31T10:00:00.000Z'
      }
    ]

    render(<CompletedTransfers transfers={mockTransfers} />)
    expect(screen.getByText('Histórico de conversões')).toBeInTheDocument()
    expect(screen.getByText('documento.docx')).toBeInTheDocument()
    expect(screen.getByText('Baixar')).toBeInTheDocument()
  })
})