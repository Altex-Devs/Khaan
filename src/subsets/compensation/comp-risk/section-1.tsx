"use client";

import { IconPhoneNuhun } from "@/assets";
import { Box, Center } from "@chakra-ui/react";
import React, { createContext } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

type Props = {};

export const SectionOne = ({}: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });
  return (
    <Box
      ref={ref}
      backgroundColor={"#EBEDEE"}
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
            fontSize={{ xl: "24px", base: "14px" }}
            fontStyle={"normal"}
            fontWeight={400}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingX={{ xl: "8.3vw", base: "3.72vw" }}
            textAlign="center"
            margin="auto"
            width={{ xl: "995px" }}
            lineHeight={{ xl: "32px", base: "18px" }}
          >
            <FormattedMessage id="claim_risk_desc" />
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
              <Box
                fontSize={{ xl: "16px", base: "16px" }}
                fontWeight={400}
                color={"#3B4856"}
              >
                <a href="tel:+976 7570-0808">+976 7570-0808</a>
              </Box>
            </Box>
          </Center>
        </Box>
      </motion.div>
    </Box>
  );
};
