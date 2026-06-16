import { render, screen } from '../../utils/test-utils'
import ConversionProgress from './index'

describe('ConversionProgress', () => {
  it('mostra 0% quando não tem progresso', () => {
    render(<ConversionProgress />)
    expect(screen.getByText('0%')).toBeInTheDocument()
  })

  it('mostra a porcentagem correta quando tem progresso parcial', () => {
    render(<ConversionProgress isConverting progress={45} />)
    expect(screen.getByText('45%')).toBeInTheDocument()
  })

  it('mostra ícone de loader (FiLoader) quando está convertendo', () => {
    render(<ConversionProgress isConverting progress={50} />)

    const container = screen.getByText('50%').parentElement
    expect(container).toBeInTheDocument()
  })

  it('mostra ícone de check (FiCheckCircle) quando progresso é 100%', () => {
    render(<ConversionProgress progress={100} />)
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('arredonda a porcentagem corretamente', () => {
    render(<ConversionProgress progress={66.7} />)
    expect(screen.getByText('67%')).toBeInTheDocument()
  })
})