/* eslint-disable react-refresh/only-export-components */
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    background: '#f5f5f5',
    primary: '#1e3a5f',
    secondary: '#6c757d',
    success: '#28a745',
    error: '#dc3545',
    text: '#212529',
    white: '#ffffff',
    border: '#dee2e6',
    shadow: 'rgba(0, 0, 0, 0.1)'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1400px'
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontSize: {
      small: '12px',
      normal: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px',
      xxlarge: '24px'
    },
    sizes: {
      small: '12px',
      normal: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px',
      xxlarge: '24px'
    }
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    pill: '50px'
  }
}


const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }