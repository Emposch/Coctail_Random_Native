import { ColorValue, Dimensions, StyleSheet } from 'react-native'

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'




// Dimensions

export const screenWidth = Dimensions.get('window').width

export const screenHeight = Dimensions.get('window').height

// Scale

export const widthScale = screenWidth / 375

export const heightScale = screenHeight / 812




export const baseStyle = StyleSheet.create({

  screenView: {

    flex: 1,

  },

  scrollView: {

    flexGrow: 1,

  },

  row: {

    flexDirection: 'row',

  },

})




export const colors = {

  inspire: '#8199EB',

  reflect: '#C8D1F6',

  foundation: '#748AE9',

  error: '#F5B1BD',

  white: '#FFFFFF',

  soft: '#B4D4ED',

  softer: '#7389E8',

  warm: '#F9F8FC',

  supportive: '#646365',

  dark: '#102736',

  grey: '#A7ADAF',

  softGrey: '#E5E5E5',

  black: '#000000',

  clear: '#F2F2F2',

  textError: '#B00020',

  violet: '#758BE9',

}




export const borderRadius = {

  small: 10,

  medium: 20,

  large: 36,

}

export const borderWidth = {

  default: 1,

  bold: 2,

}




// export const getFontStyle = (

//   fontFamily: string | undefined,

//   fontSize: number | undefined,

//   lineHeight?: number | undefined,

//   fontWeight?: string | undefined,

//   color?: ColorValue | undefined,

// ) => ({

//   fontWeight,

//   fontFamily,

//   fontSize,

//   lineHeight,

//   color,

// })




export const baseText = StyleSheet.create({

  textH1: {

    fontFamily: 'bold',

    fontSize: 48,

    lineHeight: 64,

    color: colors.dark,

  },

  textH2: {

    fontFamily: 'medium',

    fontSize: 20,

    lineHeight: 28,

    color: colors.dark,

  },

  textH3: {

    fontFamily: 'medium',

    fontSize: 14,

    lineHeight: 28,

    color: colors.dark,

  },

  textH4: {

    fontFamily: 'medium',

    fontSize: 18,

    lineHeight: 24,

    color: colors.dark,

    fontWeight: '500',

  },

  textBase: {

    fontFamily: 'medium',

    fontSize: 14,

    lineHeight: 20,

    color: colors.black,

    fontWeight: '600',

  },

  textSmall: {

    fontFamily: 'medium',

    fontSize: 12,

    lineHeight: 20,

    color: colors.dark,

  },

  textError: {

    fontFamily: 'medium',

    fontSize: 12,

    lineHeight: 24,

    color: colors.textError,

  },

  textGrey: {

    fontFamily: 'medium',

    fontSize: 12,

    lineHeight: 16,

    color: colors.grey,

  },

  textBoldGrey: {

    fontFamily: 'semiBold',

    fontSize: 14,

    lineHeight: 24,

    color: colors.grey,

  },

  textWhite: {

    fontFamily: 'medium',

    fontSize: 14,

    lineHeight: 24,

    color: colors.clear,

  },

  textViolet: {

    fontFamily: 'medium',

    fontSize: 10,

    lineHeight: 20,

    color: colors.softer,

  },

})




// export const theme = {

//   ...DefaultTheme,

//   roundness: 0,

//   colors: {

//     ...DefaultTheme.colors,

//     primary: colors.dark,

//   },

// }