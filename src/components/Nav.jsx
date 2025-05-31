import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';
import Language from './Language';
import { Mail, Phone } from 'lucide-react';
import WhatsappIcon from "../assets/whatsapp.png";
import { useTranslation } from 'react-i18next';
import ContactInfo from './ContactInfo';
import CalculatorModal from './CalculatorModal';

import LogoIcon from "../assets/new-logo.jpg";
import { Link as Alink } from "react-router-dom";

const Nav = () => {
    const { t } = useTranslation()
    return (
        <Box p={'12px 0'}>
            <Box className='container'>
                <Flex alignItems={'center'} justify={'space-between'}>
                    <Alink to={"/"}>
                        <Image {...css.image} src={LogoIcon} />
                    </Alink>
                    <Flex align={'center'} gap={{ base: "12px", lg: '18px' }} justify={'flex-end'}>
                        <CalculatorModal />
                        <ContactInfo />
                        <Link target='_blank' href='tel:+77710540606' {...css.phone}>
                            <Phone width='18px' />
                            {t("Позвонить")}
                        </Link>
                        <Link target="_blank" href="https://wa.me/+77710540606" {...css.whatsapp}>
                            <Image w={'20px'} src={WhatsappIcon} />
                            WhatsApp
                        </Link>
                        <Language />
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

export default Nav;

const css = {
    link: {
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "600",
        color: "rgba(0, 0, 0, 1)",
    },
    whatsapp: {
        background: "#25d366",
        border: "1px solid #25d366",
        width: "145px",
        display: {
            base: "none",
            lg: "flex"
        },
        height: "45px",
        alignItems: "center",
        color: "#fff",
        gap: "8px",
        justifyContent: "center",
        borderRadius: "12px",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: "12px",
    },
    phone: {
        width: "145px",
        display: {
            base: "none",
            lg: "flex"
        },
        height: "45px",
        alignItems: "center",
        color: "#fff",
        gap: "8px",
        justifyContent: "center",
        borderRadius: "12px",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: "12px",
        background: "#F70",
        border: "1px solid #F70",
    },
    image: {
        height: {
            base: "70px",
            lg: "90px"
        },
        objectFit: "contain"
    }
}