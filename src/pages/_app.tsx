import {AppProps} from 'next/app'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../styles/theme'
import { SidebarDrawerProvider } from '../componets/context/SidebarDrawerContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
