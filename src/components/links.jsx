import React from 'react';
import {
  ChakraProvider,
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  theme,
} from '@chakra-ui/react';


function NavLinks(){
    return(
        <ChakraProvider theme={theme}>
            <Breadcrumb color='gray.500' paddingBottom="10px">
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'> {">"} Link</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'> {">"} Link</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'> {">"} Link</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>            
        </ChakraProvider>
    );
}

export default NavLinks;