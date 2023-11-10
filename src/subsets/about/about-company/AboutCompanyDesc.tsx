"use client";

import { Box, Icon, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import dummyImage from "../../../assets/pics/about-tumbnail.png";
import { IconPlay } from "@/assets";
import { motion } from "framer-motion";
import { Video } from "@/components";
import { useInView } from 'react-intersection-observer';


type Props = {};

export const AboutCompanyDesc = ({}: Props) => {
  const [hide, setHide] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });

  return (
    <Box ref={ref} backgroundColor={"#F6F6F6"} marginTop={"170px"} paddingBottom={"9.6vh"} height={"100%"}>
      <Box paddingX={"8.3vw"} width={"100vw"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
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
            “Хаан Даатгал” ХХК нь 2012 онд Үндэсний хөрөнгө оруулалттайгаар
            үүсгэн байгуулагдсан цагаас хойш Монголын даатгалын зах зээлд
            тогтвортой үйл ажиллагаа явуулж байна.
          </Box>
        </motion.div>
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
                  duration: 4.5,
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
                    duration: 4.5,
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
                      duration: 4.5,
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
