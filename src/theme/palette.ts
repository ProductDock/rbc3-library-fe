import { PaletteColorOptions } from '@mui/material'

const neutral: PaletteColorOptions | undefined = {
  50: '#FFFFFF',
  100: '#F1F5F8',
  200: '#E9EFF1',
  300: '#8C959C', // was wrong color #BC959C, correct is #8C959C
  400: '#646D75',
  500: '#353C43',
  600: '#0A0C0E',
  A400: '#646D75',
}

const primary: PaletteColorOptions | undefined = {
  100: '#EEF9FF',
  200: '#9ED3F2',
  300: '#027AC2',
  400: '#01598E',
  500: '#01446C',
  600: '#002136',
  A400: '#646D75',
}

const secondary: PaletteColorOptions | undefined = {
  100: '#FFF4F0',
  200: '#F2A186',
  300: '#EA592A',
  400: '#C44821',
  500: '#892F12',
  600: '#1B0802',
  A400: '#646D75',
}

const tertiary: PaletteColorOptions | undefined = {
  100: '#F1FFF6',
  200: '#D5ECE6',
  300: '#B3DBD1',
  400: '#85B4A8',
  500: '#4C6B63',
  600: '#1B0802',
  A400: '#646D75',
}

const warning: PaletteColorOptions | undefined = {
  100: '#FFF7E7',
  200: '#F5C8B0',
  300: '#FB8443',
  400: '#D09020',
  500: '#A76B04',
  600: '#644002',
  A400: '#646D75',
}

const success: PaletteColorOptions | undefined = {
  100: '#CFF9EC',
  200: '#78EAC4',
  300: '#12B886',
  400: '#00855D',
  500: '#05673E',
  600: '#023525',
  A400: '#646D75',
}

const error: PaletteColorOptions | undefined = {
  100: '#FCE4E4',
  200: '#F3A2A2',
  300: '#E44444',
  400: '#D83C3C',
  500: '#760E0E',
  600: '#290101',
  A400: '#646D75',
}

const palette = {
  neutral,
  primary,
  secondary,
  tertiary,
  warning,
  success,
  error,
}

export default palette
