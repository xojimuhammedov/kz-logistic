import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Flex
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function LogisticsStatistics() {
    const { t } = useTranslation()
    return (
        <Box width="100%" bg="white">
            {/* Header Section */}
            <Container maxW="container.xl" py={12} textAlign="center">
                <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={4} color="gray.900">
                    {t("Бесперебойная доставка с логистикой NOMEX")}
                </Heading>
                <Text fontSize="14px" color="#333" maxW="3xl" mx="auto">
                    {t("Повышайте производительность и добивайтесь успеха с помощью видимости в реальном времени и автоматизации на каждом этапе вашего рабочего процесса.")}
                </Text>
            </Container>

            {/* Statistics Section */}
            <Box width="100%" bg="gray.100" py={16}>
                <Container maxW="container.xl">
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                        {/* Stat 1 */}
                        <Flex direction="column" align="center">
                            <Heading as="h2" fontSize="80px" fontWeight="600" color="#121D50" mb={6}>
                                5+
                            </Heading>
                            <Text textAlign="center" fontWeight="500" color="#121D50">
                                {t("лет на рынке")}
                            </Text>
                        </Flex>

                        {/* Stat 2 */}
                        <Flex direction="column" align="center">
                            <Heading as="h2" fontSize="80px" fontWeight="600" color="#121D50" mb={6}>
                                10 000
                            </Heading>
                            <Text textAlign="center" fontWeight="500" color="#121D50">
                                {t("тонн груза ежегодно перевозим")}
                            </Text>
                        </Flex>

                        {/* Stat 3 */}
                        <Flex direction="column" align="center">
                            <Heading as="h2" fontSize="80px" fontWeight="600" color="#121D50" mb={6}>
                                3 000+
                            </Heading>
                            <Text textAlign="center" fontWeight="500" color="#121D50">
                                {t("успешных кейсов")}
                            </Text>
                        </Flex>
                    </SimpleGrid>
                </Container>
            </Box>
        </Box>
    );
}