import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.lg};
  padding: 20px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 16px;
    gap: ${(props) => props.theme.spacing.md};
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: ${(props) => props.theme.spacing.sm};
  }
`

export const ConvertButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.md};
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.fontSize.lg};
  font-weight: bold;
  border: none;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  margin-top: ${(props) => props.theme.spacing.lg};

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${(props) => props.theme.shadows.sm};
  }

  @media (max-width: 768px) {
    padding: ${(props) => props.theme.spacing.sm}
      ${(props) => props.theme.spacing.lg};
    font-size: ${(props) => props.theme.typography.fontSize.md};
    margin-top: ${(props) => props.theme.spacing.md};
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 320px;
    padding: ${(props) => props.theme.spacing.md};
    font-size: ${(props) => props.theme.typography.fontSize.md};
    min-height: 56px;
    margin-top: ${(props) => props.theme.spacing.sm};
  }
`
