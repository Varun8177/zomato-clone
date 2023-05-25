import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button, Divider, Flex, Heading, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, calc } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Home/Hero'
import OptionCards from '@/components/Home/OptionCards'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bgImage={'https://firebasestorage.googleapis.com/v0/b/zomato-clone-c4414.appspot.com/o/zomato-banner.webp?alt=media&token=9fe4834f-bc76-4a0a-97f2-83a210d2d4f6'} backgroundSize={'cover'} backgroundPosition={'center'} h={'60vh'}>
        <Navbar />
        <Hero />
      </Box>
      <Flex w={{
        base: "100%",
        lg: "70%"
      }} h={'250px'} m={'auto'} mt={'10px'} justifyContent={'space-between'} alignItems={'center'} flexWrap={"wrap"}>
        <OptionCards />
        <OptionCards />
        <OptionCards />
      </Flex>
    </>
  )
}

