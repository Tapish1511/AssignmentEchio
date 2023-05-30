import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';

import MainBody from './components/mainBody';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box px="20px" bgColor="#f4f4f4">
        <MainBody />
      </Box>
    </ChakraProvider>
  );
}

export default App;
