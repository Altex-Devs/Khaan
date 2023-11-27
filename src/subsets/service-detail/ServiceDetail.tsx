"use client";

import {
  Box,
  Divider,
  ListItem,
  UnorderedList,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import dummyImage from "../../assets/pics/details-png.png";
import financeInsuranceImage from "../../assets/pics/finance-insurance.png";
import healthInsuranceImage from "../../assets/pics/health-insurance.png";
import houseInsuranceImage from "../../assets/pics/house-insurance.png";
import carInsuranceImage from "../../assets/pics/car-insurance.png";
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
  console.log("123:", splitedPath);
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

  useEffect(() => {
    fetchData();
  }, []);

  const handleBoxClick = (index: any) => {
    setExpandedBox(index === expandedBox ? null : index);
  };
  console.log("docData:", docData);
  return (
    <Box
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      backgroundColor={"#EBEDEE"}
      paddingBottom={"18vh"}
    >
      <Box
        mt={"92px"}
        paddingX={"8.3vw"}
        height="336px"
        bgSize={"cover"}
        bgPosition={"bottom"}
        bgRepeat={"no-repeat"}
        width={"full"}
        position={"relative"}
        // style={{
        //   mixBlendMode:
        //     splitedPath[0] === "companies" ? "luminosity" : "normal",
        // }}
        backgroundImage={
          splitedPath[0] === "companies"
            ? docData?.bgImage
            : docData?.title === "ТЭЭВРИЙН ХЭРЭГСЛИЙН ДААТГАЛ" ||
              docData?.title === "ЖОЛООЧИЙН ХAРИУЦЛАГЫН АЛБАН ЖУРМЫН ДААТГАЛ" ||
              docData?.title ===
                "ХЯЗГААРГҮЙ САЙН ДУРЫН ЖОЛООЧИЙН ХАРИУЦЛАГЫН ДААТГАЛ" ||
              docData?.title ===
                "НЭГ УДААГИЙН ТОХИОЛДЛЫН АВТОТЭЭВРИЙН ХЭРЭГСЛИЙН ДААТГАЛ"
            ? carInsuranceImage.src
            : docData?.type === "Эрүүл мэнд , гэнэтийн осол"
            ? healthInsuranceImage.src
            : docData?.type === "Санхүүгийн даатгал"
            ? financeInsuranceImage.src
            : houseInsuranceImage.src
        }
        marginBottom={"9.6vh"}
      >
        {/* <Box
          position={"absolute"}
          paddingX={"8.3vw"}
          height="336px"
          bgSize={"cover"}
          bgPosition={"bottom"}
          bgRepeat={"no-repeat"}
          width={"full"}
          right={"0px"}
          zIndex={-10}
          bgGradient="linear(to-r, rgba(107, 51, 126, 0.70) 30.97%, rgba(221, 0, 92, 0.50) 75.69%)"
        ></Box> */}
        <Box>
          <Box marginTop={"80px"} color={"#fff"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={"24px"}
              fontWeight={700}
              textTransform={"uppercase"}
              mb={"8px"}
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
            >
              {docData?.desc}
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
              >
                <Box
                  borderTopRadius={"16px"}
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
      {/* <Box paddingX={"8.3vw"}>
        {docData?.table?.map((data: any, index: any) => {
          console.log(data);
          return (
            <TableContainer key={index}>
              <Table variant="simple" layout="fixed" borderWidth={"1px"}>
                <Thead backgroundColor={"#66377B"}>
                  <Tr width={"100%"}>
                    {Object.keys(data.header).map((head, headIndex) => (
                      <Th
                        flex={1}
                        key={headIndex}
                        color={"white"}
                        borderWidth={"1px"}
                        wordBreak={"break-word"}
                        whiteSpace={"break-spaces"}
                      >
                        {data.header[head]}
                      </Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody color={"black"}>
                  {data.body.map((body: any, bodyIndex: any) => (
                    <Tr
                      key={bodyIndex}
                      backgroundColor={body.color ? body.color : "white"}
                    >
                      {body.items.map((item: any, itemIndex: any) => (
                        <Td
                          borderWidth={"1px"}
                          flex={1}
                          height={"auto"}
                          key={itemIndex}
                          wordBreak={"break-word"}
                          whiteSpace={"break-spaces"}
                        >
                          {item}
                        </Td>
                      ))}
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          );
        })}
      </Box> */}
    </Box>
  );
};
