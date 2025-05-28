import { Button, Flex, Link, Menu, Text, useDisclosure, MenuList, MenuItem, MenuButton as MenuButtonTwo } from "@chakra-ui/react";
import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";

import { Link as Alink } from "react-router-dom";
import MenuButton from "../assets/MenuButton";
import { useTranslation } from "react-i18next";
import { servicesData } from "../data";

function NavbarMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { t, i18n } = useTranslation();
    return (
        <>
            <Button {...css.button} onClick={onOpen}>
                <MenuButton />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent {...css.menuList}>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex
                            pt={"48px"}
                            flexDirection={"column"}
                            alignItems={"center"}
                            gap={"36px"}>
                            <Alink onClick={onClose} to={"/"}>
                                <Text {...css.link}>{t("Home")}</Text>
                            </Alink>
                            <Alink onClick={onClose} to={"/"}>
                                <Text {...css.link}>{t("About")}</Text>
                            </Alink>
                            {/* <Menu isLazy>
                                <MenuButtonTwo {...css.link}>{t("About")}</MenuButtonTwo>
                                <MenuList>
                                    <MenuItem onClick={() => {
                                        navigate('/company')
                                        onClose
                                    }} fontSize={'14px'} color={'rgba(0, 0, 0, 1)'} fontWeight={'600'}>{t("About")}</MenuItem>
                                    <MenuItem onClick={() => {
                                        navigate('/autoparc')
                                        onClose
                                    }} fontSize={'14px'} color={'rgba(0, 0, 0, 1)'} fontWeight={'600'}>{t("Автопарк")}</MenuItem>
                                </MenuList>
                            </Menu> */}
                            <Menu isLazy>
                                <MenuButtonTwo {...css.link}>{t("Services")}</MenuButtonTwo>
                                <MenuList>
                                    {
                                        servicesData?.map((item) => (
                                            <MenuItem onClick={() => { navigate(`/service/${item?.id}`); onClose }} fontSize={'14px'} color={'rgba(0, 0, 0, 1)'} fontWeight={'600'}>{item[`title_${i18n?.language}`]}</MenuItem>
                                        ))
                                    }
                                </MenuList>
                            </Menu>
                            <Alink onClick={onClose} to={"/contact"}>
                                <Text {...css.link}>{t("Contact")}</Text>
                            </Alink>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default NavbarMenu;

const css = {
    link: {
        fontSize: "18px",
        lineHeight: "22px",
        fontWeight: "500",
        color: "rgba(0, 0, 0, 1)",
    },
    menuList: {
        borderRadius: "0",
        margin: "0",
        height: "100%",
    },
    button: {
        backgroundColor: "transparent",
        width: "55px",
        display: {
            base: "block",
            md: "none",
        },
    },
};