import { Box, Flex, Heading, Image, Text, Link, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import LogoIcon from "../assets/new-logo.jpg";
import NavbarMenu from "./NavbarMenu";
import { Link as Alink, useNavigate } from "react-router-dom";
import { servicesData } from "../data";

function Navbar() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate()
    return (
        <Box>
            <Box pb={'12px'} borderBottom={'1px solid rgba(51, 51, 51, 0.20)'} className="container">
                <Flex justifyContent={"flex-end"} align={"center"}>
                    <Flex align={"center"} gap={{ base: "16px", lg: "32px" }}>
                        <Alink to={"/"}>
                            <Text {...css.link}>{t("Home")}</Text>
                        </Alink>
                        <Alink to={"/"}>
                            <Text {...css.link}>{t("About")}</Text>
                        </Alink>
                        {/* <Menu isLazy>
                            <MenuButton {...css.link}>{t("About")}</MenuButton>
                           
                        </Menu> */}
                        <Menu isLazy>
                            <MenuButton {...css.link}>{t("Services")}</MenuButton>
                            <MenuList>
                                {
                                    servicesData?.map((item) => (
                                        <MenuItem onClick={() => navigate(`/service/${item?.id}`)} fontSize={'14px'} color={'rgba(0, 0, 0, 1)'} fontWeight={'600'}>{item[`title_${i18n?.language}`]}</MenuItem>
                                    ))
                                }
                            </MenuList>
                        </Menu>
                        <Alink to={"/contact"}>
                            <Text {...css.link}>{t("Contact")}</Text>
                        </Alink>
                        <NavbarMenu />
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

export default Navbar;

const css = {
    link: {
        fontSize: "18px",
        lineHeight: "22px",
        fontWeight: "600",
        color: "rgba(0, 0, 0, 1)",
        display: {
            base: "none",
            lg: "block",
        },
        transition: "0.3s",

        _hover: {
            color: "#F70"
        }
    },
    icon: {
        width: "220px",
        height: "100px",
        objectFit: "contain",
    },
    image: {
        // width: "180px",
        height:"80px",
        objectFit:"contain"
    }
};