import React from "react";
import { Stack, Flex, Box, Button } from "@chakra-ui/react";
import RadioComponent from "./radiogroup";


function TopEl({values, Name, displayName}){

    return(
        <>
            <Flex justifyContent='space-between' alignItems='center'>
                <Box fontSize='14px'>
                    <Box fontWeight='bold' pb="10px">sort by</Box>
                    <RadioComponent 
                    values={values} 
                    Name={Name}
                    displayName={displayName} 
                    />
                </Box>

                <Box>
                <Stack direction='row' spacing={4} align='center'>
                    <Button colorScheme='blue' variant='ghost'>
                        SELECT ALL
                    </Button>
                    <Button colorScheme='blue' variant='outline'>
                        INVITE
                    </Button>
                    <Button colorScheme='blue' variant='solid'>
                        ADD CAMPAIGN
                    </Button>
                </Stack>

                </Box>
            </Flex>
        
        </>
    );
}

export default TopEl;