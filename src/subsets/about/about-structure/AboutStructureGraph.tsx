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
        marginTop={"170px"}
        ref={ref}
        height={"626px"}
        width={"100%"}
        backgroundColor={"#EBEDEE"}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box
            paddingX={"8.3vw"}
            paddingY={"80px"}
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
