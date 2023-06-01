import Footer from '@/components/Footer'
import store from '@/redux/store'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { LoadScript } from "@react-google-maps/api";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <LoadScript
          googleMapsApiKey="AIzaSyBMo1myYnlmnCYMJc5fwiGiDZPqXar03ps"
          libraries={["places"]}
        >
          <Component {...pageProps} />
        </LoadScript>
        <Footer />
      </ChakraProvider>
    </Provider>
  )
}
