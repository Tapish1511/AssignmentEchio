import React from "react";
import { Card, CardBody, CardFooter, 
    Image, Stack, Heading, 
    Text, Button, Flex,
    Tag, TagLabel, Box

} from '@chakra-ui/react'

function CustomCard({name, preference, plateform }){

    return(
        <>
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='filled'
            bgColor="white"
            p="10px"
            my="20px"
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                <Heading size='md'>{name}</Heading>

                <Text py='2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur est, illo vel recusandae ut rem incidunt laboriosam dicta corrupti.
                </Text>
                
                </CardBody>
                

                <CardFooter>
                    <Stack>
                        <Box fontWeight='bold' py="10px">{plateform}</Box>
                        <Stack direction='row' spacing={5}>

                            <Tag
                                size='lg'
                                borderRadius='full'
                                variant='solid'
                                colorScheme='green'
                                >
                                <TagLabel>Accepted</TagLabel>
                            </Tag>

                            <Tag
                                size='lg'
                                borderRadius='full'
                                variant='solid'
                                colorScheme='purple'
                                >
                                <TagLabel>{preference}</TagLabel>
                            </Tag>
                        </Stack>
                    </Stack>


                </CardFooter>
                </Stack>
                <Flex direction="column" h="inherit" justifyContent="space-evenly">
                    <Button variant='solid' colorScheme="blue">DETAILS</Button>
                    <Button variant='outline' colorScheme="blue">INVITE</Button>
                    <Button variant='ghost' colorScheme="blue">ANAYLSIS</Button>
                </Flex>
            </Card>
        </>
    );
}

export default CustomCard;