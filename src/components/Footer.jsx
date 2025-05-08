import {
    Box,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Text,
    Link,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link as Alink } from "react-router-dom";

// import Instagram from "../assets/instagram.svg";
// import Telegram from "../assets/tg.svg";
// import WhatsappIcon from "../assets/whatsapp.png";

import LogoIcon from "../assets/footer-logo.png";
import { servicesData } from "../data";

function Footer() {
    const { t, i18n } = useTranslation();
    return (
        <Box {...css.footer}>
            <Box className="container">
                {/* <Image {...css.image} src={LogoIcon} alt="Logo" /> */}
                <SimpleGrid
                    {...css.box}
                    columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                    spacing={10}>
                    <Flex flexDirection={"column"}>
                        <Heading {...css.title}>{t("INFORMATION")}</Heading>

                        <Alink onClick={() => window.scrollTo(0, 0)} to={"/company"}>
                            <Text {...css.link}>{t("About")}</Text>
                        </Alink>
                        <Alink onClick={() => window.scrollTo(0, 0)} to={"/vacancy"}>
                            <Text {...css.link}>{t("Вакансии")}</Text>
                        </Alink>
                        <Alink onClick={() => window.scrollTo(0, 0)} to={"/contact"}>
                            <Text {...css.link}>{t("Contact")}</Text>
                        </Alink>
                        <Alink onClick={() => window.scrollTo(0, 0)} to={"/tariff"}>
                            <Text {...css.link}>{t("Tariff")}</Text>
                        </Alink>
                    </Flex>
                    <Flex flexDirection={"column"}>
                        <Heading {...css.title}>{t("SERVICES")}</Heading>
                        {
                            servicesData?.slice(0, 4)?.map((item) => (
                                <Alink
                                    onClick={() => window.scrollTo({ top: 0 })}
                                    key={item?.id} to={`/service/${item?.id}`}>
                                    <Text {...css.link}>{item[`title_${i18n?.language}`]}</Text>
                                </Alink>
                            ))
                        }

                    </Flex>
                    <Flex flexDirection={"column"}>
                        <Heading {...css.title}>{t("Contact")}</Heading>
                        <Link {...css.link} target="_blank" href={"tel:+77710540606"}>
                            +7 771 054 06 06
                        </Link>
                        <Link {...css.link} target="_blank" href={"tel:+77710540606"}>
                            +7 771 014 05 05
                        </Link>

                        {/* <Link
                            {...css.link}
                            target="_blank"
                            href={"mailto:sultanbek.asilbek@gmail.com"}>
                            sultanbek.asilbek@gmail.com
                        </Link> */}
                        <Link
                            target="_blank"
                            {...css.link}
                            href={"https://maps.app.goo.gl/TArvqgcs41X2c1zQ8"}>
                            {t(
                                "Pеспублика Казахстан Город Атырау Гагарина 65"
                            )}
                        </Link>
                    </Flex>
                    <Flex flexDirection={"column"}>
                        <Heading {...css.title}>{t("FOLLOW US ON SOCIAL MEDIA")}</Heading>
                        <Text {...css.link}>{t("Join Us")}</Text>
                        {/* <Flex gap={"12px"}>
                            <Link href="/">
                                <Image {...css.icon} src={Instagram} alt="Instagram" />
                            </Link>
                            <Link target="_blank" href="https://t.me/aslgkz">
                                <Image {...css.icon} src={Telegram} alt="Telegram" />
                            </Link>
                            <Link target="_blank" href="https://wa.me/+77753378595">
                                <Image {...css.icon} src={WhatsappIcon} alt="WhatsappIcon" />
                            </Link>
                        </Flex> */}
                    </Flex>
                </SimpleGrid>
                <Text
                    color={"#fff"}
                    fontSize={"16px"}
                    textAlign={"center"}
                    lineHeight={"24px"}
                    mt={"40px"}>
                    © 2025 {t("All rights reserved")}
                </Text>
            </Box>
        </Box>
    );
}

export default Footer;

const css = {
    footer: {
        background: "#F70",
        padding: "40px 0",
    },
    title: {
        color: "#fff",
        fontSize: "16px",
        lineHeight: "24px",
        marginBottom: "10px",
        fontWeight: "700",
    },
    link: {
        color: "#fff",
        fontSize: "16px",
        lineHeight: "24px",
        marginBottom: "10px",
        fontWeight: "500",
        transition: "0.3s",

        _hover: {
            textDecoration: "none",
        },
    },
    box: {
        borderBottom: "1px solid #fff",
        padding: "48px 0",
        borderTop: "1px solid #fff",
    },
    icon: {
        width: "25px",
    },
    image: {
        width: "220px",
        height: "100px",
        objectFit: "contain",
        cursor: "pointer",
    },
};