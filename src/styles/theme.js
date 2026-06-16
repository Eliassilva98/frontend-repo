const theme = {
  colors: {
    primary: '#1E3A5F',
    primaryLight: '#3A6B8C',
    primaryDark: '#0F2440',
    white: '#FFFFFF',
    gray100: '#F7F9FC',
    gray200: '#E1E5EB',
    gray300: '#B0B8C1',
    gray400: '#6B7B8D',
    gray500: '#3D4A5C',
    success: '#28A745',
    successLight: '#D4EDDA',
    error: '#DC3545',
    warning: '#FFC107'
  },
  typography: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem',
      display: '2rem'
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    section: '64px'
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1280px',
    xl: '1440px'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '50%'
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
    xl: '0 20px 25px rgba(0,0,0,0.15)'
  },
  transitions: {
    default: '0.3s ease',
    fast: '0.15s ease'
  }
}

export default theme
