"use client";

import { Box, Divider, useDisclosure } from "@chakra-ui/react";
import dummyImage from "../../assets/pics/details-png.png";
import { FAQDataCompany } from "./faqData";
import { ArrowUp } from "@/assets";
import { useState } from "react";
import { motion } from "framer-motion";

export const CompanyDetails = () => {
  const [expandedBox, setExpandedBox] = useState(null);

  const handleBoxClick = (index: any) => {
    setExpandedBox(index === expandedBox ? null : index);
  };
  return (
    <Box
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      backgroundColor={"#F6F6F6"}
    >
      <Box
        mt={"100px"}
        paddingX={"8.3vw"}
        height="336px"
        bgSize={"cover"}
        bgPosition={"center -40vh"}
        bgRepeat={"no-repeat"}
        width={"full"}
        backgroundImage={dummyImage.src}
        // background="linear-gradient(90deg, rgba(107, 51, 126, 0.80) 30.97%, rgba(107, 51, 126, 0.00) 75.69%)" // Set the gradient overlay
      >
        {FAQDataCompany.map((items, index) => (
          <>
            <Box marginTop={"80px"} color={"#fff"} key={index}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"24px"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={"8px"}
              >
                {items.title}
              </Box>
              <Box
                fontSize={"24px"}
                fontWeight={400}
                display={"flex"}
                textAlign={"center"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {items.desc}
              </Box>
            </Box>
          </>
        ))}
      </Box>
      <Box paddingX={"8.3vw"} color={"#000000"}>
        <Box>
          {FAQDataCompany.map((companyData, index) => (
            <Box paddingBottom={"100px"} marginTop={"80px"} key={index}>
              {companyData.faq.map((data, index) => (
                <Box
                  as={motion.div}
                  height={expandedBox === index ? "auto" : "88px"}
                  initial={{ height: "88px" }}
                  animate={{ height: expandedBox === index ? "auto" : "88px" }}
                  exit={{ height: "88px" }}
                  overflow={"hidden"}
                  marginBottom="24px"
                  key="index"
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
                        {data.faqId}
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
                        key={data.faqId}
                      >
                        {data.subTitle}
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
                    <Box
                      paddingBottom={"24px"}
                      borderColor={"#9C9B9B"}
                      borderTop={"1px"}
                    ></Box>
                    {data.items.map((sub, index) => (
                      <Box
                        fontSize={"24px"}
                        fontWeight={400}
                        lineHeight={"32px"}
                        fontStyle={"normal"}
                        color={"#3B4856"}
                        key={index}
                      >
                        {sub.item}
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
