const getOverrides = () => {
  return {
    MuiTypography: {
      h1: {
        fontSize: 40,
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: 1.6
      },
      h2: {
        fontSize: 34,
        color: 'rgba(255, 255, 255, 0.7)'
      },
      h3: {
        fontSize: 25,
        color: 'rgba(255, 255, 255, 0.7)'
      },
      h4: {
        fontSize: 22,
        color: 'rgba(255, 255, 255, 0.7)'
      },
      h5: {
        fontSize: 19,
        color: 'rgba(255, 255, 255, 0.7)'
      },
      h6: {
        fontSize: 19,
        color: 'rgba(255, 255, 255, 0.7)'
      },
      subtitle1: {
        fontSize: 20,
        color: 'rgba(255, 255, 255, 0.7)'
      },
      subtitle2: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.7)'
      },
      body1: {
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.7)'
      },
      body2: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.7)'
      },
      button: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.7)'
      },
      caption: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.7)'
      },
      overline: {
        fontSize: 8,
        color: 'rgba(255, 255, 255, 0.7)',
        letterSpacing: 'normal',
        lineHeight: 1.5,
        textTransform: 'none'
      }
    }
  }
}

export const overrides = getOverrides()
