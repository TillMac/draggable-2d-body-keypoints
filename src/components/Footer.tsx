import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
  const date = new Date();

  return (
    <Box h={'4vh'} bgColor='#002642' color='white' display='flex'>
      <Text m='auto' fontSize='16px'>{date.getFullYear()} © Made by TillMac 🥑</Text>
    </Box>
  )
}

export default Footer