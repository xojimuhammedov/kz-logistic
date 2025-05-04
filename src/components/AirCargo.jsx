import { Box, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import IconOne from '../assets/icon1.svg'
import IconTwo from '../assets/icon2.svg'
import IconThree from '../assets/icon3.svg'
import IconFive from '../assets/icon4.svg'
import IconFour from '../assets/icon5.svg'
import { useTranslation } from 'react-i18next';

const data = [
    {
        id: 1,
        title_ru: "Собственный автопарк",
        title_en: "Own vehicle fleet",
        title_kz: "Өз автопаркі",
        icon: IconOne
    },
    {
        id: 2,
        title_ru: "Партнеры в Европе, Азии (Китае) и СНГ",
        title_en: "Partners in Europe, Asia (China), and the CIS",
        title_kz: "Еуропа, Азия (Қытай) және ТМД-дағы серіктестер",
        icon: IconTwo
    },
    {
        id: 3,
        title_ru: "Склад в г. Алматы",
        title_en: "Warehouse in Almaty",
        title_kz: "Алматы қаласындағы қойма",
        icon: IconThree
    },
    {
        id: 4,
        title_ru: "Беремся за крупные логистические проекты",
        title_en: "We take on large logistics projects",
        title_kz: "Ірі логистикалық жобаларды орындаймыз",
        icon: IconFour
    },
    {
        id: 5,
        title_ru: "Обучение по логистике",
        title_en: "Logistics training",
        title_kz: "Логистика бойынша оқыту",
        icon: IconFive
    }
];


const AirCargo = () => {
    const { t, i18n } = useTranslation()
    return (
        <Box p={'36px 0'}>
            <Box className='container'>
                <Heading as="h1"
                    fontSize={{ base: "4xl" }}
                    textAlign={'center'}
                    fontWeight="bold"
                    lineHeight="1.2"
                    color="#2F2F2F">{t("Быстро доставим груз и оформим все документы за вас")}</Heading>
                <SimpleGrid mt={'36px'} alignItems={'center'} columns={5}>
                    {
                        data.map((item) => (
                            <Flex flexDirection={'column'} align={'center'}>
                                <Image src={item?.icon} />
                                <Heading {...css.name}>{item[`title_${i18n?.language}`]}</Heading>
                            </Flex>
                        ))
                    }
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default AirCargo;

const css = {
    name: {
        fontSize: "16px",
        textAlign: "center",
        lineHeight: "24px",
        margin: "12px 0"
    }
}
