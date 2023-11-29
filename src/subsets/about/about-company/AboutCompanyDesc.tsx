"use client";

import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import dummyImage from "../../../assets/pics/dummyImage2.png";
import { IconPlay } from "@/assets";
import { motion } from "framer-motion";
import { Video } from "@/components";
import { useInView } from "react-intersection-observer";

type Props = {};

export const AboutCompanyDesc = ({}: Props) => {
  const [hide, setHide] = useState(true);
  const [video, setVideo] = useState<any>();
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });

  const openModal = () => {
    setHide(false);
    video.playVideo();
  };

  return (
    <Box
      ref={ref}
      backgroundColor={"#EBEDEE"}
      marginTop={{ xl: "170px", base: "120px" }}
      paddingBottom={{ xl: "9.6vh", base: "42px" }}
      height={"100%"}
    >
      <Box paddingX={{ xl: "8.3vw", base: "0px" }} width={"100vw"}>
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
            paddingX={{ base: "3.72vw", xl: "0px" }}
            textAlign={"center"}
            paddingBottom={{ xl: "16px", base: "8px" }}
            paddingTop={{ xl: "80px", base: "100px" }}
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
            fontSize={{ base: "14px", xl: "24px" }}
            fontStyle={"normal"}
            fontWeight={400}
            color={"#4F5A67"}
            textAlign={"center"}
            width={"100%"}
            paddingX={{ base: "3.72vw", xl: "0px" }}
            paddingBottom={{ xl: "40px", base: "16px" }}
            lineHeight={{ xl: "32px", base: "18px" }}
          >
            “Хаан Даатгал” ХХК нь 2012 онд Үндэсний хөрөнгө оруулалттайгаар
            үүсгэн байгуулагдсан цагаас хойш Монголын даатгалын зах зээлд
            тогтвортой үйл ажиллагаа явуулж байна.
          </Box>
        </motion.div>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box
            width={{ xl: "69.2vw", base: "100%" }}
            height={"22.78vh"}
            backgroundPosition={"center"}
            backgroundSize={{ xl: "contain", base: "cover" }}
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
              onClick={openModal}
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
      <Video hide={hide} setHide={setHide} setVideo={setVideo} />
    </Box>
  );
};
