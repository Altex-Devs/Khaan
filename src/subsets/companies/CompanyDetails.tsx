"use client";

import { Box, Divider } from "@chakra-ui/react";
import dummyImage from "../../assets/pics/details-png.jpeg";
import { FAQDataCompany } from "./faqData";
import { ArrowUp } from "@/assets";

export const CompanyDetails = () => {
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
        bgPosition={"center -330px"}
        bgRepeat={"no-repeat"}
        width={"full"}
        backgroundImage={dummyImage.src}
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
                <>
                  <Box
                    borderRadius={"16px"}
                    marginBottom={"24px"}
                    bg={"#ffffff"}
                    paddingY={"30px"}
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
                    <Box>
                      <ArrowUp />
                    </Box>
                  </Box>
                </>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
