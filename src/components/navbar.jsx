import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  TabList, Tab,
  Avatar,
  theme,
} from '@chakra-ui/react';
import {BellIcon} from "@chakra-ui/icons"


function NavBar({Ref}){

    return(
    <ChakraProvider theme={theme}>
        <Flex ref={Ref} justifyContent='space-between' alignItems='center' px="20px" py="5px" rounded="full" boxShadow='base' mt='1em' bgColor="white">
            <Box maxW="45px" minW="40px"><img src="logo192.png" alt="" /></Box>
            <Box>
                <TabList>
                    <Tab>Home</Tab>
                    <Tab>My Campaign</Tab>
                </TabList>
            </Box>
            <Flex justifyContent='space-between' alignItems="center" minW="80px">
                <BellIcon height="auto" width="25px" color="gray.500"/>
                <Avatar src='' w='40px' h='auto'/>
            </Flex>

        </Flex>

    </ChakraProvider>
    );
}

export default NavBar