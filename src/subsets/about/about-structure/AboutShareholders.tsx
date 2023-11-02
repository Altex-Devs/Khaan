"use client";

import { ShareHolders } from "@/assets";
import { Box, flexbox } from "@chakra-ui/react";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type Props = {};

export const AboutShareholders = ({}: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });
  return (
    <Box ref={ref} backgroundColor={"#F6F6F6"} height={"737px"} width={"100%"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        paddingTop={"80px"}
        paddingBottom={"40px"}
        color={"#3B4856"}
        fontSize={"24px"}
        fontWeight={700}
        textTransform={"uppercase"}
        fontStyle={"normal"}
      >
        КОМПАНИЙН ХУВЬЦАА ЭЗЭМШИГЧИД 
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state of the animation
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animation that will play when the component mounts
          transition={{ duration: 1 }} // Duration of the animation
        >
          <ShareHolders />
        </motion.div>
      </Box>
    </Box>
  );
};
