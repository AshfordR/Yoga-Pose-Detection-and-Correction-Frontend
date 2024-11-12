'use client'

import HomePageContent from '@/components/HomePageContent/HomePageContent'
import Navbar from '@/components/navbar/Navbar'
import {
  Stack,
  Flex
} from '@chakra-ui/react'

export default function WithBackgroundImage() {
  return (
    <Flex
      direction="column"
      minH={'100vh'} 
      backgroundImage={'url("/Images/Background.png")'} 
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <Navbar />
      <HomePageContent/>
    </Flex>
  )
}
