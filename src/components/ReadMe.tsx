import { Box, Container, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'

const ReadMe = () => {
  return (
    <Box display='flex'>
      <Tabs w='90vw' ml='auto' mr='auto' mt='8vh'>
        <TabList>
          <Tab>Step.1</Tab>
          <Tab>Step.2</Tab>
          <Tab>Step.3</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Heading fontSize='xl' as='h3'>
              Drag the Body Points.
            </Heading>
            <Text fontSize='lg' my={4}>
              First, dragging body points to whatever you want them to.
            </Text>
            <Image
              src={require('../assets/step1.gif')}
              objectFit='cover'
              boxSize='30vw'
              m='auto'
              alt='a step 1 that shows the first step.'
            />
          </TabPanel>
          <TabPanel>
            <Heading fontSize='xl' as='h3'>
              Inspect the result in the top left corner.
            </Heading>
            <Text fontSize='lg' my={4}>
              Second, we could check if the body points we've set are in the correct location via the top left window.
            </Text>
            <Image
              src={require('../assets/step2.gif')}
              objectFit='cover'
              boxSize='30vw'
              m='auto'
              alt='a step 2 that shows the second step.'
            />
          </TabPanel>
          <TabPanel>
            <Heading fontSize='xl' as='h3'>
              Copy the body keypoints JSON!
            </Heading>
            <Text fontSize='lg' my={4}>
              Finally, we could click the copy button once the pose is good for you.
            </Text>
            <Image
              src={require('../assets/step3.gif')}
              objectFit='cover'
              boxSize='30vw'
              m='auto'
              alt='a step 3 that shows the third step.'
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default ReadMe