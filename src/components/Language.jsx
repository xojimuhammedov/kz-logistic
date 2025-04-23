import React from "react";
import { useTranslation } from "react-i18next";
import UzbekImage from "../assets/kz.png";
import RussianImage from "../assets/russian.png";
import EnglishImage from "../assets/english.png";
// import ChinaImage from "../assets/china.png";
import {
    Box,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";

const languageData = [
    {
        id: 1,
        image: UzbekImage,
        value: "kz",
    },
    {
        id: 2,
        image: RussianImage,
        value: "ru",
    },
    {
        id: 3,
        image: EnglishImage,
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

    const languageImage =
        i18n?.language === "kz"
            ? UzbekImage
            : i18n?.language === "ru"
                ? RussianImage
                : EnglishImage

    const data = languageData?.filter((item) => item?.value != i18n.language);

    return (
        <>
            <Menu isLazy>
                <MenuButton minW={'15px'}>
                    <Image
                        className={"language-image"}
                        src={languageImage}
                        alt="Language"
                        {...css.image}
                    />
                </MenuButton>
                <MenuList ml={"-12px"} zIndex="999" {...css.menuItem}>
                    {data?.map((item, index) => (
                        <MenuItem key={index}>
                            <Box onClick={() => onChangeLanguage(item.value)}>
                                <Image
                                    className={"language-image"}
                                    src={item.image}
                                    {...css.images}
                                    alt="English"
                                />
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
        minWidth: "35px",
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