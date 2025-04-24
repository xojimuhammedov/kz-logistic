import React from "react";
import { useTranslation } from "react-i18next";
// import UzbekImage from "../assets/kz.png";
// import RussianImage from "../assets/russian.png";
// import EnglishImage from "../assets/english.png";
// import ChinaImage from "../assets/china.png";
import {
    Box,
    Flex,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import Globe from "../assets/Globe";

const languageData = [
    {
        id: 1,
        title: 'KZ - Kazakhistan',
        value: "kz",
    },
    {
        id: 2,
        title: "RU - Russian",
        value: "ru",
    },
    {
        id: 3,
        title: "EN - England",
        value: "en",
    },
    // {
    //     id: 4,
    //     image: ChinaImage,
    //     value: "chn",
    // },
];

function Language() {
    const { i18n } = useTranslation();

    const onChangeLanguage = (value) => {
        i18n.changeLanguage(value);
    };

    const languageValue =
        i18n?.language === "kz"
            ? 'KZ - Kazakhistan'
            : i18n?.language === "ru"
                ? "RU - Russian"
                : "EN - England"

    const data = languageData?.filter((item) => item?.value != i18n.language);

    return (
        <>
            <Menu isLazy>
                <Flex gap={'8px'} align={'center'}>
                    <Globe />
                    <MenuButton fontWeight={'600'} fontFamily={'"Manrope"'} minW={'100px'}>
                        {languageValue}
                    </MenuButton>
                </Flex>
                <MenuList ml={"-12px"} zIndex="999" {...css.menuItem}>
                    {data?.map((item, index) => (
                        <MenuItem key={index}>
                            <Box fontWeight={'600'} onClick={() => onChangeLanguage(item.value)}>
                                {item?.title}
                            </Box>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </>
    );
}

export default Language;

const css = {
    menuItem: {
        minWidth: "130px",
    },
    image: {
        width: {
            base: "60px",
            md: "30px",
        },
        borderRadius: "50%",
        height: "30px",
        objectFit: "cover",
    },
    images: {
        width: "30px",
        borderRadius: "50%",
        height: "30px",
        objectFit: "cover",
    },
};