"use client";

import { IconPhoneNuhun } from "@/assets";
import { Box, Center } from "@chakra-ui/react";
import React, { createContext } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type Props = {};

export const SectionOne = ({}: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });
  return (
    <Box
      ref={ref}
      backgroundColor={"#F6F6F6"}
      marginTop={"170px"}
      height={"100%"}
      color={"#4F5A67"}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }} // Initial state of the animation
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animation that will play when the component mounts
        transition={{ duration: 2 }} // Duration of the animation
      >
        <Box paddingTop={"40px"}>
          <Center
            fontSize={"24px"}
            fontStyle={"normal"}
            fontWeight={400}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign="center"
            margin="auto"
            width={"995px"}
          >
            Та даатгалын тохиолдлын үед дараах арга хэмжээг авч, даатгалын
            шуурхай албаны утаснаас заавар, зөвлөгөө аваарай.
          </Center>

          <Center marginTop={"24px"}>
            <Box
              gap={"8px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              bg={"#ffffff"}
              paddingX={"16px"}
              borderRadius={"21.5px"}
            >
              <Box paddingY={"8px"}>
                <IconPhoneNuhun />
              </Box>
              <Box fontSize={"16px"} fontWeight={400} color={"#3B4856"}>
                +7570-0808
              </Box>
            </Box>
          </Center>
        </Box>
      </motion.div>
    </Box>
  );
};