import React, {useState, useRef, useEffect} from 'react';
import {
  ChakraProvider,
  Tabs, TabPanels, TabPanel,
  theme,
} from '@chakra-ui/react';

import NavBar from './navbar';
import MyCampaign from './mycampaign';


function MainBody(){
    const navRef = useRef();
    const [cmpHeight, setHeight] = useState('');

    useEffect(()=>{
        setHeight(`calc(100vh - ${navRef.current.scrollHeight}px - 75px)`);
    },[cmpHeight])

    return(
        
        <ChakraProvider theme={theme}>
        <Tabs overflow='hidden' height='100vh'>
            <NavBar Ref={navRef}/>
            <TabPanels>
                <TabPanel>
                <p>Home</p>
                </TabPanel>
                <TabPanel>
                <p><MyCampaign cmpHeight={cmpHeight}/></p>
                </TabPanel>
            </TabPanels>
        </Tabs>
        </ChakraProvider>
    );
}

export default MainBody;