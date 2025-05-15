import { Box, Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';
import Language from './Language';
import { Mail, Phone } from 'lucide-react';
import WhatsappIcon from "../assets/whatsapp.png";
import { useTranslation } from 'react-i18next';

const Nav = () => {
    const { t } = useTranslation()
    return (
        <Box p={'18px 0'}>
            <Box className='container'>
                <Flex align={'center'} gap={'18px'} justify={'flex-end'}>
                    <Flex alignitems={'center'} gap={'2px'}>
                        <Mail width={'16px'} color='rgba(0, 0, 0, 1)' />
                        <Link target='_blank' {...css.link} href='mailto:nomexlogistics.kz@mail.ru'>
                            nomexlogistics.kz@mail.ru
                        </Link>
                    </Flex>
                    <Language />
                    <Link {...css.phone}>
                        <Phone width='18px' />
                        {t("Позвонить")}
                    </Link>
                    <Link {...css.whatsapp}>
                        <Image w={'20px'} src={WhatsappIcon} />
                        WhatsApp
                    </Link>
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
        display: "flex",
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
        display: "flex",
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
    }
}