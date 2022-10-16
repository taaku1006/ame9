import { Box,Heading,Flex,Link } from "@chakra-ui/react";
import React from "react";


export const Header = () => {
    return (
        <Flex as= "nav" bg="teal" color="white" align="center" justify="space-between" padding={{base: 3,md: 5}}>
            <Flex align="center" as="a" mr={8} _hover={{cursor: "pointer"}}>
                <Heading as="h1" fontSize={{base: "md",md: "lg"}}>ホーム</Heading>
            </Flex>
            
            <Flex align="center" fontSize="md" flexGrow={1} display={{base:"none",md:"flex"}} >
                <Box pr={4}>
                    <Link>降雨量</Link>
                </Box>
            </Flex>
        </Flex>
    )
};

