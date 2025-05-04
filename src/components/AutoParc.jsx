import { Box, Text, Image, Flex, Divider, Button, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const vehicles = [
    {
        title: "Трал",
        payload: "Грузоподъёмность: 20-150 т",
        axles: "Количество осей: 4-13",
        size: "Д/Ш/В: 18,1-37 × 2,55-3,5 × 0,8-4",
        image: "https://mkgloballogistics.kz/wp-content/uploads/2025/01/image-65.jpg", // replace with your actual image path
        scheme: "https://mkgloballogistics.kz/wp-content/uploads/2025/01/image-23.png"
    },
    {
        title: "Грузовой транспорт с гидролопатой",
        payload: "Грузоподъёмность: 10 т",
        volume: "Объем кузова: 40 м³",
        size: "Д/Ш/В: 2,6 × ...", // Adjust with actual value
        image: "https://mkgloballogistics.kz/wp-content/uploads/2025/01/1678688258_hdpic-club-p-mashina-dlya-perevozki-3-tonn-30-1.jpg",
        scheme: "https://mkgloballogistics.kz/wp-content/uploads/2025/01/group-564.png"
    },
    {
        title: "Автовозы",
        payload: "Грузоподъёмность: 18 т",
        volume: "Объем кузова: 4-10 авто; Д/",
        size: "Ш/В: 21 х 2,55 х 4,5", // Adjust with actual value
        image: "https://mkgloballogistics.kz/wp-content/uploads/2025/01/avtovoz_9-799x526-1.jpg",
        scheme: "https://mkgloballogistics.kz/wp-content/uploads/2025/01/group-525.png"
    }
];

export default function VehicleShowcase() {
    const { t } = useTranslation()
    return (
        <Box py={8} px={4}>
            <Box className="container">
                <Text fontSize="2xl" fontWeight="bold" mb={'36px'}>{t("АВТОПАРК")}</Text>
                {vehicles.map((vehicle, index) => (
                    <Box key={index} mb={10}>
                        <Flex justify="space-between" align={'center'} flexDir={{ base: "column", md: "row" }}>
                            <VStack gap={'24px'} align="start" w={{ base: "100%", md: "35%" }}>
                                <Text fontSize="xl" fontWeight="bold">{vehicle.title}</Text>
                                <Image src={vehicle.image} alt={vehicle.title} maxW="90%" />
                            </VStack>
                            <Box>
                                <Text fontWeight="bold">{vehicle.payload}</Text>
                                {vehicle.axles && <Text fontWeight="bold">{vehicle.axles}</Text>}
                                {vehicle.volume && <Text fontWeight="bold">{vehicle.volume}</Text>}
                                <Text fontWeight="bold">{vehicle.size}</Text>
                            </Box>
                            <Box w={{ base: "100%", md: "35%" }}>
                                <Image src={vehicle.scheme} alt="Scheme" />
                            </Box>
                        </Flex>
                        {index !== vehicles.length - 1 && <Divider my={6} />}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
