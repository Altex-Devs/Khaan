"use client";

import { Box, Icon, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import dummyImage from "../../../assets/pics/about-tumbnail.png";
import { IconPlay } from "@/assets";
import { motion } from "framer-motion";
import { Video } from "@/components";

type Props = {};

export const AboutCompanyDesc = ({}: Props) => {
  const [hide, setHide] = useState(true);

  return (
    <Box backgroundColor={"#F6F6F6;"} paddingBottom={"9.6vh"}>
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
          width={"100%"}
          paddingBottom={"40px"}
          lineHeight={"32px"}
        >
          “Хаан Даатгал” ХХК нь 2012 онд Үндэсний хөрөнгө оруулалттайгаар үүсгэн
          байгуулагдсан цагаас хойш Монголын даатгалын зах зээлд тогтвортой үйл
          ажиллагаа явуулж байна.
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box
            width={"69.2vw"}
            height={"22.78vh"}
            backgroundPosition={"center"}
            backgroundSize={"contain"}
            backgroundRepeat={"no-repeat"}
            backgroundImage={dummyImage.src}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              position={"relative"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              onClick={() => setHide(false)}
            >
              <motion.div
                transition={{
                  duration: 1.5,
                  bounce: 0,
                  repeat: Infinity,
                }}
                animate={{ scale: [1, 1.2, 1] }}
                style={{
                  backgroundColor: "#66377B",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "64px",
                  opacity: "0.5",
                }}
              >
                <motion.div
                  transition={{
                    duration: 1.5,
                    bounce: 0,
                    repeat: Infinity,
                  }}
                  animate={{ scale: [1, 1.2, 1] }}
                  style={{
                    backgroundColor: "#66377B",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "64px",
                    opacity: "0.5",
                  }}
                >
                  <motion.div
                    transition={{
                      duration: 1.5,
                      bounce: 0,
                      repeat: Infinity,
                    }}
                    animate={{ scale: [1, 1.2, 1] }}
                    style={{
                      backgroundColor: "#66377B",
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "64px",
                      opacity: "0.5",
                    }}
                  ></motion.div>
                </motion.div>
              </motion.div>
              <Box
                position={"absolute"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <IconPlay />
              </Box>
            </Box>
          </Box>
          {/* <Image width={'996px'} height={"190px"} src={`${dummyImage.src}`} alt=""/> */}
        </Box>
      </Box>
      <Video hide={hide} setHide={setHide} />
    </Box>
  );
};