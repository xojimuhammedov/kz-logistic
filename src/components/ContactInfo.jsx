import React from 'react';
import { Box, HStack, Text, Icon, VStack, Link } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
    const { t } = useTranslation()
    return (
        <Box className='contact-info'>
            <HStack spacing={12} align="stretch" justify="space-between">
                {/* Email Section */}
                <VStack align="flex-start" spacing={1} flex={1}>
                    <Text fontSize="16px" fontWeight="bold" color="gray.700">
                        {t("E-mail")}:
                    </Text>
                    <HStack spacing={2} align="center">
                        <Icon
                            as={EmailIcon}
                            color="#F70"
                            boxSize={5}
                        />
                        <Link
                            fontSize="md"
                            color="#F70"
                            fontWeight="medium"
                            href='mailto:nomexlogistics.kz@gmail.com'
                            target='_blank'
                            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                        >
                            nomexlogistics.kz@gmail.com
                        </Link>
                    </HStack>
                </VStack>

                {/* Phone Section */}
                <VStack align="flex-start" spacing={1} flex={1}>
                    <Text fontSize="16px" fontWeight="bold" color="gray.700">
                        {t("Контактный номер")}:
                    </Text>
                    <HStack spacing={2} align="center">
                        <Icon
                            as={PhoneIcon}
                            color="#F70"
                            boxSize={4}
                        />
                        <Link
                            fontSize="md"
                            href='tel:+87710540606'
                            target='_blank'
                            color="#F70"
                            fontWeight="medium"
                            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                        >
                            +8 771 054 06 06
                        </Link>
                    </HStack>
                </VStack>
            </HStack>
        </Box>
    );
};

export default ContactInfo;