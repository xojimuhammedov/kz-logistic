import { Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

import TruckImage from '../assets/truck-1.jpg'
import { useTranslation } from 'react-i18next';

const features = [
    {
        number: "01",
        title_ru: "ЭКСПЕРТИЗА И ОПЫТ",
        title_kz: "САРАПТАМА ЖӘНЕ ТӘЖІРИБЕ",
        title_en: "EXPERTISE AND EXPERIENCE"
    },
    {
        number: "02",
        title_ru: "ПРИВЕРЖЕННОСТЬ КАЧЕСТВУ",
        title_kz: "САПАҒА АДАЛДЫҚ",
        title_en: "COMMITMENT TO QUALITY"
    },
    {
        number: "03",
        title_ru: "КОМПЛЕКСНЫЕ УСЛУГИ",
        title_kz: "КЕШЕНДІ ҚЫЗМЕТТЕР",
        title_en: "COMPREHENSIVE SERVICES"
    }
];


const About = () => {
    const { t, i18n } = useTranslation()
    return (
        <Box p={'84px 0'}>
            <Box className='container'>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="space-between"
                    align="center"
                    gap={16}
                    mb={16}
                >
                    <Box maxW={{ base: "full", md: "50%" }}>
                        <Text color="#F70" fontWeight="bold" textTransform="uppercase" mb={2}>
                            {t("About")}
                        </Text>
                        <Heading color={'#121D50'} fontSize={{ base: "2xl", md: "45px" }} mb={4}>
                            {t("ЛОГИСТИЧЕСКИЕ РЕШЕНИЯ ДЛЯ ВАШЕГО УСПЕХА")}
                        </Heading>
                        <Text fontSize="md" color="gray.600" mb={6}>
                            {t("В FastGo мы верим в предоставление нашим клиентам персонализированных и эффективных логистических решений, которые отвечают их уникальным потребностям. Благодаря многолетнему опыту и команде экспертов мы стремимся ...")}
                        </Text>
                        <Button w={'180px'} h={'54px'} bg="#F70" color="white" borderRadius={'12px'} _hover={{ bg: "orange.600" }}>
                            {t("ПОДРОБНЕЕ")}
                        </Button>
                    </Box>
                    <Box>
                        <Image
                            src={TruckImage}
                            alt="Truck"
                            style={{ borderRadius: "16px", objectFit: "cover", height:"390px" }}
                        />
                    </Box>
                </Flex>

                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                    {features.map((feature, idx) => (
                        <Box
                            key={idx}
                            bg="#F70"
                            color="white"
                            p={'24px'}
                            rounded="xl"
                            textAlign="left"
                            display="flex"
                            alignItems="center"
                            gap={4}
                        >
                            <Text fontSize="2xl" fontWeight="700">
                                {feature.number}
                            </Text>
                            <Text fontSize="lg" fontWeight="700">
                                {feature[`title_${i18n?.language}`]}
                            </Text>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default About;
