import { Button, Center, Flex, Heading, Link, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'
import { GitHubIcon } from '../icons/GithubIcon'

type Props = {
  setIsCanva: React.Dispatch<React.SetStateAction<boolean>>,
};

const Header = ({ setIsCanva }: Props) => {
  const switchToHome = () => {
    setIsCanva(true);
  };
  
  const switchToReadme = () => {
    setIsCanva(false);
  };

  return (
    <Flex m={'auto'} h='8vh' bgColor={'#A6D0DD'}>
      <Center>
        <Heading as='h1' size='2xl' ml={8} fontFamily={'Caveat'} color='white' cursor='pointer' onClick={switchToHome}>
          Draggable 2D Body Keypoints Generator
        </Heading>
      </Center>
      <Spacer />
      <Stack direction='row' spacing={8} align='center' mr={8}>
        <Button variant='solid' onClick={switchToReadme}>How to Use</Button>
        <Link href='https://github.com/TillMac/draggable-2d-body-keypoints' isExternal>
          <GitHubIcon boxSize={8} cursor='pointer' />
        </Link>
      </Stack>
    </Flex>
  )
}

export default Header