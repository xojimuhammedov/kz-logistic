import { Box, Button, Input, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

// 7930081170:AAGiqI6T4ypKPVjEJs6byiqtJ5c9D5gdqU4
// -1002598680954

const Calculator = () => {
    const { t } = useTranslation()
    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [textValue, setTextValue] = useState("");
    const [country, setCountry] = useState("");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState("")

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

    function changeCompany(item) {
        setCompany(item);
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
        setCompany("")
        setEmail("")
    };
    let bot = {
        TOKEN: "7930081170:AAGiqI6T4ypKPVjEJs6byiqtJ5c9D5gdqU4",
        chatID: "-1002598680954",
        message: `
            Здравствуйте, у меня для вас новые новости о доставке!
            Имя 👤: ${nameValue}; 
            Номер телефона ☎: ${numberValue};
            Электронная почта: ${email};
            Компания: ${company};
            Откуда: ${country};
            Куда: ${location};
            Сообщение: ${textValue};
            `,
    };

    const encodedMessage = encodeURIComponent(bot.message);

    function sendMessage(e) {
        e.preventDefault();

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
        <Box {...css.box}>
            <form className='header-form' action="">
                <Text {...css.text}>{t("Рассчитать стоимость перевозки:")}</Text>
                <SimpleGrid gap={'12px'} columns={2}>
                    <Input
                        value={country}
                        onChange={(e) => changeCountry(e.target.value)}
                        className='header-input' type="text" placeholder={t("Откуда")} />
                    <Input
                        value={location}
                        onChange={(e) => changeLocation(e.target.value)}
                        className='header-input' type="text" placeholder={t("Куда")} />
                </SimpleGrid>
                <label className='header-label' htmlFor="">
                    {t("Информация о грузе:")}
                    <Input
                        value={textValue}
                        onChange={(e) => changeText(e.target.value)}
                        className='header-input' placeholder={t("Описание груза (вес, объем)")} type="text" />
                </label>
                <Text {...css.text}>{t("Контактные данные")}</Text>
                <SimpleGrid gap={'12px'} columns={2}>
                    <Input
                        value={nameValue}
                        onChange={(e) => changeName(e.target.value)}
                        className='header-input' type="text" placeholder={t("Ваше имя")} />
                    <Input
                        value={numberValue}
                        onChange={(e) => changeNumber(e.target.value)}
                        className='header-input' type="text" placeholder={t("Ваш телефон")} />
                    <Input
                        value={email}
                        onChange={(e) => changeEmail(e.target.value)}
                        className='header-input' type="text" placeholder={t("Your Email")} />
                    <Input
                        value={company}
                        onChange={(e) => changeCompany(e.target.value)}
                        className='header-input' type="text" placeholder={t("Company")} />
                </SimpleGrid>
                <Button onClick={sendMessage} {...css.button} >
                    {t("Рассчитать")}
                </Button>
            </form>
        </Box>
    );
}

export default Calculator;

const css = {
    box: {
        backgroundColor: "#fff",
        paddingTop: "40px",
        paddingBottom: "40px",
        paddingLeft: "30px",
        paddingRight: "30px",
        borderRadius: "20px",
    },
    text: {
        fontSize: "14px",
        fontWeight: "600"
    },
    button: {
        background: "#F70",
        color: "#fff",
        fontSize: "16px",
        lineHeight: "24px",
        transition: "0.3s easy",
        height: "50px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        borderRadius: "10px",
        marginTop: "12px",

        _hover: {
            background: "#F70",
        }
    }
}