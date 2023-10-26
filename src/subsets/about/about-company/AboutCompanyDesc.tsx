import { Box, Image } from "@chakra-ui/react";
import React from "react";
import dummyImage from "../../../assets/pics/about-tumbnail.png";

type Props = {};

export const AboutCompanyDesc = ({}: Props) => {
  return (
    <Box backgroundColor={"#F6F6F6;"}>
      <Box paddingX={"8.3vw"} width={"100vw"}>
        <Box
          textTransform={"uppercase"}
          fontStyle={"normal"}
          fontWeight={700}
          fontSize={"24px"}
          color={"#3B4856"}
          textAlign={"center"}
          paddingBottom={"16px"}
          paddingTop={"80px"}
        >
          компанийн тухай
        </Box>
        <Box
          fontSize={"24px"}
          fontStyle={"normal"}
          fontWeight={400}
          color={"#4F5A67"}
          textAlign={"center"}
          width={"1200px"}
          paddingBottom={"40px"}
        >
          “Хаан Даатгал” ХХК нь 2012 онд Үндэсний хөрөнгө оруулалттайгаар үүсгэн
          байгуулагдсан цагаас хойш Монголын даатгалын зах зээлд тогтвортой үйл
          ажиллагаа явуулж байна.
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
            <Image width={'996px'} height={"190px"} src={`${dummyImage.src}`} alt=""/>
        </Box>
      </Box>
    </Box>
  );
};
