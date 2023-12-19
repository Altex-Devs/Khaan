"use client";

import React, { useState } from "react";
import {
  HStack,
  Text,
  Box,
  Button,
  VStack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Image,
  Show,
  Hide,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import {
  MainLogo,
  CancelIcon,
  LangChange,
  IconLocation,
  IconPhone,
  IconMail,
  IconW3W,
  BurgerMenu,
} from "@/assets";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { animated, useSpring } from "@react-spring/web";
import GoogleMap from "../../assets/pics/googlemap.png";
import Link from "next/link";
import { Image as ChakraImage } from "@chakra-ui/react";
import what3 from "../../assets/pics/what3words.png";

import NextImage from "next/image";
import { MenuItems } from "..";

const variants = {
  open: { x: 0, transition: { duration: 0.3, type: "spring", bounce: 0 } },
  closed: {
    x: "34.4vw",
    transition: { duration: 0.3, type: "spring", bounce: 0 },
  },
};

interface HeaderProps {
  locale: string;
  setLocale: (locale: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ locale, setLocale }) => {
  const router = useRouter();
  const path = usePathname().split("/")[1];
  const [showMain, setShowMain] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuContact, setShowMenuContact] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [springs, setSprings] = useSpring(() => ({ x: "34.4vw" }));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const changeLocale = () => {
    const to = locale === "en" ? "mn" : "en";
    setLocale(to);
    localStorage.setItem("language_local", to);
  };

  const toggleMain = () => {
    if (showMain) {
      setSprings({ x: "34.4vw" });
      setAnimation(!animation);
      document.documentElement.style.overflow = "auto";

      setTimeout(() => {
        setShowMain(!showMain);
      }, 300);
    } else {
      setSprings({ x: "0" });
      setAnimation(!animation);
      setShowMain(!showMain);
      document.documentElement.style.overflow = "hidden";
    }
  };

  const toggleMenu = () => {
    if (showMenu) {
      setSprings({ x: "100vw" });
      setAnimation(!animation);
      document.documentElement.style.overflow = "auto";

      setTimeout(() => {
        setShowMenu(!showMenu);
      }, 300);
    } else {
      setSprings({ x: "0" });
      setAnimation(!animation);
      setShowMenu(!showMenu);
      document.documentElement.style.overflow = "hidden";
    }
  };
  const toggleMenuContact = () => {
    if (showMenuContact) {
      setSprings({ x: "100vw" });
      setAnimation(!animation);
      document.documentElement.style.overflow = "auto";

      setTimeout(() => {
        setShowMenuContact(!showMenuContact);
      }, 300);
    } else {
      setSprings({ x: "0" });
      setAnimation(!animation);
      setShowMenuContact(!showMenuContact);
      document.documentElement.style.overflow = "hidden";
    }
  };

  const pushAbout = () => {
    router.push("/about/company");
  };

  const pushHome = () => {
    router.push("/");
  };

  const pushCitizens = () => {
    router.push("/retail");
  };

  const pushCompanies = () => {
    router.push("/companies");
  };

  const pushCompensation = () => {
    router.push("/compensation/risk");
  };

  return (
    <>
      {/* Desktop */}
      <HStack
        zIndex={10}
        position={"fixed"}
        justify="space-between"
        align="center"
        paddingY={"2.88vh"}
        paddingX={{ xl: "8.3vw", base: "3.72vw" }}
        // height={"8.98vh"}
        width={"100vw"}
        backgroundColor={"white"}
      >
        <Box onClick={pushHome} cursor={"pointer"}>
          <MainLogo />
        </Box>
        <Show above="xl">
          <HStack
            spacing={"40px"}
            fontSize="16px"
            fontWeight={600}
            color="#66377B"
          >
            <Text
              fontWeight={600}
              fontSize={16}
              cursor={"pointer"}
              _hover={{ color: "#DD005C" }}
              onClick={pushCitizens}
              color={path === "retail" ? "#DD005C" : ""}
              display={"flex"}
            >
              {path === "retail" ? <Box marginRight={"3px"}>•</Box> : ""}
              Иргэд
            </Text>
            <Text
              fontWeight={600}
              fontSize={16}
              cursor={"pointer"}
              _hover={{ color: "#DD005C" }}
              color={path === "companies" ? "#DD005C" : ""}
              onClick={pushCompanies}
              display={"flex"}
            >
              {path === "companies" ? <Box marginRight={"3px"}>•</Box> : ""}
              Байгууллага
            </Text>
            <Text
              fontWeight={600}
              fontSize={16}
              cursor={"pointer"}
              onClick={pushCompensation}
              display={"flex"}
              color={
                path === "compensation" || path === "claim" ? "#DD005C" : ""
              }
              _hover={{ color: "#DD005C" }}
            >
              {path === "compensation" || path === "claim" ? (
                <Box marginRight={"3px"}>•</Box>
              ) : (
                ""
              )}
              Нөхөн төлбөр
            </Text>
            <Text
              fontWeight={600}
              fontSize={16}
              cursor={"pointer"}
              onClick={pushAbout}
              display={"flex"}
              color={path === "about" ? "#DD005C" : ""}
              _hover={{ color: "#DD005C" }}
            >
              {path === "about" ? <Box marginRight={"3px"}>•</Box> : ""}
              Бидний тухай
            </Text>
            <Text
              fontWeight={600}
              fontSize={16}
              cursor={"pointer"}
              onClick={toggleMain}
              _hover={{ color: "#DD005C" }}
            >
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
                English
              </Text>
            </HStack>
          </HStack>
        </Show>
        <Hide above="xl">
          <Box onClick={toggleMenu}>
            <BurgerMenu />
          </Box>
        </Hide>
      </HStack>
      {/* Mobile */}
      <Box
        className={`fixed z-10 inset-0 bg-[#4b5563] bg-opacity-50 overflow-y-auto h-full w-full`}
        id="my-modal"
        display={showMenu ? "flex" : "none"}
        justifyContent={"flex-end"}
      >
        <Box
          width={"100vw"}
          height={"100vh"}
          onClick={toggleMenu}
          zIndex={1}
          position={"absolute"}
        />
        <animated.div
          style={{
            overflow: "hidden",
            zIndex: 2,
            width: "100vw",
            height: "100vh",
            backgroundColor: "white",
            padding: "3.72vw",
            ...springs,
          }}
        >
          <Box
            width={"100%"}
            paddingY={"1.88vh"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <a href="/">
              <MainLogo />
            </a>
            <Button onClick={toggleMenu}>
              <CancelIcon />
            </Button>
          </Box>
          <Box
            paddingTop={"40px"}
            gap={"24px"}
            fontSize="16px"
            fontWeight={600}
            color="#66377B"
          >
            <a href="/retail">
              <Button
                fontWeight={600}
                fontSize={16}
                cursor={"pointer"}
                _hover={{ color: "#DD005C" }}
                onClick={pushCitizens}
                color={path === "retail" ? "#DD005C" : ""}
                display={"flex"}
                padding={"12px"}
              >
                {path === "retail" ? <Box marginRight={"3px"}>•</Box> : ""}
                Иргэд
              </Button>
            </a>
            <a href="/companies">
              <Button
                fontWeight={600}
                fontSize={16}
                cursor={"pointer"}
                _hover={{ color: "#DD005C" }}
                color={path === "companies" ? "#DD005C" : ""}
                display={"flex"}
                padding={"12px"}
              >
                {path === "companies" ? <Box marginRight={"3px"}>•</Box> : ""}
                Байгууллага
              </Button>
            </a>
            <a href="/compensation/risk">
              <Button
                fontWeight={600}
                fontSize={16}
                cursor={"pointer"}
                onClick={pushCompensation}
                display={"flex"}
                color={path === "compensation" ? "#DD005C" : ""}
                _hover={{ color: "#DD005C" }}
                padding={"12px"}
              >
                {path === "compensation" ? (
                  <Box marginRight={"3px"}>•</Box>
                ) : (
                  ""
                )}
                Нөхөн төлбөр
              </Button>
            </a>
            <a href="/about/company">
              <Button
                fontWeight={600}
                fontSize={16}
                cursor={"pointer"}
                onClick={pushAbout}
                display={"flex"}
                color={path === "about" ? "#DD005C" : ""}
                _hover={{ color: "#DD005C" }}
                padding={"12px"}
              >
                {path === "about" ? <Box marginRight={"3px"}>•</Box> : ""}
                Бидний тухай
              </Button>
            </a>
            <Button
              fontWeight={600}
              fontSize={16}
              cursor={"pointer"}
              _hover={{ color: "#DD005C" }}
              onClick={onOpen}
              color="#66377B"
              padding={"12px"}
            >
              Холбоо барих
            </Button>
            <HStack padding={"12px"} spacing={"8px"}>
              <LangChange />
              <Text
                cursor="pointer"
                fontWeight={500}
                fontSize={16}
                // onClick={changeLocale}
              >
                English
              </Text>
            </HStack>
          </Box>
        </animated.div>
      </Box>
      {/* Contact */}
      <Box
        className={`fixed z-10 inset-0 bg-[#4b5563] bg-opacity-50 overflow-y-auto h-full w-full`}
        id="my-modal"
        display={showMain ? "flex" : "none"}
        justifyContent={"flex-end"}
      >
        <Box
          width={"100vw"}
          height={"100vh"}
          onClick={toggleMain}
          zIndex={1}
          position={"absolute"}
        />
        <animated.div
          style={{
            overflow: "hidden",
            zIndex: 2,
            width: "34.4vw",
            height: "100vh",
            backgroundColor: "white",
            padding: "49px 0 49px 40px",
            ...springs,
          }}
        >
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            paddingRight={"40px"}
          >
            <Button onClick={pushHome}>
              <MainLogo />
            </Button>
            <Button onClick={toggleMain}>
              <CancelIcon />
            </Button>
          </Box>
          <Text
            marginTop={"8.2vh"}
            fontSize="24px"
            color="#66377B"
            fontWeight={600}
            textTransform="uppercase"
          >
            холбоо барих
          </Text>
          <VStack
            spacing={"2.88vh"}
            marginTop={"5.75vh"}
            paddingRight={"7.43vw"}
            alignItems={"flex-start"}
          >
            <Box display={"flex"} gap={"8px"} paddingRight={"40px"}>
              <Box>
                <IconLocation />
              </Box>
              <Text
                color={"#3B4856"}
                fontWeight={400}
                fontSize={"16px"}
                lineHeight={"24px"}
              >
                Сүхбаатар дүүрэг 1-р хороо, Жамъян Гүний гудамж-5, Хаан Даатгал
                компанийн байр
              </Text>
            </Box>
            <Box display={"flex"} gap={"8px"} alignItems={"center"}>
              <Box>
                <IconPhone />
              </Box>
              <Text color={"#3B4856"} fontWeight={400} fontSize={"16px"}>
                +7000-0808
              </Text>
            </Box>
            <Box display={"flex"} gap={"8px"} alignItems={"center"}>
              <Box>
                <IconMail />
              </Box>
              <Text color={"#3B4856"} fontWeight={400} fontSize={"16px"}>
                info@khaandaatgal.mn
              </Text>
            </Box>
            <Box
              display={"flex"}
              gap={"10px"}
              alignItems={"center"}
              cursor={"pointer"}
              onClick={() =>
                router.push(
                  "https://what3words.com/%D0%BE%D1%8E%D1%83%D0%BD%D0%BB%D0%B0%D0%B3.%D1%85%D0%B0%D0%B2%D1%81%D1%80%D0%B0%D1%85.%D3%A9%D0%B3%D1%81%D3%A9%D0%BD"
                )
              }
            >
              <Box paddingLeft={"2px"}>
                <IconW3W />
              </Box>
              <Text color={"#3B4856"} fontWeight={400} fontSize={"16px"}>
                оюунлаг.хавсрах.өгсөн
              </Text>
            </Box>
          </VStack>
          <Box
            display={"flex"}
            marginTop={"5.75vh"}
            width={"80%"}
            height={"25vh"}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167.13016100167002!2d106.9175504719666!3d47.915439657043414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693f12cfaf493%3A0xcefe01c132201edb!2z0KXQsNCw0L0g0JTQsNCw0YLQs9Cw0LsgLSBLaGFhbiBJbnN1cmFuY2U!5e0!3m2!1smn!2smn!4v1698135367204!5m2!1smn!2smn"
              loading="lazy"
              width={"100%"}
            ></iframe>
          </Box>
        </animated.div>
      </Box>
      {/* MoblieContact */}
      <Modal
        finalFocusRef={finalRef}
        size={"full"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent width={"100vw"} height={"100%"}>
          <Box
            style={{
              overflow: "hidden",
              zIndex: 2,
              width: "100vw",
              height: "100vh",
              backgroundColor: "white",
              padding: "3.72vw",
              ...springs,
            }}
          >
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
              paddingY={"1.88vh"}
            >
              <a href="/">
                <MainLogo />
              </a>
              <Button onClick={toggleMain}>
                <ModalCloseButton>
                  <CancelIcon />
                </ModalCloseButton>
              </Button>
            </Box>
            <Text
              marginTop={"8.2vh"}
              fontSize="24px"
              color="#66377B"
              fontWeight={600}
              textTransform="uppercase"
            >
              холбоо барих
            </Text>
            <VStack
              spacing={"2.88vh"}
              marginTop={"5.75vh"}
              paddingRight={"7.43vw"}
              alignItems={"flex-start"}
            >
              <Box display={"flex"} gap={"8px"} paddingRight={"40px"}>
                <Box>
                  <IconLocation />
                </Box>
                <Text
                  color={"#3B4856"}
                  fontWeight={400}
                  fontSize={"16px"}
                  lineHeight={"24px"}
                >
                  Сүхбаатар дүүрэг 1-р хороо, Жамъян Гүний гудамж-5, Хаан
                  Даатгал компанийн байр
                </Text>
              </Box>
              <Box display={"flex"} gap={"8px"} alignItems={"center"}>
                <Box>
                  <IconPhone />
                </Box>
                <Text color={"#3B4856"} fontWeight={400} fontSize={"16px"}>
                  +7000-0808
                </Text>
              </Box>
              <Box display={"flex"} gap={"8px"} alignItems={"center"}>
                <Box>
                  <IconMail />
                </Box>
                <Text color={"#3B4856"} fontWeight={400} fontSize={"16px"}>
                  info@khaandaatgal.mn
                </Text>
              </Box>
              <Box
                display={"flex"}
                gap={"10px"}
                alignItems={"center"}
                cursor={"pointer"}
                onClick={() =>
                  router.push(
                    "https://what3words.com/%D0%BE%D1%8E%D1%83%D0%BD%D0%BB%D0%B0%D0%B3.%D1%85%D0%B0%D0%B2%D1%81%D1%80%D0%B0%D1%85.%D3%A9%D0%B3%D1%81%D3%A9%D0%BD"
                  )
                }
              >
                <Box paddingLeft={"2px"}>
                  <Image src={what3.src} alt="what3words" />
                </Box>
                <Text color={"#3B4856"} fontWeight={400} fontSize={"16px"}>
                  оюунлаг.хавсрах.өгсөн
                </Text>
              </Box>
            </VStack>
            <Box
              display={"flex"}
              marginTop={"5.75vh"}
              width={"80%"}
              height={"25vh"}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167.13016100167002!2d106.9175504719666!3d47.915439657043414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693f12cfaf493%3A0xcefe01c132201edb!2z0KXQsNCw0L0g0JTQsNCw0YLQs9Cw0LsgLSBLaGFhbiBJbnN1cmFuY2U!5e0!3m2!1smn!2smn!4v1698135367204!5m2!1smn!2smn"
                loading="lazy"
                width={"100%"}
              ></iframe>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};
