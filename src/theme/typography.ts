import { TypographyOptions } from '@mui/material/styles/createTypography'

const typography: TypographyOptions = {
  fontFamily: 'Poppins',
  h1: {
    fontWeight: 600,
    fontSize: '96px',
    lineHeight: '108px',
    letterSpacing: '-4%',
    '@media (max-width: 780px)': {
      fontSize: '48px',
      lineHeight: '64px',
    },
  },

  h2: {
    fontSize: 'clamp(24px, 5vw + 10px, 80px)',
    fontWeight: 600,
    lineHeight: '104px',
    letterSpacing: '-4%',
    '@media (max-width:1100px)': {
      fontSize: '48px',
      lineHeight: '64px',
    },
  },
  h3: {
    fontSize: '64px',
    fontWeight: 600,
    lineHeight: '80px',
    letterSpacing: '-4%',
  },
  subtitle1: {
    fontSize: '48px',
    fontWeight: 600,
    lineHeight: '64px',
    letterSpacing: '-4%',
  },
  subtitle2: {
    fontSize: '36px',
    fontWeight: 600,
    lineHeight: '48px',
    letterSpacing: '-4%',
  },
  h4: {
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '36px',
    letterSpacing: '-3%',
  },
  h5: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '32px',
    letterSpacing: '-3%',
    '@media (max-width:1100px)': {
      fontSize: '16px',
    },
  },
  h6: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '28px',
    letterSpacing: '-3%',
    '@media (max-width:1100px)': {
      fontSize: '14px',
      lineHeight: '24px',
    },
  },
  body1: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-3%',
  },
  body2: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-3%',
  },
}

export default typography
