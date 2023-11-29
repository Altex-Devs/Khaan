"use client";

import { Box, Divider, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import financeInsuranceImage from "../../assets/pics/finance-insurance.png";
import healthInsuranceImage from "../../assets/pics/health-insurance.png";
import houseInsuranceImage from "../../assets/pics/house-insurance.png";
import carInsuranceImage from "../../assets/pics/car-insurance.png";
import travelInsuranceImage from "../../assets/pics/travel-insurance.png";
import { ArrowUp } from "@/assets";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { usePathname } from "next/navigation";

export const ServiceDetail = () => {
  const [expandedBox, setExpandedBox] = useState(null);
  const [docData, setDocData] = useState<any>();
  const pathname = usePathname();
  const splitedPath = pathname.split("/");
  splitedPath.shift();
  const fetchData = async () => {
    try {
      const q = doc(db, splitedPath[0], splitedPath[1]);
      const docSnap = await getDoc(q);
      const data = docSnap.data();
      console.log(data);
      setDocData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const buttonClick = () => {
    window.open("https://www.facebook.com/khaandaatgal", "_blank");
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
        paddingX={{ xl: "8.3vw", base: "3.72vw" }}
        height="43.64vh"
        bgSize={"cover"}
        bgPosition={"bottom"}
        bgRepeat={"no-repeat"}
        width={"full"}
        position={"relative"}
        backgroundImage={
          splitedPath[0] === "companies"
            ? docData?.bgImage
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
            : docData?.title === "МОНГОЛООР АЯЛАГЧ ДААТГАЛ"
            ? travelInsuranceImage.src
            : houseInsuranceImage.src
        }
        marginBottom={"9.6vh"}
      >
        <Box marginTop={"80px"} color={"#fff"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={"24px"}
            fontWeight={700}
            textTransform={"uppercase"}
            mb={"8px"}
            lineHeight={"28px"}
          >
            {docData?.title}
          </Box>
          <Box
            fontSize={"24px"}
            fontWeight={400}
            display={"flex"}
            textAlign={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            lineHeight={"28px"}
          >
            {docData?.desc}
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
              bgGradient="linear(to-r, #66377B, #DD005C)"
              onClick={buttonClick}
            >
              Даатгуулах
            </Box>
          </Box>
        </Box>
      </Box>
      <Box paddingX={{ xl: "8.3vw", base: "3.72vw" }} color={"#000000"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={{ xl: "24px", base: "16px" }}
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
                  paddingY={{ xl: "30px", base: "28px" }}
                  onClick={() => handleBoxClick(index)}
                  cursor={"pointer"}
                  paddingX={"24px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  gap="48px"
                  key={index}
                >
                  <Box display={"flex"} gap={{ xl: "24px", base: "18px" }}>
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
                      marginTop={"4px"}
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
    </Box>
  );
};
