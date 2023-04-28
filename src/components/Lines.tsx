import React from 'react';
import './Lines.css';
import { Box } from '@chakra-ui/react';

const Lines = ({ bodyData }: any) => {
  const scaleValue = 5;
  return (
    <Box className='svg-wrapper' ml={8} mt={8} w='10vw' h='30vh' border='1px solid' borderColor='blackAlpha.500' zIndex={99} position='absolute' top={100} left={0} pointerEvents='none' borderRadius={12}>
      <svg className='svg-line'>
        <line x1={bodyData.RShoulder.x / scaleValue} y1={bodyData.RShoulder.y / scaleValue} x2={bodyData.RElbow.x / scaleValue} y2={bodyData.RElbow.y / scaleValue} />
        <line x1={bodyData.RElbow.x / scaleValue} y1={bodyData.RElbow.y / scaleValue} x2={bodyData.RWrist.x / scaleValue} y2={bodyData.RWrist.y / scaleValue} />
        <line x1={bodyData.LShoulder.x / scaleValue} y1={bodyData.LShoulder.y / scaleValue} x2={bodyData.LElbow.x / scaleValue} y2={bodyData.LElbow.y / scaleValue} />
        <line x1={bodyData.LElbow.x / scaleValue} y1={bodyData.LElbow.y / scaleValue} x2={bodyData.LWrist.x / scaleValue} y2={bodyData.LWrist.y / scaleValue} />
        <line x1={bodyData.LShoulder.x / scaleValue} y1={bodyData.LShoulder.y / scaleValue} x2={bodyData.RShoulder.x / scaleValue} y2={bodyData.RShoulder.y / scaleValue} />
      </svg>
    </Box>
  )
}

export default Lines