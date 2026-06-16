import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
from {
  opacity: 0;
  transform: translateY(20px);
}

to {
  opacity: 1;
  transform: translateY(0)
}
`

export const FadeInWrapper = styled.div`
  animation: ${fadeInUp} 0.5s ease-out;
  animation-fill-mode: both;
`
