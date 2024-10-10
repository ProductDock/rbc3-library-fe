import { createTheme } from '@mui/material/styles'
import typography from './typography'
import palette from './palette'

const theme = createTheme({
  cssVariables: true,
  palette,
  typography,
})

export default theme
