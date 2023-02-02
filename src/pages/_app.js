// import '@/styles/globals.css'
// import '../styles/globals.css';
import '../styles/auth.scss';
import '../styles/dashboardLayout.scss';
import '../styles/home.scss';
import '../styles/userDetails.scss';
import { ChakraProvider } from '@chakra-ui/react';
// import { QueryClient, QueryClientProvider } from 'react-query';
import ReduxStore from '../../store';
import appTheme from '../theme/appTheme';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={appTheme}>
      <ReduxStore>
        <Component {...pageProps} />;
      </ReduxStore>
    </ChakraProvider>
  );
}
