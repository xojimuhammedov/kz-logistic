import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

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
        <Box  mt={'180px'} p={{ base: "36px 0" }}>
            <Box {...css.form} className="container">
                <Flex
                    flexDirection={{ base: "column", md: "row" }}
                    gap={{
                        base: "36px",
                        lg: "84px",
                    }}>
                    <Box>
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
                    </Box>
                    <YMaps>
                        <Map defaultState={{ center: [47.112570, 51.903453], zoom: 9 }} width="100%" height="auto">
                            <Placemark geometry={[47.112570, 51.903453]} />
                        </Map>
                    </YMaps>
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2715.3103515694324!2d51.89098498774162!3d47.11258899675808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41a3e9904dcef067%3A0x4f5e9ce1ca3f296c!2sGagarin%20St%2065%2C%20Atyrau%2C%20Kazakhstan!5e0!3m2!1sen!2s!4v1745735616688!5m2!1sen!2s" className="form-map"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe> */}
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
            lg: "40px",
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
};