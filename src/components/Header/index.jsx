import { FiFileText } from 'react-icons/fi'
import { HeaderWrapper, Logo } from './styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <FiFileText />
        <span>Word to PDF Converter</span>
      </Logo>
    </HeaderWrapper>
  )
}

export default Header
