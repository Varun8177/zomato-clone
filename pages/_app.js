import Footer from '@/components/Footer'
import store from '@/redux/store'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  const initialOptions = {
    "client-id": "Ac4ptN-C1JyggqcFWtuaZ6XJmxvIBCq7lGuGeO9UUKWMbLEIF93X_ceZKa9WlA-skG_oMeUL96o0hYM_",
    currency: "USD",
    intent: "capture",
    // "data-client-token": "abc123xyz==",
  };
  return (
    <Provider store={store}>
      <ChakraProvider>
        <PayPalScriptProvider options={initialOptions}>
          <Component {...pageProps} />
        </PayPalScriptProvider>
        <Footer />
      </ChakraProvider>
    </Provider>
  )
}
