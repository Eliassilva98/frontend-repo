import styled from 'styled-components'

export const ListContainer = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  background: ${(props) => props.theme.colors.background};
  width: 100%;
  max-width: 100%;
  border-radius: ${(props) => props.theme.borderRadius.md};
  margin-top: ${(props) => props.theme.spacing.xl};

  @media (max-width: 768px) {
    padding: ${(props) => props.theme.spacing.md};
    margin-top: ${(props) => props.theme.spacing.lg};
  }

  @media (max-width: 480px) {
    padding: ${(props) => props.theme.spacing.sm};
  }
`

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.lg};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  gap: ${(props) => props.theme.spacing.lg};
  width: 100%;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: ${(props) => props.theme.spacing.md};
    padding: ${(props) => props.theme.spacing.md};
  }
`

export const TitleHistory = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  font-size: ${(props) => props.theme.typography.fontSize.lg};

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: ${(props) => props.theme.spacing.md};
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const IconWrapper = styled.div`
  margin-right: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.success || '#28a745'};
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-right: ${(props) => props.theme.spacing.sm};
  }
`

export const FileName = styled.span`
  font-size: ${(props) => props.theme.typography.fontSize};
  color: ${(props) => props.theme.colors.text};
  display: block;
  font-weight: 600;
  word-break: break-word;
  overflow-wrap: break-word;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

export const TimeStamp = styled.span`
  font-size: ${(props) => props.theme.typography.smallFontSize};
  color: ${(props) => props.theme.colors.textSecondary};
  display: block;
  margin-top: 4px;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`

export const DownloadButton = styled.button`
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.lg};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.buttonText};
  border: none;
  cursor: pointer;
  border-radius: ${(props) => props.theme.borderRadius.sm};
  white-space: nowrap;
  margin-left: ${(props) => props.theme.spacing.lg};
  font-size: ${(props) => props.theme.typography.fontSize};
  font-weight: bold;
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: ${(props) => props.theme.spacing.md};
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: ${(props) => props.theme.spacing.sm}
      ${(props) => props.theme.spacing.md};
  }
`

export const EmptyMessage = styled.p`
  text-align: center;
  padding: ${(props) => props.theme.spacing.lg};
  color: ${(props) => props.theme.colors.textSecondary};

  @media (max-width: 480px) {
    padding: ${(props) => props.theme.spacing.md};
    font-size: 0.9rem;
  }
`
