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
import PhoneInput from 'react-phone-number-input'

const RequestModal = ({ isOpen, onClose }) => {
    const [value, setValue] = useState()
    const { t } = useTranslation()
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
                            <Input className='modal-input' type="text" id='name' />
                        </label>
                        <label style={{ marginBottom: 0 }} className='modal-label' htmlFor="phone">
                            {t("Your Phone")}
                            <Input className='modal-input' type="tell" id='phone' />
                        </label>
                    </form>
                </ModalBody>

                <ModalFooter pt={0} mt={0}>
                    <Button {...css.button} >
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