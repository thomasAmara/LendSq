import { extendTheme } from '@chakra-ui/react';

const appTheme = extendTheme({
  colors: {
    black: {
      100: '#000',
      200: '#121212',
      300: '#323440',
      400: '#131824',
    },
    white: {
      100: '#fff',
      200: '#F2F2F2',
    },
    purple: {
      100: '#F9F4F7',
      200: '#F0DEE6',
      300: '#B82569',
      400: '#9F2077',
      500: '#1f0015a2',
      700: '#EFDCE9',
      800: '#F8F3F0;',
    },
    green: {
      100: '#3E8665',
      200: '#34A975',
      300: '#56A55C',
    },
    blue: {
      100: '#1E3B59',
    },
    grey: {
      100: '#8895A3',
      200: '#8F95A7',
      300: '#797882',
    },
  },

  fonts: {
    heading: 'Open Sans, sans-serif',
    // body: "Raleway, sans-serif",
    body: 'IBM Plex Sans, sans-serif',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  boxShadow: {
    thin: {
      100: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
    },
  },
});

export default appTheme;
