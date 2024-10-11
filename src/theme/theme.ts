import { createTheme } from '@mui/material/styles'
import palette from './palette'
import typography from './typography'

const theme = createTheme({
  cssVariables: true,
  palette,
  typography,
})

export default theme
