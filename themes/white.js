import { createTheme } from '@material-ui/core/styles'

import { overrides } from './overrides'

const theme = createTheme({
  palette: {
    primary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff'
    },
    common: {
      black: '#000',
      white: '#fff'
    }
  },
  overrides
})

export default theme
