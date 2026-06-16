import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows.md};
  color: white;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: ${(props) => props.theme.spacing.sm}
      ${(props) => props.theme.spacing.md};
  }

  @media (max-width: 480px) {
    padding: ${(props) => props.theme.spacing.xs}
      ${(props) => props.theme.spacing.sm};
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    gap: ${(props) => props.theme.spacing.xs};
  }

  svg {
    flex-shrink: 0;
    font-size: 1.2em;
  }
`
