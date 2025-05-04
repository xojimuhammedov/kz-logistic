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
    Link,
} from '@chakra-ui/react';
// import { ArrowForwardIcon } from '@chakra-ui/icons';

import TruckImage from '../assets/truck2.png'
import MapImage from '../assets/map.png'
import { useTranslation } from 'react-i18next';

export default function TransportHero() {
    const { t } = useTranslation()
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
                    py={{ base: 8, md: 12 }}
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
                            {t("Транспорт и логистика")}
                        </Heading>

                        <Text fontSize={{ base: "md", md: "lg" }} color="#333">
                            {t("Лидеры в сфере транспорта и логистики переосмысливают принципы перемещения товаров в мире, где каждая миля имеет значение.")}
                        </Text>

                        <Box>
                            <Link
                                href='tel:+77710140505'
                                // size="lg"
                                {...css.button}
                                px={6}
                            >
                                {t("ЗАПРОСИТЬ СЕЙЧАС")}
                            </Link>
                        </Box>
                    </Stack>

                    {/* Right Content - Orange Trucks Image */}
                    <Box
                        w={{ base: "100%", lg: "60%" }}
                        position="relative"
                    >
                        {/* Orange accent in top right corner */}
                        <Box
                            position="absolute"
                            top="20px"
                            right="-20px"
                            bg="#F70"
                            height="45px"
                            width="250px"
                            zIndex="1"
                        />

                        <Box
                            borderRadius="md"
                            overflow="hidden"
                            position="relative"
                            left={'13%'}
                            zIndex="2"
                        >
                            <Image
                                src={TruckImage}
                                alt="Orange AXT Trucks"
                                w="670px"
                                h="436px"
                                objectFit={'contain'}
                            />
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}


const css = {
    button: {
        background: "#F70",
        color: "#fff",
        fontSize: "14px",
        transition: "0.3s easy",
        height: "45px",
        display: "flex",
        alignItems: "center",
        width: "200px",
        justifyContent: "center",

        _hover: {
            background: "#F70",
        }
    }
}