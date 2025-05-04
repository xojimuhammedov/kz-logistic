import React from 'react';
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Text,
    Stack,
    Icon,
    Image,
} from '@chakra-ui/react';

import TruckImage from '../assets/truck2.png'
import MapImage from '../assets/map.png'
import { useTranslation } from 'react-i18next';

const Hero = ({ data }) => {
    const { t, i18n } = useTranslation()
    return (
        <Box
            w="100%"
            position="relative"
            overflow="hidden"
            bg="white"
        >
            {/* Background World Map */}
            <Box
                position="absolute"
                width="100%"
                height="100%"
                opacity="1"
                zIndex="1"
            >
                <Box
                    as="div"
                    bgImage={MapImage}
                    bgPosition="center"
                    bgSize="cover"
                    position="absolute"
                    width="50%"
                    height="100%"
                    left={'10%'}
                    opacity="0.7"
                    top={'10%'}
                />
            </Box>

            <Container maxW="container.xl" position="relative" zIndex="2">
                <Flex
                    direction={{ base: 'column', lg: 'row' }}
                    py={{ base: 8 }}
                    align="center"
                >
                    {/* Left Content */}
                    <Stack
                        spacing={5}
                        maxW={{ base: "100%", lg: "40%" }}
                        pr={{ base: 0, lg: 8 }}
                        mb={{ base: 8, lg: 0 }}
                    >
                        <Heading
                            as="h1"
                            fontSize={{ base: "4xl", md: "5xl" }}
                            fontWeight="bold"
                            lineHeight="1.2"
                            color="#2F2F2F"
                        >
                            {data[`title_${i18n?.language}`]}
                        </Heading>

                        <Box>
                            <Button
                                size="lg"
                                {...css.button}
                                px={6}
                            >
                                {t("ЗАПРОСИТЬ СЕЙЧАС")}
                            </Button>
                        </Box>
                    </Stack>

                    {/* Right Content - Orange Trucks Image */}
                    <Box
                        w={{ base: "100%", lg: "60%" }}
                        position="relative"
                    >

                        <Box
                            borderRadius="md"
                            overflow="hidden"
                            position="relative"
                            left={'13%'}
                            zIndex="2"
                        >
                            <Image
                                src={data?.image}
                                alt="Orange AXT Trucks"
                                w="570px"
                                h="350px"
                                objectFit={'contain'}
                            />
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}

export default Hero;

const css = {
    button: {
        background: "#F70",
        color: "#fff",
        fontSize: "14px",
        transition: "0.3s easy",

        _hover: {
            background: "#F70",
        }
    }
}
