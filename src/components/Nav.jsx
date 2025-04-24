import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Language from './Language';

const Nav = () => {
    return (
        <Box p={'18px 0'}>
            <Box className='container'>
                <Flex justify={'flex-end'}>
                    <Language />
                </Flex>
            </Box>
        </Box>
    );
}

export default Nav;
