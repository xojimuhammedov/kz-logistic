import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
// import ContactBanner from "../assets/contact-banner.jpg";
import { useTranslation } from "react-i18next";
import Form from "./Form";

function ContactPage() {
    const { t } = useTranslation();
    return (
        <>
            <Box
                p={{
                    base: "18px 0",
                    lg: "30px 0",
                }}>
                <Box className="container">
                    {/* <Image {...css.banner} src={ContactBanner} /> */}
                    <Heading {...css.subname}>{t("Contact")}</Heading>
                    <Flex
                        flexDirection={{ base: "column", md: "row" }}
                        align={"center"}
                        justify={"space-between"}>
                        <Heading {...css.title}>{t("Reach Out to Us Anytime")}</Heading>
                    </Flex>
                </Box>
            </Box>
            <Form />
        </>
    );
}

export default ContactPage;

const css = {
    subname: {
        color: "#F70",
        fontSize: "22px",
        fontWeight: "600",
        lineHeight: "normal",
        marginBottom: "30px",
        marginTop: "60px",
    },
    title: {
        fontSize: {
            base: "30px",
            sm: "65px",
        },
        lineHeight: {
            base: "40px",
            sm: "80px",
        },
        fontWeight: "600",
        letterSpacing: "0.65px",
        color: "#000000",
        width: {
            base: "100%",
            lg: "646px",
        },
    },
    subtext: {
        fontSize: {
            base: "16px",
            lg: "18px",
        },
        lineHeight: "28px",
        fontWeight: "400",
        color: "#000000",
        letterSpacing: "0.18px",
        width: {
            base: "100%",
            lg: "400px",
        },
    },
    banner: {
        height: {
            base: "450px",
            lg: "650px",
        },
        width: "100%",
        borderRadius: "12px",
        objectFit: "cover",
    },
};