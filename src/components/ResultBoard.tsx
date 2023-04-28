import React from 'react'
import { CheckCircleIcon, CopyIcon } from '@chakra-ui/icons'
import { Box, Card, CardBody, CardHeader, Flex, HStack, Heading, Spacer, Text, Textarea, Tooltip, useToast } from '@chakra-ui/react'

const ResultBoard = ({ bodyData }: any) => {
  const formatter = (bodyData: any) => {
    console.log('bodyData', bodyData);
    const keys = Object.keys(bodyData);
    const values = Object.values(bodyData);
    const result = keys.map((key: string, idx: number) => {
      return {
        [key]: values[idx],
      };
    });
    return JSON.stringify(result, null, 4);
  }

  const result = formatter(bodyData);
  const copyToast = useToast();

  const copyDataHandler = () => {
    navigator.clipboard.writeText(result);
    copyToast({
      position: 'bottom-right',
      render: () => (
        <Box mr={6} color='white' p={3} bg='#6C5A49' borderRadius='12px' display='flex' alignItems='center' justifyContent='left'>
          <HStack spacing={4}>
            <CheckCircleIcon />
            <Text fontSize='lg'>Copied Successed!</Text>
          </HStack>
        </Box>
      ),
    })
  };


  return (
    <Card w={'50%'} boxShadow='md' variant='outline'>
          <CardHeader>
            <Flex>
              <Heading size='lg' as='h3' mt='auto' mb='auto'>Results</Heading>
              <Spacer />
              <Tooltip hasArrow label='Click to copy!' bg='black' fontSize='lg'>
                <CopyIcon boxSize={8} cursor='pointer' onClick={copyDataHandler} />
              </Tooltip>
            </Flex>
          </CardHeader>
          <CardBody>
            <Textarea h='75vh' isReadOnly={true} resize='none' value={result} />
          </CardBody>
        </Card>
  )
}

export default ResultBoard;
