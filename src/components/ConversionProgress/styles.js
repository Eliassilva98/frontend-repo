// @ts-nocheck
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
0%{transform: rotate(0deg);}
100%{transform: rotate(360deg);}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.background};

  @media (max-width: 768px) {
    padding: ${(props) => props.theme.spacing.sm};
  }
`

export const ProgressBarContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.border};
  border-radius: 10px;
  overflow: hidden;
  margin: ${(props) => props.theme.spacing.sm} 0;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    height: 14px;
    border-radius: 12px;
  }
`

export const ProgressBarFill = styled.div`
  height: 100%;
  width: ${(props) => props.$progress}%;
  background: ${(props) => props.theme.colors.primary};
  transition: width 0.4s ease-in-out;
  border-radius: 10px;

  @media (max-width: 480px) {
    border-radius: 12px;
  }
`

export const PercentageText = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
  margin-top: ${(props) => props.theme.spacing.xs};

  @media (max-width: 480px) {
    font-size: 16px;
    margin-top: ${(props) => props.theme.spacing.sm};
  }
`

export const IconWrapper = styled.div`
  ${(props) =>
    props.$isSpinning &&
    `
  animation: ${spin} 2s linear infinite;
  `}

  color: ${(props) =>
    props.$isSuccess ? props.theme.colors.success : props.theme.colors.accent};

  @media (max-width: 480px) {
    margin-top: ${(props) => props.theme.spacing.sm};
    transform: scale(1.2);
  }
`
