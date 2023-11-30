"use client";

import {
  Box,
  Divider,
  ListItem,
  UnorderedList,
  Text,
  Image,
} from "@chakra-ui/react";
import financeInsuranceImage from "../../assets/pics/finance-insurance.png";
import healthInsuranceImage from "../../assets/pics/health-insurance.png";
import houseInsuranceImage from "../../assets/pics/house-insurance.png";
import carInsuranceImage from "../../assets/pics/car-insurance.png";
import travelInsuranceImage from "../../assets/pics/travel-insurance.png";
import jambalsuren from "../../assets/pics/jambalsuren.png";
import temuulen from "../../assets/pics/temuulen.png";
import { ArrowUp, IconEmail, IconMail, IconPhone } from "@/assets";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { usePathname } from "next/navigation";
import { PopUp } from "@/components/PopUp";

export const ServiceDetail = () => {
  const [expandedBox, setExpandedBox] = useState(null);
  const [docData, setDocData] = useState<any>();
  const [popupHide, setPopupHide] = useState(true);
  const pathname = usePathname();
  const splitedPath = pathname.split("/");
  splitedPath.shift();
  const fetchData = async () => {
    try {
      const q = doc(db, splitedPath[0], splitedPath[1]);
      const docSnap = await getDoc(q);
      const data = docSnap.data();
      setDocData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const buttonClick = () => {
    if (docData?.title === "Худалдааны зээлийн даатгал") {
      window.open(
        "https://www.facebook.com/profile.php?id=61553632304221",
        "_blank"
      );
    } else {
      setPopupHide(false);
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
        mt={"11.2vh"}
        paddingX={"8.3vw"}
        height="336px"
        bgSize={"cover"}
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
            : houseInsuranceImage.src
        }
        marginBottom={"9.6vh"}
      >
        <Box
          paddingTop={"80px"}
          color={"#fff"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"100%"}
        >
          <Box
            flex={1}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize="24px"
              fontWeight={500}
              textTransform={"uppercase"}
              mb={"8px"}
              lineHeight="28px"
            >
              {docData?.title}
            </Box>
            <Box
              fontSize={docData?.desc?.length > 250 ? "22px" : "24px"}
              fontWeight={300}
              display={"flex"}
              textAlign={"center"}
              justifyContent={"center"}
              alignItems={"center"}
              lineHeight={docData?.desc?.length > 250 ? "24px" : "28px"}
            >
              {docData?.desc}
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginY={"5.19vh"}
          >
            <Box
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
              Даатгуулах
            </Box>
          </Box>
        </Box>
      </Box>
      <Box paddingX={"8.3vw"} color={"#000000"}>
        <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
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
                  paddingY={"30px"}
                  onClick={() => handleBoxClick(index)}
                  cursor={"pointer"}
                  paddingX={"24px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  gap="48px"
                  key={index}
                >
                  <Box display={"flex"} gap={"24px"}>
                    <Box
                      bgGradient="linear-gradient(180deg, #6B337E 0%, #DD005C 100%)"
                      bgClip="text"
                      fontSize="24px"
                      fontWeight={900}
                    >
                      {index + 1}
                    </Box>
                    <Divider
                      marginTop={"4px"}
                      h={"24px"}
                      borderColor="#9C9B9B"
                      borderWidth="1px"
                      orientation="vertical"
                    />
                    <Box
                      fontWeight="700"
                      fontSize="24px"
                      color="#3B4856"
                      key={index}
                    >
                      {serviceData.subtitle}
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
                      fontSize="24px"
                      fontWeight={400}
                      lineHeight="32px"
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
          width={"48.194vw"}
          borderRadius={"24px"}
          backgroundColor={"#FFFFFF"}
          padding={"40px"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Text
            color={"#3B4856"}
            fontSize={"24px"}
            fontWeight={700}
            lineHeight={"28px"}
            textAlign={"center"}
          >
            Байгууллагын даатгалын менежерүүдтэй холбогдох
          </Text>
          <Box display={"flex"} marginTop={"40px"}>
            <Box
              flex={1}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Image
                src={jambalsuren.src}
                width={"136px"}
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
              <Image src={temuulen.src} width={"136px"} marginBottom={"8px"} />
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
