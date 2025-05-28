import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Heading,
    Text,
    Input,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import 'react-phone-number-input/style.css'
import { toast } from 'react-toastify';

const RequestModal = ({ isOpen, onClose }) => {
    const { t } = useTranslation()
    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");

    function changeNumber(item) {
        setNumberValue(item);
    }

    function changeName(item) {
        setNameValue(item);
    }
    const handleClear = () => {
        setNameValue("");
        setNumberValue("");
    };
    let bot = {
        TOKEN: "7930081170:AAGiqI6T4ypKPVjEJs6byiqtJ5c9D5gdqU4",
        chatID: "-1002598680954",
        message: `
              Здравствуйте, для вас консультацию!
              Имя 👤: ${nameValue}; 
              Номер телефона ☎: ${numberValue};
              `,
    };

    const encodedMessage = encodeURIComponent(bot.message);

    function sendMessage(e) {
        e.preventDefault();
        if (!nameValue || !numberValue) {
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
                onClose()
                toast.success(t("Ваше сообщение успешно отправлено!"));
            },
            (error) => {
                console.log(error);
            }
        );
    }
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody m={'24px 0'}>
                    <Heading {...css.title}>{t("Заявка на консультацию")}</Heading>
                    <Text {...css.text}>{t("Наши специалисты свяжустя с Вами для консультации или расчета стоимости перевозки Вашего груза. Уточнят все детали перевозки")}</Text>
                    <form action="">
                        <label className='modal-label' htmlFor="name">
                            {t("Your Name")}
                            <Input
                                value={nameValue}
                                onChange={(e) => changeName(e.target.value)}
                                className='modal-input' type="text" id='name' />
                        </label>
                        <label style={{ marginBottom: 0 }} className='modal-label' htmlFor="phone">
                            {t("Your Phone")}
                            <Input
                                value={numberValue}
                                onChange={(e) => changeNumber(e.target.value)}
                                className='modal-input' type="tell" id='phone' />
                        </label>
                    </form>
                </ModalBody>

                <ModalFooter pt={0} mt={0}>
                    <Button onClick={sendMessage} {...css.button} >
                        {t("Заказать звонок")}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default RequestModal;

const css = {
    title: {
        fontSize: "25px",
        lineHeight: "30px",
        textAlign: "center"
    },
    text: {
        fontSize: "14px",
        lineHeight: "22px",
        color: "#333",
        fontWeight: "500",
        textAlign: "center",
        margin: "18px auto",
        width: "90%",
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
        borderRadius: "12px",

        _hover: {
            background: "#F70",
        }
    }
}