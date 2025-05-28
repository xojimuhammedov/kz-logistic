import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Hero from '../components/Hero';
import { useParams } from 'react-router-dom';
import { servicesData } from '../data';
import { useTranslation } from 'react-i18next';
import AirCargo from '../components/AirCargo';
import Form from './Form';
import Geography from '../components/Geography';
import Stage from '../components/Stage';

const ServicesAbout = () => {
    const { id } = useParams()
    const { t, i18n } = useTranslation()
    const data = servicesData?.find((item) => item?.id === Number(id))
    return (
        <>
            <Box pb={'48px'}>
                <Box className='container'>
                    <Hero data={data} />
                    <Text
                        dangerouslySetInnerHTML={{
                            __html: data[`description_${i18n?.language}`]
                        }}
                        {...css.text}
                    />
                </Box>
            </Box>
            <Stage />
            <Geography />
            <AirCargo />
            <Form />
        </>
    );
}

export default ServicesAbout;


const css = {
    text: {
        fontSize: "14px",
        lineHeight: "28px",
        width: {
            base: "100%",
            lg: "600px"
        }
    }
}