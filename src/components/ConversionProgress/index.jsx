import { FiLoader, FiCheckCircle } from 'react-icons/fi'
import {
  Container,
  ProgressBarContainer,
  ProgressBarFill,
  PercentageText,
  IconWrapper
} from './styles'

const ConversionProgress = ({ isConverting, progress = 0 }) => {
  const isComplete = progress >= 100
  const isLoading = isConverting && !isComplete

  return (
    <Container>
      <ProgressBarContainer>
        <ProgressBarFill $progress={progress} />
      </ProgressBarContainer>
      <PercentageText>{Math.round(progress)}%</PercentageText>
      <IconWrapper $isSpinning={isLoading} $isSuccess={isComplete}>
        {isComplete ? <FiCheckCircle size={24} /> : <FiLoader size={24} />}
      </IconWrapper>
    </Container>
  )
}

export default ConversionProgress
