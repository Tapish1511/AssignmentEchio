import React, { useState, useContext } from 'react';
import {
  Box, Flex, Input, Collapse, Button,
  Stack,Checkbox,CheckboxGroup,
  RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb,
} from '@chakra-ui/react';
import { baseData } from './mycampaign';

function SidePannel(){

    const [show, setShow] = useState(false);
    const {filter, setFilter} = useContext(baseData);


    function setPopularity(values){
        setFilter(prev=>{
            return {...prev, popularity: values}
        });
        
        
    }

    function rangePopularity(value){
        if(filter.popularity[filter.popularity.length - 1] === 'custom'){
            setFilter(prev=>{
                return {...prev, minPopularity:value[0], maxPopularity:value[1]}
            })
        }
    }
    

    return(
        <>

        <Box pb="15px" pt="5px">
            <Box fontSize="15px" fontWeight="bold" color="gray.600" textTransform="uppercase" py="10px">Popularity</Box>
            <CheckboxGroup onChange={(value)=>{setPopularity(value)}} colorScheme='blue'>
                <Stack spacing="5" px="10px">
                    <Checkbox value='nano'>Nano(1k-9k)</Checkbox>
                    <Checkbox value='micro'>Micro(100k-900k)</Checkbox>
                    <Checkbox value='macro'>Macro(1M-10M)</Checkbox>
                    <Checkbox value='custom'>Custom</Checkbox>

                    <RangeSlider
                        aria-label={"['min', 'max']"}
                        onChangeEnd={(val) => {rangePopularity(val)}}
                        min={0}
                        max={10000000}
                        step={1000000}
                        defaultValue={[0, 10000000]}
                        >
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} bgColor="blue.500"/>
                        <RangeSliderThumb index={1} bgColor="blue.500"/>
                    </RangeSlider>

                    <Flex justifyContent='space-between' fontSize='sm' color='gray.500'>
                        <div>0</div>
                        <div>10M</div>
                    </Flex>

                </Stack>
            </CheckboxGroup>

        </Box>
        <Box py="15px">
            <Box fontSize="15px" fontWeight="bold" color="gray.600" textTransform="uppercase" py="10px">Campaign preference</Box>
            <CheckboxGroup onChange={(value)=>{}} colorScheme='blue'>
                <Stack spacing="5" px="10px">
                    <Checkbox value='barter'>Barter</Checkbox>
                    <Checkbox value='paid'>Paid</Checkbox>
                </Stack>
            </CheckboxGroup>
        </Box>

        <Box py="15px">
            <Box fontSize="15px" fontWeight="bold" color="gray.600" textTransform="uppercase" py="10px">Plateform</Box>
            <CheckboxGroup onChange={(value)=>{}} colorScheme='blue'>
                <Stack spacing="5" px="10px">
                    <Checkbox value='youtube'>YouTube</Checkbox>
                    <Checkbox value='instagram'>Instagram</Checkbox>
                </Stack>
            </CheckboxGroup>
        </Box>

        <Box py="15px">
            <Box fontSize="15px" fontWeight="bold" color="gray.600" textTransform="uppercase" py="10px">Engagement rate</Box>
            <Box px="10px">

            <RangeSlider
                aria-label={"['min', 'max']"}
                onChangeEnd={(val) => {}}
                min={0}
                max={10000000}
                step={1000000}
                defaultValue={[0, 10000000]}
                >
                <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} bgColor="blue.500"/>
                <RangeSliderThumb index={1} bgColor="blue.500"/>
            </RangeSlider>

            <Flex justifyContent='space-between' fontSize='sm' color='gray.500'>
                <div>0</div>
                <div>10M</div>
            </Flex>
            </Box>

        </Box>

        <Box py="15px">
            <Box fontSize="15px" fontWeight="bold" color="gray.600" textTransform="uppercase" py="10px">Average</Box>
            <Box px="10px">

            <RangeSlider
                aria-label={"['min', 'max']"}
                onChangeEnd={(val) => {}}
                min={0}
                max={10000000}
                step={1000000}
                defaultValue={[0, 10000000]}
                >
                <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} bgColor="blue.500"/>
                <RangeSliderThumb index={1} bgColor="blue.500"/>
            </RangeSlider>

            <Flex justifyContent='space-between' fontSize='sm' color='gray.500'>
                <div>0</div>
                <div>10M</div>
            </Flex>
            </Box>

        </Box>

        <Box py="15px">
            <Box fontSize="15px" fontWeight="bold" color="gray.600" textTransform="uppercase" py="10px">Category</Box>
            <Box py="15px">
                <Input variant="flushed" placeholder='Search Category'/>
            </Box>

            <CheckboxGroup onChange={(value)=>{}} colorScheme='blue'>
        
            <Collapse startingHeight={115} in={show}>
                <Stack spacing="5" px="10px">
                    <Checkbox value='vehicles'>Autos and Vehicles</Checkbox>
                    <Checkbox value='animation'>Animation</Checkbox>
                    <Checkbox value='agri'>Agriculture & Allied Sector</Checkbox>
                    <Checkbox value='arts'>Arts & Craft</Checkbox>
                    <Checkbox value='beauty'>Beauty</Checkbox>
                    <Checkbox value='beauty'>Beauty</Checkbox>
                    <Checkbox value='beauty'>Blogs And Travel</Checkbox>
                    <Checkbox value='beauty'>Blogs And Travel</Checkbox>
                    

                    
                </Stack>
            </Collapse>
            <Button size='sm' onClick={()=>{setShow(!show)}} mt='1rem' bgColor="transparent" color="blue.500">
                Show {show ? 'Less' : 'More'}
            </Button>
            </CheckboxGroup>
        </Box>


        </>
    );
}

export default SidePannel;