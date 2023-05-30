import React, {useEffect, useState} from 'react';
import {
  Box,
  Flex,
} from '@chakra-ui/react';
import NavLinks from './links';
import SidePannel from './sidepannel';
import CustomCard from './customcard';
import TopEl from './topel'
import data from '../data/dummyData.json'

const baseData = React.createContext('data');

function MyCampaign({cmpHeight}){

    const [items, setItems] = useState(data);
    const [filter, setFilter] = useState({
        popularity: [],
        minPopularity: 0,
        maxPopularity: 10000000,
        plateform: [],
        preference: [],
        engagement: [],
        avg: [0, 10000000]

    });


    useEffect(()=>{
        setItems(prev=>{

            let popularItem = [];
            let platformItem = [];
            let preferenceItem = [];
            let engagementItem = [];

            
            if(filter.popularity.length !== 0){
                
                let newItems = filter.popularity.map(value=>{
                    if(value==='nano'){
                        return(data.filter(item=>item.popularity<=9000 && item.popularity>=1000));
                        
                    }
                    else if(value === 'micro'){
                        return (data.filter(item=>item.popularity<=999000 && item.popularity>=100000));
                    }
                    else if(value === 'macro'){
                        return (data.filter(item=>item.popularity<=10000000 && item.popularity>=1000000));
                    }
                    else if(value === 'custom'){
                        return(data.filter(item=>item.popularity<=filter.maxPopularity && item.popularity >= filter.minPopularity));
                    }
                    else return data;

                });

                let allItems = [];
                for(let i=0; i<newItems.length; i++){
                    allItems = [...allItems, ...newItems[i]]
                }
                
                popularItem = allItems;
            }
            else {
                popularItem = data;
            }


            if(filter.plateform.length !== 0){
                

            }
            else{
                platformItem = data;
            }


            return popularItem;
        })


        

    }, [filter]);

    return(
        <baseData.Provider value={{filter: filter, setFilter: setFilter}}>
            <NavLinks />
            <Flex>
                <Box w="20%" minW="250px" bgColor="white" py="5px" px="10px" rounded="lg" border="1px solid #f0f0f0" h={cmpHeight} overflow="auto">
                    <SidePannel />
                </Box>
                <Box py="5px" px="10px" width="80%" h={cmpHeight} overflow='auto'>
                    <TopEl 
                    values={['1','2','3', '4']} 
                    Name={'sort'} 
                    displayName={['High to Low', 'Low to High', 'Newest', 'Popular']} />

                    <Box py="20px">
                        {items.map(item=>{

                            return(<CustomCard name={item.name} preference={item.preference} plateform={item.plateform}/>);
                        })}
                    </Box>


                </Box>

            </Flex>

        </baseData.Provider>
    );

}
export {baseData};
export default MyCampaign;