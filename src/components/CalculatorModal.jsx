import {
    Button, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Heading,
    Text,
    Input,
    SimpleGrid,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const CalculatorModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
        if (!nameValue || !country || !location || !textValue || !numberValue || !email || !company) {
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
        <>
            <Button onClick={onOpen} {...css.button}>
                {t("Узнать стоимость")}
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody m={'24px 0'}>
                        <Heading {...css.title}>{t("Услуги Грузоперевозок NOMEX LOGISTICS")}</Heading>
                        <form className='header-form' action="">
                            {/* <Text {...css.text}>{t("Рассчитать стоимость перевозки:")}</Text> */}
                            <SimpleGrid mt={'18px'} gap={'12px'} columns={2}>
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
                        </form>
                    </ModalBody>

                    <ModalFooter pt={0} mt={0}>
                        <Button width={'100%'} onClick={sendMessage} {...css.button} >
                            {t("Заказать грузоперевозку")}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CalculatorModal;

const css = {
    button: {
        height: "45px",
        alignItems: "center",
        color: "#fff",
        gap: "8px",
        justifyContent: "center",
        borderRadius: "12px",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: "12px",
        backgroundColor: "#DF6800",

        _hover: {
            backgroundColor: "#F70"
        }
    },
    text: {
        fontSize: "14px",
        fontWeight: "600"
    },
    title: {
        fontSize: "22px",
        marginBottom: "12px",
        textAlign: "center",
        lineHeight: "32px"
    }
}