import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Canva from './components/Canva';
import Footer from './components/Footer';
import ReadMe from './components/ReadMe';

function App() {
  const [isCanva, setIsCanva] = useState(true);

  return (
    <Box>
      <Header setIsCanva={setIsCanva} />
      <Box m={8} h='88vh'>
        {(isCanva) ? <Canva /> : <ReadMe />}
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
