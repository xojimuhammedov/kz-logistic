import React from 'react';
import { Box, Text, VStack, HStack, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const PDFDownloadButton = () => {
    // const handleDownload = () => {
    //     // Bu yerda PDF yuklab olish logikasini qo'shishingiz mumkin
    //     console.log('PDF yuklab olinmoqda...');
    // };

    const { t } = useTranslation()

    return (
        <Box
            w={{ base: "100%", lg: "300px" }}
            h="200px"
            bg="#F70"
            borderRadius="20px"
            position="relative"
            cursor="pointer"
            transition="all 0.3s ease"
            _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(74, 144, 226, 0.3)'
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            {/* PDF Icon va Content */}
            <VStack spacing={4}>
                {/* PDF Document Icon */}
                <Box
                    w="80px"
                    h="100px"
                    bg="white"
                    borderRadius="10px"
                    position="relative"
                    boxShadow="0 4px 15px rgba(0, 0, 0, 0.1)"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* Folded corner */}
                    <Box
                        position="absolute"
                        top="0"
                        right="0"
                        w="0"
                        h="0"
                        borderLeft="15px solid transparent"
                        borderTop="15px solid #e2e8f0"
                        borderTopRightRadius="10px"
                    />

                    {/* PDF Text */}
                    <Text
                        fontSize="20px"
                        fontWeight="bold"
                        color="#F70"
                        mb={2}
                    >
                        PDF
                    </Text>

                    {/* Document lines */}
                    <VStack spacing={1} w="60px">
                        <Box w="100%" h="2px" bg="#e2e8f0" borderRadius="1px" />
                        <Box w="80%" h="2px" bg="#e2e8f0" borderRadius="1px" />
                        <Box w="90%" h="2px" bg="#e2e8f0" borderRadius="1px" />
                    </VStack>
                </Box>

                {/* Download Text */}
                <Link
                    target='_blank'
                    color="white"
                    fontSize="18px"
                    fontWeight="600"
                    textAlign="center"
                    download href="/rekvizit.pdf"
                >
                    {t("Скачать реквизиты")}
                </Link>
            </VStack>

            {/* Subtle background pattern */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                opacity="0.1"
                background="radial-gradient(circle at 20% 20%, white 2px, transparent 2px),
                   radial-gradient(circle at 80% 80%, white 2px, transparent 2px)"
                backgroundSize="40px 40px"
                borderRadius="20px"
                pointerEvents="none"
            />
        </Box>
    );
};

export default PDFDownloadButton;