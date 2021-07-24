import { createTheme } from '@material-ui/core/styles'

import { overrides } from './overrides'

const theme = createTheme({
  palette: {
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
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
