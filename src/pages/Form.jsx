import { Box, Button, Flex, Heading, HStack, Icon, Input, Link, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import PDFDownloadButton from "./PdfDownload";

function Form() {
    const { t } = useTranslation();

    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [textValue, setTextValue] = useState("");
    const [country, setCountry] = useState("");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");

    function changeNumber(item) {
        setNumberValue(item);
    }

    function changeName(item) {
        setNameValue(item);
    }
    function changeText(item) {
        setTextValue(item);
    }
    function changeCountry(item) {
        setCountry(item);
    }
    function changeLocation(item) {
        setLocation(item);
    }
    function changeEmail(item) {
        setEmail(item);
    }

    const handleClear = () => {
        setNameValue("");
        setNumberValue("");
        setTextValue("");
        setCountry("");
        setLocation("");
        setEmail("");
    };
    let bot = {
        TOKEN: "7930081170:AAGiqI6T4ypKPVjEJs6byiqtJ5c9D5gdqU4",
        chatID: "-1002598680954",
        message: `
          Здравствуйте, для вас новые новости!
          Имя 👤: ${nameValue}; 
          Номер телефона ☎: ${numberValue};
          Почта: ${email};
          Состояние: ${country};
          Город: ${location};
          Сообщение: ${textValue};
          `,
    };

    const encodedMessage = encodeURIComponent(bot.message);

    function sendMessage(e) {
        e.preventDefault();
        if (!nameValue || !country || !location || !textValue || !numberValue) {
            toast.error(t("Пожалуйста, заполните все поля!"));
            return;
        }

        fetch(
            `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${encodedMessage} `,
            {
                method: "GET",
            }
        ).then(
            () => {
                handleClear();
                // window.location.reload();
                toast.success(t("Ваше сообщение успешно отправлено!"));
            },
            (error) => {
                console.log(error);
            }
        );
    }
    return (
        <Box mt={'140px'} p={{ base: "36px 0" }}>
            <Box {...css.form} className="container">
                <Heading fontSize={'3xl'} mb={'24px'}>{t("Contact")}</Heading>
                <Flex
                    flexDirection={{ base: "column", md: "row" }}
                    gap={{
                        base: "24px",
                    }}>
                    <HStack gap={'24px'} flexDirection={'column'} align="stretch">
                        {/* Email Section */}
                        <VStack align="flex-start">
                            <Text fontSize="16px" fontWeight="bold" color="gray.700">
                                {t("E-mail")}:
                            </Text>
                            <HStack spacing={2} align="center">
                                <Icon
                                    as={EmailIcon}
                                    color="#F70"
                                    boxSize={5}
                                />
                                <Link
                                    fontSize="md"
                                    color="#F70"
                                    fontWeight="medium"
                                    href='mailto:nomexlogistics.kz@gmail.com'
                                    target='_blank'
                                    _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                                >
                                    nomexlogistics.kz@gmail.com
                                </Link>
                            </HStack>
                        </VStack>

                        {/* Phone Section */}
                        <VStack align="flex-start">
                            <Text fontSize="16px" fontWeight="bold" color="gray.700">
                                {t("Контактный номер")}:
                            </Text>
                            <HStack spacing={2} align="center">
                                <Icon
                                    as={PhoneIcon}
                                    color="#F70"
                                    boxSize={4}
                                />
                                <Link
                                    fontSize="md"
                                    href='tel:+77710540606'
                                    target='_blank'
                                    color="#F70"
                                    fontWeight="medium"
                                    _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                                >
                                    +7 771 054 06 06
                                </Link>
                            </HStack>
                        </VStack>
                    </HStack>
                    {/* <Box>
                        <Heading {...css.title}>{t("Get in touch")}</Heading>
                        <input
                            className="form-input"
                            value={nameValue}
                            onChange={(e) => changeName(e.target.value)}
                            type="text"
                            placeholder={t("Ваше имя")}
                        />
                        <input
                            className="form-input"
                            value={country}
                            onChange={(e) => changeCountry(e.target.value)}
                            type="text"
                            placeholder={t("Country")}
                        />
                        <input
                            value={location}
                            onChange={(e) => changeLocation(e.target.value)}
                            className="form-input"
                            type="text"
                            placeholder={t("City")}
                        />
                        <input
                            className="form-input"
                            value={email}
                            onChange={(e) => changeEmail(e.target.value)}
                            type="email"
                            placeholder={t("E-mail")}
                        />
                        <input
                            className="form-input"
                            value={numberValue}
                            onChange={(e) => changeNumber(e.target.value)}
                            type="tell"
                            placeholder={t("Ваш телефон")}
                        />
                        <textarea
                            placeholder={t("Let’s talk about your idea")}
                            name=""
                            value={textValue}
                            onChange={(e) => changeText(e.target.value)}
                            className="form-text"
                            id=""></textarea>
                        <Button type="submit" onClick={sendMessage} {...css.button}>
                            {t("Рассчитать")}
                        </Button>
                    </Box> */}
                    <YMaps>
                        <Map defaultState={{ center: [47.112570, 51.903453], zoom: 18 }} width="100%" height="300px">
                            <Placemark geometry={[47.112570, 51.903453]} />
                        </Map>
                    </YMaps>
                    <PDFDownloadButton />
                    {/* <Box>
                        <Link target="_blank" {...css.item} download href="/rekvizit.pdf">{t("Скачать реквизиты")}</Link>
                    </Box> */}
                </Flex>
            </Box>
        </Box>
    );
}

export default Form;

const css = {
    form: {
        background: "#F6F6F6",
        borderRadius: "10px",
        padding: {
            base: "10px",
            lg: "20px",
        },
    },
    button: {
        background: "#F70",
        borderRadius: "18px",
        color: "white",
        height: "45px",
        border: "2px solid #F70",
        width: "100%",
        lineHeight: "normal",
        fontFamily: "Inter",
        marginTop: "25px",

        _hover: {
            background: "#F70",
        },
    },
    title: {
        fontSize: {
            base: "35px",
            lg: "46px",
        },
        lineHeight: "normal",
        letterSpacing: "0.46px",
        color: "#000000",
        fontWeight: "600",
    },
    text: {
        fontSize: "14px",
        lineHeight: "24px",
        color: "#000000",
        fontWeight: "400",
        letterSpacing: "0.14px",
    },
    item: {
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f70",
        fontSize: "15px",
        lineHeight: "1.3",
        fontWeight: "500",
        color: "#fff",
        width: "180px",
        height: "45px",
        borderRadius: "6px"
    }
};