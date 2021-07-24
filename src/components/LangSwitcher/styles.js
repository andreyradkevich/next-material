import { alpha } from '@material-ui/core/styles'

export default function LangSwitcher({ palette }) {
  return {
    button: {
      height: 40,
      backgroundColor: palette.common.white,

      '&:hover': {
        backgroundColor: alpha(palette.common.white, 0.8)
      }
    },
    popover: {
      backgroundColor: palette.common.black,
      width: 64
    },
    root: {}
  }
}
