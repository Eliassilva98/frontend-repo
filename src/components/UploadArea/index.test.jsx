import { render, screen, fireEvent } from '../../utils/test-utils'
import UploadArea from './index'

describe('UploadArea', () => {
  it('mostra texto inicial quando não há arquivo selecionado', () => {
    render(<UploadArea />)
    expect(screen.getByText('Arraste e solte seus arquivos .docx aqui')).toBeInTheDocument()
    expect(screen.getByText('Selecionar arquivo')).toBeInTheDocument()
  })

  it('mostra nome do arquivo quando um arquivo .docx é selecionado', () => {
    render(<UploadArea />)

    const input = document.querySelector('input[type="file"]')

    const file = new File(['conteúdo'], 'documento.docx', { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })

    fireEvent.change(input, { target: { files: [file] } })

    expect(screen.getByText('documento.docx')).toBeInTheDocument()
  })

  it('chama onFileSelect quando um arquivo válido é selecionado', () => {
    const mockOnFileSelect = jest.fn()
    render(<UploadArea onFileSelect={mockOnFileSelect} />)

    const input = document.querySelector('input[type="file"]')
    const file = new File(['conteúdo'], 'relatorio.docx', { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })

    fireEvent.change(input, { target: { files: [file] } })

    expect(mockOnFileSelect).toHaveBeenCalledWith(file)
  })

  it('chama onFileSelect quando arquivo é dropado na área', () => {
    const mockOnFileSelect = jest.fn()
    render(<UploadArea onFileSelect={mockOnFileSelect} />)

    const container = screen.getByText('Arraste e solte seus arquivos .docx aqui').parentElement

    const file = new File(['conteúdo'], 'arquivo.docx', { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })

    fireEvent.drop(container, {
      dataTransfer: {
        files: [file]
      }
    })

    expect(mockOnFileSelect).toHaveBeenCalledWith(file)
  })

  it('não chama onFileSelect quando arquivo não é .docx ou .doc', () => {
    const mockOnFileSelect = jest.fn()
    render(<UploadArea onFileSelect={mockOnFileSelect} />)

    const input = document.querySelector('input[type="file"]')
    const file = new File(['conteúdo'], 'imagem.jpg', { type: 'image/jpeg' })

    fireEvent.change(input, { target: { files: [file] } })

    expect(mockOnFileSelect).not.toHaveBeenCalled()
  })
})