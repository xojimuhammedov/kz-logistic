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
    useDisclosure,
} from '@chakra-ui/react';
// import { ArrowForwardIcon } from '@chakra-ui/icons';

import TruckImage from '../assets/header-banner.jpg'
import MapImage from '../assets/map.png'
import { useTranslation } from 'react-i18next';
import RequestModal from './RequestModal';

import HeaderBannerImage from '../assets/headerbanner3.jpg'
import Calculator from './Calculator';

export default function TransportHero() {
    const { t } = useTranslation()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box
                w="100%"
                backgroundImage={HeaderBannerImage}
                backgroundRepeat={'no-repeat'}
                backgroundSize={'cover'}
                height={{ base: "100vh", lg: '90vh' }}
            >
                <Container maxW="container.xl" zIndex="2">
                    <Flex
                        direction={{ base: 'column', lg: 'row' }}
                        py={{ base: 8, md: 12 }}
                        justifyContent={'space-between'}
                        alignItems="center"
                        gap={'24px'}
                    >
                        {/* Left Content */}
                        <Stack
                            spacing={5}
                            maxW={{ base: "100%", lg: "40%" }}
                            pr={{ base: 0, lg: 8 }}
                            mb={{ base: 8, lg: 0 }}
                            mt={{ base: "0", lg: '72px' }}
                        >
                            <Heading
                                as="h1"
                                fontSize={{ base: "4xl", md: "5xl" }}
                                fontWeight="bold"
                                lineHeight="1.2"
                                color="#fff"
                            >
                                {t("Транспорт и логистика")}
                            </Heading>

                            <Text fontSize={{ base: "md", md: "lg" }} color="#fff">
                                {t("Лидеры в сфере транспорта и логистики переосмысливают принципы перемещения товаров в мире, где каждая миля имеет значение.")}
                            </Text>

                            <Box>
                                <Button
                                    {...css.button}
                                    onClick={onOpen}
                                    px={6}
                                >
                                    {t("ЗАПРОСИТЬ СЕЙЧАС")}
                                </Button>
                            </Box>
                        </Stack>

                        {/* Right Content - Orange Trucks Image */}
                        <Box
                            w={{ base: "100%", lg: "60%" }}
                            maxW={'480px'}
                            mt={{ base: "0", lg: '72px' }}
                        >
                            <Calculator />
                        </Box>
                    </Flex>
                </Container>
            </Box>
            <RequestModal isOpen={isOpen} onClose={onClose} />
        </>
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
        width: "180px",
        justifyContent: "center",
        borderRadius: "12px",

        _hover: {
            background: "#F70",
        }
    }
}

{/* https://demosoledad.pencidesign.net/soledad-logistics-business-multipurpose/wp-content/uploads/sites/45/2019/09/6.jpg */ }
