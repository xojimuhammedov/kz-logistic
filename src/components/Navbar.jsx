import { Box, Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

// import LogoIcon from "../assets/navbar-logo.png";
// import NavbarMenu from "./NavbarMenu";
import { Link as Alink } from "react-router-dom";

function Navbar() {
    const { t } = useTranslation();
    return (
        <Box>
            <Box pb={'24px'} borderBottom={'1px solid rgba(51, 51, 51, 0.20)'} className="container">
                <Flex justifyContent={"space-between"} align={"center"}>
                    <Alink to={"/"}>
                        Logo
                    </Alink>
                    <Flex align={"center"} gap={{ base: "16px", lg: "32px" }}>
                        <Alink to={"/"}>
                            <Text {...css.link}>{t("Home")}</Text>
                        </Alink>
                        <Alink to={"/company"}>
                            <Text {...css.link}>{t("About")}</Text>
                        </Alink>
                        <Link href={"#service"}>
                            <Text {...css.link}>{t("Services")}</Text>
                        </Link>
                        <Link href={"#partner"}>
                            <Text {...css.link}>{t("Partners")}</Text>
                        </Link>
                        <Alink to={"/contact"}>
                            <Text {...css.link}>{t("Contact")}</Text>
                        </Alink>
                        {/* <NavbarMenu /> */}
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

export default Navbar;

const css = {
    link: {
        fontSize: "18px",
        lineHeight: "22px",
        fontWeight: "600",
        color: "rgba(0, 0, 0, 1)",
        display: {
            base: "none",
            lg: "block",
        },
    },
    icon: {
        width: "220px",
        height: "100px",
        objectFit: "contain",
    },
};