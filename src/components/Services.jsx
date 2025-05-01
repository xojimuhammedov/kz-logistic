import { Box, Grid, Heading, Text, VStack, Icon, useBreakpointValue, Flex } from "@chakra-ui/react";
import ServiceIcon from "../assets/ServiceIcon";
import { servicesData } from "../data";
import { useTranslation } from "react-i18next";

export default function ServicesGrid() {
    const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
    const { t, i18n } = useTranslation()

    return (
        <Box {...css.service}>
            <Box className="container">
                <VStack spacing={3} textAlign="center" mb={10}>
                    <Text color="#F70" fontWeight="bold" textTransform="uppercase">
                        {t("Our Services")}
                    </Text>
                    <Heading color={'#121D50'} maxW={'700px'} fontSize={{ base: "2xl", md: "48px" }}>
                        {t("ЭФФЕКТИВНАЯ И НАДЕЖНАЯ ДОСТАВКА С FASTGO")}
                    </Heading>
                </VStack>

                <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
                    {servicesData?.map((service, index) => (
                        <Box
                            key={index}
                            bg="white"
                            color="gray.800"
                            p={6}
                            rounded="xl"
                            boxShadow="md"
                            transition="all 0.3s"
                            _hover={{
                                bg: "#DF6800",
                                color: "white",
                                boxShadow: "lg",
                                "> svg": {
                                    color: "white",
                                },
                            }}
                        >
                            <Flex
                                align={'center'}
                                justify={'center'}
                                w={'76px'} h={'76px'} borderRadius={'8px'} bg={'#F70'}>
                                <Icon
                                    as={ServiceIcon}
                                />
                            </Flex>
                            <Heading
                                overflow="hidden"
                                textOverflow="ellipsis"
                                sx={{
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                }}
                                fontSize="xl" m={'16px 0'}>
                                {service[`title_${i18n?.language}`]}
                            </Heading>
                            <Text
                                display="-webkit-box"
                                overflow="hidden"
                                textOverflow="ellipsis"
                                sx={{
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: "vertical",
                                }}
                                fontSize="sm"
                                dangerouslySetInnerHTML={{
                                    __html: service[`description_${i18n?.language}`]
                                }}
                            />
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

const css = {
    service: {
        backgroundColor: "#EDF0F3",
        padding: "72px 0"
    }
}