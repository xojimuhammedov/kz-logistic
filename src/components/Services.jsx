import { Box, Grid, Heading, Text, VStack, Icon, useBreakpointValue, Flex } from "@chakra-ui/react";
import ServiceIcon from "../assets/ServiceIcon";

const services = [
    {
        title: "МОРСКИЕ ПЕРЕВОЗКИ",
        description:
            "В FastGo мы стремимся предоставлять нашим клиентам персонализированные и эффективные логистические....",
        highlight: true,
    },
    ...Array(5).fill({
        title: "ВОЗДУШНЫЕ ПЕРЕВОЗКИ",
        description:
            "В FastGo мы стремимся предоставлять нашим клиентам персонализированные и эффективные логистические....",
        highlight: false,
    }),
];

export default function ServicesGrid() {
    const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

    return (
        <Box {...css.service}>
            <Box className="container">
                <VStack spacing={3} textAlign="center" mb={10}>
                    <Text color="#F70" fontWeight="bold" textTransform="uppercase">
                        НАШИ УСЛУГИ
                    </Text>
                    <Heading color={'#121D50'} fontSize={{ base: "2xl", md: "48px" }}>
                        ЭФФЕКТИВНАЯ И НАДЕЖНАЯ <br /> ДОСТАВКА С FASTGO
                    </Heading>
                </VStack>

                <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
                    {services.map((service, index) => (
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
                            <Heading fontSize="xl" m={'16px 0'} >
                                {service.title}
                            </Heading>
                            <Text fontSize="sm">{service.description}</Text>
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