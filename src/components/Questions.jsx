import {
    Box,
    Flex,
    Heading,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import FadeInSection from "./FadeInSection";

function Question() {
    const { t } = useTranslation();
    return (
        <FadeInSection direction="up" delay={0.8}>
            <Box {...css.about}>
                <Box className="container">
                    <Heading {...css.subname}>{t("FAQs")}</Heading>
                    <Flex
                        flexDirection={{ base: "column", md: "row" }}
                        align={"center"}
                        justify={"space-between"}>
                        <Heading {...css.title}>{t("Часто задаваемые вопросы")}</Heading>

                    </Flex>
                    <Accordion mt={"60px"} defaultIndex={[0]} allowMultiple>
                        <AccordionItem {...css.items}>
                            <AccordionButton p={"20px"}>
                                <Box as="h2" {...css.name} flex="1" textAlign="left">
                                    {t("question_title1")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel {...css.text} pb={4}>
                                {t("question_text1")}
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem {...css.items}>
                            <AccordionButton p={"20px"}>
                                <Box as="h2" {...css.name} flex="1" textAlign="left">
                                    {t("question_title2")}{" "}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel {...css.text} pb={4}>
                                {t("question_text2")}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem {...css.items}>
                            <AccordionButton p={"20px"}>
                                <Box as="h2" {...css.name} flex="1" textAlign="left">
                                    {t("question_title3")}{" "}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel {...css.text} pb={4}>
                                {t("question_text3")}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem {...css.items}>
                            <AccordionButton p={"20px"}>
                                <Box as="h2" {...css.name} flex="1" textAlign="left">
                                    {t("question_title4")}{" "}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel {...css.text} pb={4}>
                                {t("question_text4")}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem {...css.items}>
                            <AccordionButton p={"20px"}>
                                <Box as="h2" {...css.name} flex="1" textAlign="left">
                                    {t("question_title5")}{" "}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel {...css.text} pb={4}>
                                {t("question_text5")}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem {...css.items}>
                            <AccordionButton p={"20px"}>
                                <Box as="h2" {...css.name} flex="1" textAlign="left">
                                    {t("question_title6")}{" "}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel {...css.text} pb={4}>
                                {t("question_text6")}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem {...css.items}>
                            <AccordionButton p={"20px"}>
                                <Box as="h2" {...css.name} flex="1" textAlign="left">
                                    {t("question_title7")}{" "}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel {...css.text} pb={4}>
                                {t("question_text7")}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem {...css.items}>
                            <AccordionButton p={"20px"}>
                                <Box as="h2" {...css.name} flex="1" textAlign="left">
                                    {t("question_title8")}{" "}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel {...css.text} pb={4}>
                                {t("question_text8")}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem {...css.items}>
                            <AccordionButton p={"20px"}>
                                <Box as="h2" {...css.name} flex="1" textAlign="left">
                                    {t("question_title9")}{" "}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel {...css.text} pb={4}>
                                {t("question_text9")}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem {...css.items}>
                            <AccordionButton p={"20px"}>
                                <Box as="h2" {...css.name} flex="1" textAlign="left">
                                    {t("question_title10")}{" "}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel {...css.text} pb={4}>
                                {t("question_text10")}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
        </FadeInSection>
    );
}

export default Question;

const css = {
    about: {
        padding: {
            base: "36px 0",
            lg: "90px 0",
        },
    },
    subname: {
        color: "#F70",
        fontSize: "22px",
        fontWeight: "600",
        lineHeight: "normal",
        marginBottom: "30px",
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
    items: {
        border: "1.5px solid rgba(162, 162, 162, 0.60)",
        borderRadius: "10px",
        width: {
            base: "100%",
            lg: "1024px",
        },
        margin: "24px 0",
    },
    name: {
        color: "#000000",
        fontSize: {
            base: "18px",
            lg: "24px",
        },
        lineHeight: "normal",
        letterSpacing: "0.24px",
        fontWeight: "500",
    },
    text: {
        color: "#676767",
        fontSize: {
            base: "16px",
            lg: "20px",
        },
        lineHeight: "28px",
        letterSpacing: "0.2px",
        fontWeight: "400",
        width: {
            base: "100%",
            lg: "900px",
        },
    },
};