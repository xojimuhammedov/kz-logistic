import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Flex
} from '@chakra-ui/react';

export default function LogisticsStatistics() {
    return (
        <Box width="100%" bg="white">
            {/* Header Section */}
            <Container maxW="container.xl" py={12} textAlign="center">
                <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={4} color="gray.900">
                    Бесперебойная доставка с логистикой АХТ
                </Heading>
                <Text fontSize="14px" color="#333" maxW="3xl" mx="auto">
                    Повышайте производительность и добивайтесь успеха с помощью видимости в реальном времени и
                    автоматизации на каждом этапе вашего рабочего процесса. Наши инновационные решения позволяют
                    командам работать эффективно, принимать более разумные решения и поставлять продукцию
                </Text>
            </Container>

            {/* Statistics Section */}
            <Box width="100%" bg="gray.100" py={16}>
                <Container maxW="container.xl">
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                        {/* Stat 1 */}
                        <Flex direction="column" align="center">
                            <Heading as="h2" fontSize="80px" fontWeight="500" color="#121D50" mb={6}>
                                83%
                            </Heading>
                            <Text textAlign="center" color="#121D50">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </Text>
                        </Flex>

                        {/* Stat 2 */}
                        <Flex direction="column" align="center">
                            <Heading as="h2" fontSize="80px" fontWeight="500" color="#121D50" mb={6}>
                                85%
                            </Heading>
                            <Text textAlign="center" color="#121D50">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </Text>
                        </Flex>

                        {/* Stat 3 */}
                        <Flex direction="column" align="center">
                            <Heading as="h2" fontSize="80px" fontWeight="500" color="#121D50" mb={6}>
                                92%
                            </Heading>
                            <Text textAlign="center" color="#121D50">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </Text>
                        </Flex>
                    </SimpleGrid>
                </Container>
            </Box>
        </Box>
    );
}