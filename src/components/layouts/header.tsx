import React, { useState } from "react";
import { HStack, Text, Box, Button, VStack, Image } from "@chakra-ui/react";
// import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { useIntl } from "react-intl";
import {
  MainLogo,
  CancelIcon,
  LangChange,
  IconLocation,
  IconPhone,
  IconMail,
  IconW3W,
} from "@/assets";
import { motion } from "framer-motion";

const variants = {
  open: { x: 0, transition: { duration: 0.3 } },
  closed: { x: "34.4vw", transition: { duration: 0.3 } },
};

interface HeaderProps {
  locale: string;
  setLocale: (locale: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ locale, setLocale }) => {
  const intl = useIntl();
  const [showMain, setShowMain] = useState(false);

  const changeLocale = () => {
    const to = locale === "en" ? "mn" : "en";
    setLocale(to);
    localStorage.setItem("language_local", to);
  };

  const toggleMain = () => {
    setShowMain(!showMain);
  };

  return (
    <>
      <HStack
        position={"fixed"}
        justify="space-between"
        align="center"
        paddingX={"8.3vw"}
        height={"8.98vh"}
        width={"100vw"}
      >
        <Box>
          <MainLogo />
        </Box>
        <HStack
          spacing={"40px"}
          fontSize="16px"
          fontWeight={600}
          color="#66377B"
        >
          <Text fontWeight={600} fontSize={16}>
            Иргэд
          </Text>
          <Text fontWeight={600} fontSize={16}>
            Байгууллага
          </Text>
          <Text fontWeight={600} fontSize={16}>
            Нөхөн төлбөр
          </Text>
          <Text fontWeight={600} fontSize={16}>
            Бидний тухай
          </Text>
          <Text fontWeight={600} fontSize={16} onClick={toggleMain}>
            Холбоо барих
          </Text>
          <HStack spacing={"8px"}>
            <LangChange />
            <Text
              cursor="pointer"
              fontWeight={500}
              fontSize={16}
              onClick={changeLocale}
            >
              {locale === "en" ? "Монгол" : "English"}
            </Text>
          </HStack>
        </HStack>
      </HStack>

      <Box
        className={`fixed z-10 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${
          showMain ? "" : "hidden"
        }`}
        id="my-modal"
        display={"flex"}
        justifyContent={"flex-end"}
        onClick={toggleMain}
      >
        <motion.div
          style={{
            width: "34.4vw",
            height: "100vh",
            backgroundColor: "white",
            padding: "49px 40px",
          }}
          animate={showMain ? "open" : "closed"}
          variants={variants}
        >
          <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
            <MainLogo />
            <Button onClick={toggleMain}>
              <CancelIcon />
            </Button>
          </Box>
          <Text
            marginTop={"13.2vh"}
            fontSize="24px"
            color="#66377B"
            fontWeight={600}
            textTransform="uppercase"
          >
            холбоо барих
          </Text>
          <VStack
            spacing={"24px"}
            marginTop={"5.75vh"}
            paddingRight={"7.43vw"}
            alignItems={"flex-start"}
          >
            <Box display={"flex"} gap={"8px"}>
              <Box>
                <IconLocation />
              </Box>
              <Text color={"#3B4856"} fontWeight={400} fontSize={"16px"}>
                Сүхбаатар дүүрэг 1-р хороо, Жамъян Гүний гудамж-5, Хаан Даатгал
                компанийн байр
              </Text>
            </Box>
            <Box display={"flex"} gap={"8px"}>
              <Box>
                <IconPhone />
              </Box>
              <Text color={"#3B4856"} fontWeight={400} fontSize={"16px"}>
                +7000-0808
              </Text>
            </Box>
            <Box display={"flex"} gap={"8px"}>
              <Box>
                <IconMail />
              </Box>
              <Text color={"#3B4856"} fontWeight={400} fontSize={"16px"}>
                info@khaandaatgal.mn
              </Text>
            </Box>
            <Box display={"flex"} gap={"8px"}>
              <Box>
                <IconW3W />
              </Box>
              <Text color={"#3B4856"} fontWeight={400} fontSize={"16px"}>
                оюунлаг.хавсрах.өгсөн
              </Text>
            </Box>
          </VStack>
          <Box display={"flex"} marginTop={"48px"}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167.13016100167002!2d106.9175504719666!3d47.915439657043414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693f12cfaf493%3A0xcefe01c132201edb!2z0KXQsNCw0L0g0JTQsNCw0YLQs9Cw0LsgLSBLaGFhbiBJbnN1cmFuY2U!5e0!3m2!1smn!2smn!4v1698135367204!5m2!1smn!2smn"
              loading="lazy"
            ></iframe>
          </Box>
        </motion.div>
      </Box>
      {/* <Modal
          isOpen={showMain}
          onClose={toggleMain}
          motionPreset="fade"
          size="xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <HStack justify="space-between" pl={16}>
                <MainLogo />
                <Button onClick={toggleMain}>
                  <CancelIcon />
                </Button>
              </HStack>
            </ModalHeader>
            <ModalBody pt={53} pl={16}>
              <Text fontSize="24px" color="#66377B" fontWeight={600} textTransform="uppercase">
                холбоо барих
              </Text>
              <Box w={32} h={4} flexShrink={0} rounded="2px" bgGradient="linear(to-r, purple.700, pink.600)"></Box>
              <Box fontSize="16px" fontWeight="normal" color="#3B4856">
                <HStack spacing={8} mt={80} align="start">
                  <SidebarIcon1 />
                  <Text w={287}>
                    Сүхбаатар дүүрэг 1-р хороо, Жамъян Гүний гудамж-5, Хаан Даатгал компанийн байр
                  </Text>
                </HStack>
                <HStack spacing={8} mt={27} align="start">
                  <SideBar2 />
                  <Text>+7000-0808</Text>
                </HStack>
                <HStack spacing={8} mt={27} align="start">
                  <SideBar3 />
                  <Text>info@khaandaatgal.mn</Text>
                </HStack>
                <HStack spacing={14} mt={27} align="center">
                  <Image src={fileImage} width={18} height={18} alt="fileImage" />
                  <Text> оюунлаг.хавсрах.өгсөн</Text>
                </HStack>
              </Box>
              <Box mt={40}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d668.5220460367251!2d106.9174527324715!3d47.91533114155894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693f12cfaf493%3A0xcefe01c132201edb!2z0KXQsNCw0L0g0JTQsNCw0YLQs9Cw0LsgLSBLaGFhbi
                </iframe>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal> */}
    </>
  );
};
