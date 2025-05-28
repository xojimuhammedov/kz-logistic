import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import KzIcon from '../assets/kz.svg'
import RuIcon from '../assets/ru.svg'
import ChnIcon from '../assets/chn.svg'
import UzIcon from '../assets/uz.svg'
import SngIcon from '../assets/sng.svg'
import IrIcon from '../assets/ir.svg'
import EuIcon from '../assets/eu.svg'
import { useTranslation } from 'react-i18next';

const translatedData = [
    {
        id: 1,
        title_ru: "Внутри Казахстана",
        title_en: "Within Kazakhstan",
        title_kz: "Қазақстан ішінде",
        text_ru: "Доставка грузов во все регионы и месторождения",
        text_en: "Cargo delivery to all regions and oilfields",
        text_kz: "Барлық өңірлер мен кен орындарына жүк жеткізу",
        icon: KzIcon
    },
    {
        id: 2,
        title_ru: "Россия",
        title_en: "Russia",
        title_kz: "Ресей",
        text_ru: "От дальневосточных регионов до европейской части страны",
        text_en: "From the Far Eastern regions to the European part of the country",
        text_kz: "Қиыр Шығыс өңірлерінен елдің Еуропалық бөлігіне дейін",
        icon: RuIcon
    },
    {
        id: 3,
        title_ru: "Китай",
        title_en: "China",
        title_kz: "Қытай",
        text_ru: "От крупных промышленных центров до портов и складов по всему Китаю",
        text_en: "From major industrial centers to ports and warehouses across China",
        text_kz: "Қытайдағы ірі өндірістік орталықтардан порттар мен қоймаларға дейін",
        icon: ChnIcon
    },
    {
        id: 4,
        title_ru: "СНГ",
        title_en: "CIS",
        title_kz: "ТМД",
        text_ru: "Охватываем страны Содружества Независимых Государств, обеспечивая бесперебойные перевозки",
        text_en: "Covering CIS countries, ensuring uninterrupted transportation",
        text_kz: "ТМД елдерін қамтып, үздіксіз тасымалды қамтамасыз етеміз",
        icon: SngIcon
    },
    {
        id: 5,
        title_ru: "Узбекистан",
        title_en: "Uzbekistan",
        title_kz: "Өзбекстан",
        text_ru: "Обеспечиваем доставку в важные торговые и производственные центры",
        text_en: "Ensuring delivery to key trade and industrial centers",
        text_kz: "Маңызды сауда және өндірістік орталықтарға жеткізуді қамтамасыз етеміз",
        icon: UzIcon
    },
    {
        id: 6,
        title_ru: "Иран",
        title_en: "Iran",
        title_kz: "Иран",
        text_ru: "Организация транспортировки через ключевые порты и логистические узлы",
        text_en: "Transportation through key ports and logistics hubs",
        text_kz: "Негізгі порттар мен логистикалық тораптар арқылы тасымалдауды ұйымдастыру",
        icon: IrIcon
    },
    {
        id: 7,
        title_ru: "Другие страны",
        title_en: "Other Countries",
        title_kz: "Басқа елдер",
        text_ru: "Адаптируем наши услуги для доставки в различные международные направления в зависимости от ваших потребностей",
        text_en: "We adapt our services for deliveries to various international destinations based on your needs",
        text_kz: "Біз қызметтерімізді сіздің қажеттіліктеріңізге қарай әртүрлі халықаралық бағыттарға бейімдейміз",
        icon: EuIcon
    }
];


const Geography = () => {
    const { t, i18n } = useTranslation()
    return (
        <Box p="24px 0">
            <Box className='container'>
                <Heading {...css.name}>{t("География перевозок")}</Heading>
                <Text {...css.texts}>{t("Мы тщательно планируем и координируем маршрут, чтобы минимизировать время и затраты на перевозку. Мы предлагаем решения для доставки по следующим ключевым маршрутам")}:</Text>
                <SimpleGrid mt={'24px'} gap={{ base: "8px", lg: '24px' }} columns={{ base: 2, lg: 4 }}>
                    {
                        translatedData.map((item) => (
                            <Flex {...css.item} flexDirection={'column'}>
                                <Image {...css.icon} src={item?.icon} />
                                <Heading {...css.title}>{item[`title_${i18n?.language}`]}</Heading>
                                <Text {...css.text}>{item[`text_${i18n?.language}`]}</Text>
                            </Flex>
                        ))
                    }
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default Geography;


const css = {
    item: {
        borderRadius: "12px",
        padding: {
            base: "12px",
            lg: "2rem 0.75rem"
        },
        background: "#f7f7f7",
        alignItems: "center"
    },
    title: {
        fontSize: {
            base: "18px",
            lg: "22px"
        },
        textAlign: "center",
        lineHeight: {
            base: "22px",
            lg: "34px"
        },
        margin: "12px 0",
        fontWeight: "700"
    },
    text: {
        fontSize: {
            base: "12px",
            lg: "14px"
        },
        textAlign: "center",
        lineHeight: "24px",
        fontWeight: "500"
    },
    name: {
        fontSize: {
            base: "3xl",
            lg:"4xl"
        },
        textAlign: 'center',
        fontWeight: "bold",
        lineHeight: "1.2",
        color: "#2F2F2F",
    },
    texts: {
        fontSize: "16px",
        textAlign: "center",
        lineHeight: "24px",
        margin: "12px 0"
    },
    icon: {
        width: {
            base: "100px",
            lg: "130px"
        },
        height: "100px",
        objectFit: "contain"
    }
}