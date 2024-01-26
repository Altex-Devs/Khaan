"use client";

import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import dummyImage from "../../../assets/pics/dummyImage2.png";
import dummyImageX4 from "../../../assets/pics/dummyImage4X.png";
import { IconPlay } from "@/assets";
import { motion } from "framer-motion";
import { Video } from "@/components";
import { useInView } from "react-intersection-observer";
import testSvg from "../../../assets/svg/test.svg";
import { FormattedMessage } from "react-intl";
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
            fontSize={{ xl: "24px", base: "1.2rem" }}
            color={"#3B4856"}
            paddingX={{ base: "3.72vw", xl: "0px" }}
            textAlign={"center"}
            paddingBottom={{ xl: "16px", base: "8px" }}
            paddingTop={{ xl: "80px", base: "100px" }}
          >
            <FormattedMessage id="our_company" />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box
            fontSize={{ xl: "24px", base: "14px" }}
            fontStyle={"normal"}
            fontWeight={400}
            color={"#4F5A67"}
            textAlign={"center"}
            width={"100%"}
            paddingX={{ base: "3.72vw", xl: "0px" }}
            paddingBottom={{ xl: "40px", base: "16px" }}
            lineHeight={{ xl: "32px", base: "18px" }}
          >
            <FormattedMessage id="about_company_desc" />
          </Box>
        </motion.div>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box
            width={{ xl: "69.2vw", base: "100%" }}
            height={"22.78vh"}
            backgroundPosition={"center"}
            backgroundSize={{ xl: "contain", base: "cover" }}
            backgroundRepeat={"no-repeat"}
            backgroundImage={{
              xl: `url(${dummyImage.src})`,
              base: `url(${dummyImageX4.src})`,
            }}
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
