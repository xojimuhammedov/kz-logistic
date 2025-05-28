import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { data } from '../data';


const Stage = () => {
    const { t, i18n } = useTranslation()
    return (
        <Box p={'24px 0'}>
            <Box className='container'>
                <Heading {...css.name}>{t("От погрузки до доставки: Полный цикл железнодорожных перевозок")}</Heading>
                <SimpleGrid mt={'24px'} gap={{ base: "12px", lg: '24px' }} columns={{ base: 1, lg: 2 }}>
                    {
                        data?.map((item) => (
                            <Box {...css.item} key={item?.id}>
                                <Heading {...css.title}>{item[`title_${i18n?.language}`]}</Heading>
                                <Text {...css.text}
                                    dangerouslySetInnerHTML={{
                                        __html: item[`text_${i18n?.language}`]
                                    }}
                                />
                            </Box>
                        ))
                    }
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default Stage;

const css = {
    name: {
        fontSize: {
            base: "2xl",
            lg: "4xl"
        },
        textAlign: 'center',
        fontWeight: "bold",
        lineHeight: "1.2",
        color: "#2F2F2F",
    },
    title: {
        fontSize: {
            base: "18px",
            lg: "22px"
        },
        lineHeight: {
            base: "22px",
            lg: "34px"
        },
        margin: "12px 0",
        fontWeight: "700"
    },
    text: {
        fontSize: {
            base: "12px",
            lg: "14px"
        },
        lineHeight: "24px",
        fontWeight: "500"
    },
    item: {
        padding: {
            base: "12px",
            lg: "12px 18px"
        },
        border: "1.5px solid #F70",
        borderRadius: "12px"
    }
}