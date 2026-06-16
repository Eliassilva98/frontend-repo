import { FiUploadCloud } from 'react-icons/fi'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.lg};
  border: 2px solid
    ${(props) => {
      if (props.$hasFile) return props.theme.colors.success
      if (props.$isDragging) return props.theme.colors.primary
      return props.theme.colors.gray300
    }};
  background-color: ${(props) =>
    props.$isDragging ? props.theme.colors.gray100 : 'transparent'};
  border-radius: ${(props) => props.theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 200px;

  @media (max-width: 768px) {
    padding: ${(props) => props.theme.spacing.md};
    min-height: 180px;
  }

  @media (max-width: 480px) {
    padding: ${(props) => props.theme.spacing.sm};
    min-height: 160px;
  }
`

export const Icon = styled(FiUploadCloud)`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.xs};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

export const Text = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.gray300};
  font-size: 1rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`

export const FileName = styled.p`
  margin: ${(props) => props.theme.spacing.xs};
  color: ${(props) => props.theme.colors.success};
  font-weight: bold;
  text-align: center;
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  padding: ${(props) => props.theme.spacing.sm};
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.md};
  cursor: pointer;
  font-size: 1rem;
  margin-top: ${(props) => props.theme.spacing.sm};

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }

  @media (max-width: 768px) {
    padding: ${(props) => props.theme.spacing.sm}
      ${(props) => props.theme.spacing.lg};
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: ${(props) => props.theme.spacing.md};
    font-size: 0.9rem;
  }
`
