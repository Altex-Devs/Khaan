"use client";

import {
  Box,
  Divider,
  ListItem,
  UnorderedList,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";
import financeInsuranceImage from "../../assets/pics/finance-insurance.png";
import healthInsuranceImage from "../../assets/pics/health-insurance.png";
import houseInsuranceImage from "../../assets/pics/house-insurance.png";
import carInsuranceImage from "../../assets/pics/car-insurance.png";
import travelInsuranceImage from "../../assets/pics/travel-insurance.png";
import lawyerImage from "../../assets/pics/header-lawyer.png";
import jambalsuren from "../../assets/pics/jambalsuren.png";
import temuulen from "../../assets/pics/temuulen.png";
import { ArrowUp, IconEmail, IconMail, IconPhone, IconWeb } from "@/assets";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { usePathname } from "next/navigation";
import { PopUp } from "@/components/PopUp";
import { ResponsiveValue } from "@chakra-ui/react";

export const ServiceDetail = () => {
  const [expandedBox, setExpandedBox] = useState(null);
  const [docData, setDocData] = useState<any>();
  const [popupHide, setPopupHide] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState(false);
  const pathname = usePathname();
  const splitedPath = pathname.split("/");
  splitedPath.shift();
  const fetchData = async () => {
    try {
      const q = doc(
        db,
        splitedPath[0] === "retail" ? "citizens" : "companies",
        splitedPath[1]
      );
      const docSnap = await getDoc(q);
      const data = docSnap.data();
      setDocData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const facebook = () => {
    window.open("https://tradecredit.mn/", "_blank");
  };

  const buttonClick = () => {
    if (splitedPath[0] === "companies") {
      setPopupHide(false);
    } else {
      docData?.title === "МОНГОЛООР АЯЛАГЧ ДААТГАЛ"
        ? window.open("https://online-daatgal.web.app/intro/travel/", "_blank")
        : docData?.title === "ОРОН СУУЦНЫ ИЖ БҮРЭН ДААТГАЛ"
        ? window.open(
            "https://chat.khaandaatgal.mn/Form/oronsuuts.php",
            "_blank"
          )
        : docData?.title === "ЖОЛООЧИЙН ХAРИУЦЛАГЫН АЛБАН ЖУРМЫН ДААТГАЛ"
        ? window.open(
            "https://www.messenger.com/t/585954518093463?ref=check_block$$block_8395_4dcdc0288e07e396355f5ef5465cc03a",
            "_blank"
          )
        : docData?.title === "ГАДААДАД ЗОРЧИГЧИЙН ДААТГАЛ"
        ? setPhoneNumber(true)
        : docData?.title === "АЯЛАГЧДЫН ГЭНЭТИЙН ОСЛЫН ДААТГАЛ"
        ? window.open(
            "https://online-daatgal.web.app/intro/traveler/",
            "_blank"
          )
        : window.open("https://www.facebook.com/khaandaatgal", "_blank");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBoxClick = (index: any) => {
    setExpandedBox(index === expandedBox ? null : index);
  };
  return (
    <Box
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      backgroundColor={"#EBEDEE"}
      paddingBottom={"18vh"}
    >
      <Box
        mt={{ xl: "11.2vh", base: "78px" }}
        paddingX={{ xl: "8.3vw", base: "3.72vw" }}
        height={"43.64vh"}
        bgSize={{ xl: "cover", base: "auto" }}
        bgPosition={"bottom"}
        bgRepeat={"no-repeat"}
        width={"full"}
        position={"relative"}
        backgroundImage={
          splitedPath[0] === "companies"
            ? docData?.bgImage
            : docData?.title === "МОНГОЛООР АЯЛАГЧ ДААТГАЛ"
            ? travelInsuranceImage.src
            : docData?.title === "ТЭЭВРИЙН ХЭРЭГСЛИЙН ДААТГАЛ" ||
              docData?.title === "ЖОЛООЧИЙН ХAРИУЦЛАГЫН АЛБАН ЖУРМЫН ДААТГАЛ" ||
              docData?.title ===
                "ХЯЗГААРГҮЙ САЙН ДУРЫН ЖОЛООЧИЙН ХАРИУЦЛАГЫН ДААТГАЛ" ||
              docData?.title ===
                "НЭГ УДААГИЙН ТОХИОЛДЛЫН АВТОТЭЭВРИЙН ХЭРЭГСЛИЙН ДААТГАЛ" ||
              docData?.title === "ЗОРЧИГЧИЙН ГЭНЭТИЙН ОСЛЫН ДААТГАЛ"
            ? carInsuranceImage.src
            : docData?.type === "Эрүүл мэнд , гэнэтийн осол" ||
              docData?.title === "МАЛЫН ИНДЕКСЖҮҮЛСЭН ДААТГАЛ"
            ? healthInsuranceImage.src
            : docData?.type === "Санхүүгийн даатгал"
            ? financeInsuranceImage.src
            : docData?.title === "Өмгөөлөгчийн хариуцлагын даатгал"
            ? lawyerImage.src
            : docData?.type === "Хөрөнгийн даатгал"
            ? houseInsuranceImage.src
            : ""
        }
        marginBottom={{ xl: "9.6vh", base: "40px" }}
      >
        <Box marginTop={{ xl: "80px", base: "40px" }} color={"#fff"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={{ xl: "24px", base: "16px" }}
            fontWeight={500}
            textTransform={"uppercase"}
            mb={{ xl: "8px", base: "8px" }}
            lineHeight={{ xl: "28px", base: "18px" }}
            textAlign={"center"}
          >
            {docData?.title}
          </Box>
          <Box
            fontSize={{
              xl: docData?.desc?.length > 250 ? "22px" : "24px",
              base: docData?.desc?.length > 250 ? "16px" : "16px",
            }}
            fontWeight={300}
            display={"flex"}
            textAlign={"center"}
            justifyContent={{ xl: "center" }}
            alignItems={{ xl: "center" }}
            height={{ base: "150px", xl: "full" }}
            lineHeight={{
              xl: docData?.desc?.length > 250 ? "24px" : "28px",
              base: docData?.desc?.length > 250 ? "16px" : "16px",
            }}
            overflowY={{
              xl: "none" as any,
              base:
                (docData?.desc?.length ?? 0) > 10
                  ? ("auto" as any)
                  : ("hidden" as any),
            }}
          >
            {docData?.desc}
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginY={"5.19vh"}
            gap={"24px"}
          >
            <Box
              position={"absolute"}
              bottom={"40px"}
              borderRadius={50}
              fontWeight={600}
              fontSize={"16px"}
              color={"white"}
              width={"max"}
              paddingX={"30px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{ opacity: "0.9" }}
              zIndex={1}
              height={"48px"}
              bgGradient="linear(to-r, #DD005C 0%, #E88300 100%)"
              onClick={buttonClick}
            >
              {phoneNumber ? "7000-0808" : "Даатгуулах"}
            </Box>
            <Box
              borderRadius={50}
              fontWeight={400}
              fontSize={"16px"}
              color={"#3B4856"}
              width={"max"}
              paddingX={"30px"}
              display={
                docData?.title === "Худалдааны зээлийн даатгал"
                  ? "flex"
                  : "none"
              }
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{ opacity: "0.9" }}
              zIndex={1}
              height={"48px"}
              backgroundColor={"#FFFFFF"}
              onClick={facebook}
              gap={"8px"}
            >
              <IconWeb />
              tradecredit.mn
            </Box>
          </Box>
        </Box>
      </Box>
      <Box paddingX={{ xl: "8.3vw", base: "3.72vw" }} color={"#000000"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={{ xl: "16px", base: "16px" }}
        >
          {docData?.items.map((serviceData: any, index: any) => (
            <Box key={index}>
              <Box
                as={motion.div}
                height={expandedBox === index ? "auto" : "88px"}
                initial={{ height: "88px" }}
                animate={{ height: expandedBox === index ? "auto" : "88px" }}
                exit={{ height: "88px" }}
                overflow={"hidden"}
                key={index}
                borderRadius={"16px"}
              >
                <Box
                  bg={"#ffffff"}
                  onClick={() => handleBoxClick(index)}
                  cursor={"pointer"}
                  paddingX={"24px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap="48px"
                  key={index}
                >
                  <Box
                    height={"88px"}
                    display={"flex"}
                    gap={{ xl: "24px", base: "18px" }}
                  >
                    <Box
                      bgGradient="linear-gradient(180deg, #6B337E 0%, #DD005C 100%)"
                      bgClip="text"
                      display={"flex"}
                      alignItems={"center"}
                      fontSize={{ xl: "24px", base: "18px" }}
                      fontWeight={900}
                    >
                      {index + 1}
                    </Box>
                    <Divider
                      marginY={"30px"}
                      h={{ xl: "24px", base: "28px" }}
                      borderColor="#9C9B9B"
                      borderWidth="1px"
                      orientation="vertical"
                    />
                    <Box
                      fontWeight="700"
                      display={"flex"}
                      alignItems={"center"}
                      fontSize={{ xl: "24px", base: "14px" }}
                      color="#3B4856"
                      key={index}
                    >
                      {serviceData.subtitle
                        .split(" ")
                        .map((word: any, wordIndex: any) =>
                          wordIndex === 0
                            ? word.charAt(0).toUpperCase() +
                              word.slice(1).toLowerCase()
                            : word.toLowerCase()
                        )
                        .join(" ")}{" "}
                    </Box>
                  </Box>
                  <Box
                    as={motion.div}
                    animate={{ rotate: expandedBox === index ? 180 : 0 }}
                    transition={" duration: 0.3 "}
                  >
                    <ArrowUp />
                  </Box>
                </Box>
                <Box
                  borderBottomRadius={"16px"}
                  paddingX="24px"
                  paddingBottom="24px"
                  bg="#ffffff"
                >
                  <Divider
                    marginBottom={"24px"}
                    borderColor="#9C9B9B"
                    borderWidth="1px"
                    orientation="horizontal"
                  />
                  {serviceData.items?.map((sabData: any, sabIndex: any) => (
                    <Box
                      marginBottom="4px"
                      fontSize={{ xl: "24px", base: "14px" }}
                      fontWeight={400}
                      lineHeight={{ xl: "32px", base: "24px" }}
                      fontStyle="normal"
                      color="#3B4856"
                      key={sabIndex}
                      listStyleType="disc"
                    >
                      <Box display={"flex"} gap={"8px"}>
                        <Box>{`${index + 1}.${sabIndex + 1}`}</Box>
                        <Box>{sabData.body}</Box>
                      </Box>
                      {sabData.items && (
                        <UnorderedList listStyleType="circle" ml="40px">
                          {sabData.items.map((subItem: any, subIndex: any) => (
                            <ListItem key={subIndex}>
                              <Text
                                as="div"
                                dangerouslySetInnerHTML={{
                                  __html: subItem.subbody,
                                }}
                              />
                              {subItem.items && (
                                <UnorderedList listStyleType="circle" ml="40px">
                                  {subItem.items.map(
                                    (pItem: any, pIndex: number) => (
                                      <ListItem key={pIndex}>
                                        {pItem.p}
                                      </ListItem>
                                    )
                                  )}
                                </UnorderedList>
                              )}
                            </ListItem>
                          ))}
                        </UnorderedList>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <PopUp hide={popupHide} setHide={setPopupHide}>
        <Box
          width={{ xl: "48.194vw", base: "max" }}
          borderRadius={"24px"}
          backgroundColor={"#FFFFFF"}
          padding={{ xl: "40px", base: "20px" }}
          display={"flex"}
          flexDirection={"column"}
          marginTop={{ xl: "0px", base: "40px" }}
        >
          <Text
            color={"#3B4856"}
            fontSize={{ xl: "24px", base: "14px" }}
            fontWeight={700}
            lineHeight={{ xl: "28px", base: "18px" }}
            textAlign={"center"}
            width={{ xl: "full", base: "300px" }}
          >
            Байгууллагын даатгалын менежерүүдтэй холбогдох
          </Text>
          <Box display={{ xl: "flex" }} marginTop={"40px"}>
            <Box
              flex={1}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              marginBottom={{ xl: "0px", base: "40px" }}
            >
              <Image
                src={jambalsuren.src}
                width={{ xl: "136px", base: "80px" }}
                marginBottom={"8px"}
              />
              <Text
                color={"#4F5A67"}
                fontSize={"16px"}
                fontWeight={700}
                marginBottom={"8px"}
              >
                Г. Жамбалсүрэн
              </Text>
              <Text
                color={"#767F89"}
                fontSize={"10px"}
                fontWeight={500}
                lineHeight={"12px"}
                textAlign={"center"}
                width={"110px"}
                marginBottom={"16px"}
              >
                Байгууллагын даатгалын менежер
              </Text>
              <Box
                backgroundColor={"#FFFFFF"}
                boxShadow={"0px 0px 8px 0px #b6b6b647"}
                borderRadius={"21.5px"}
                paddingX={"16px"}
                paddingY={"10px"}
                display={"flex"}
                gap={"8px"}
                marginBottom={"12px"}
              >
                <IconEmail />
                <Text fontSize={"16px"} color={"#3B4856"} fontWeight={400}>
                  jambalsuren.g@khaandaatgal.mn
                </Text>
              </Box>
              <Box
                backgroundColor={"#FFFFFF"}
                boxShadow={"0px 0px 8px 0px #b6b6b647"}
                borderRadius={"21.5px"}
                paddingX={"16px"}
                paddingY={"10px"}
                display={"flex"}
                gap={"8px"}
              >
                <IconPhone />
                <Text fontSize={"16px"} color={"#3B4856"} fontWeight={400}>
                  +976 9910-2573
                </Text>
              </Box>
            </Box>
            <Box
              flex={1}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Image
                src={temuulen.src}
                width={{ xl: "136px", base: "80px" }}
                marginBottom={"8px"}
              />
              <Text
                color={"#4F5A67"}
                fontSize={"16px"}
                fontWeight={700}
                marginBottom={"8px"}
              >
                Ц. Тэмүүлэн
              </Text>
              <Text
                color={"#767F89"}
                fontSize={"10px"}
                fontWeight={500}
                lineHeight={"12px"}
                textAlign={"center"}
                width={"110px"}
                marginBottom={"16px"}
              >
                Байгууллагын даатгалын менежер
              </Text>
              <Box
                backgroundColor={"#FFFFFF"}
                boxShadow={"0px 0px 8px 0px #b6b6b647"}
                borderRadius={"21.5px"}
                paddingX={"16px"}
                paddingY={"10px"}
                display={"flex"}
                gap={"8px"}
                marginBottom={"12px"}
              >
                <IconEmail />
                <Text fontSize={"16px"} color={"#3B4856"} fontWeight={400}>
                  temuulen.ts@khaandaatgal.mn
                </Text>
              </Box>
              <Box
                backgroundColor={"#FFFFFF"}
                boxShadow={"0px 0px 8px 0px #b6b6b647"}
                borderRadius={"21.5px"}
                paddingX={"16px"}
                paddingY={"10px"}
                display={"flex"}
                gap={"8px"}
              >
                <IconPhone />
                <Text fontSize={"16px"} color={"#3B4856"} fontWeight={400}>
                  +976 9910-2563
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </PopUp>
    </Box>
  );
};
