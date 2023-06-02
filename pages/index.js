import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button, Text } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Home/Hero'
import Options from '@/components/Home/Options'
import Collections from '@/components/Home/Collections'
import Localities from '@/components/Home/Localities'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>zomato clone</title>
        <meta name="description" content="Food delivery made easy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bgImage={'https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/zomato-banner.webp?alt=media&token=9fe4834f-bc76-4a0a-97f2-83a210d2d4f6'} backgroundSize={'cover'} backgroundPosition={'center'} h={'60vh'}>
        <Navbar />
        <Hero />
      </Box>
      <Options />
      <Collections />
      <Localities />
      <Explore />
    </>
  )
}
import React from "react"; import Explore from '@/components/Home/Explore'

