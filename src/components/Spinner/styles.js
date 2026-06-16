import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`

export const SpinnerWrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3498db;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  margin: 20px auto;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    border-width: 4px;
    margin: 16px auto;
  }
`
