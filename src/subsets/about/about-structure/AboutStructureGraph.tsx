"use client";

import { AboutMainSvg } from "@/assets";
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

export const AboutStructureGraph = ({}: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });
  return (
    <>
      <Box
        marginTop={"20.52vh"}
        paddingBottom={"10.39vh"}
        ref={ref}
        width={"100%"}
        backgroundColor={"#EBEDEE"}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            fontWeight={700}
            fontSize={"24px"}
            paddingTop={"10.39vh"}
            paddingBottom={"5.195vh"}
            color={"#3B4856"}
            textTransform={"uppercase"}
          >
            компанийн бүтэц
          </Box>
          <Box
            paddingX={"8.3vw"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <AboutMainSvg />
          </Box>
        </motion.div>
      </Box>
    </>
  );
};
