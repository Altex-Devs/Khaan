"use client";

import { Excellence, GlobalBank, IconAfaq } from "@/assets";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

type Props = {};

export const AboutQuality = ({}: Props) => {
  const intl = useIntl();
  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust this threshold as needed
    triggerOnce: true,
  });

  return (
    <Box
      ref={ref}
      marginBottom={"100px"}
      height={{ xl: "676px", base: "100%" }}
      width={"100%"}
      backgroundColor={"#EBEDEE"}
      paddingX={{ xl: "8.3vw", base: "3.72vw" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Box
          fontSize={{ xl: "18px", base: "1.2rem" }}
          fontWeight={700}
          fontStyle={"normal"}
          textTransform={"uppercase"}
          color={"#3B4856"}
          display={"flex"}
          justifyContent={"center"}
          paddingTop={{ xl: "80px", base: "40px" }}
          paddingBottom={"44px"}
        >
          <FormattedMessage id="service_quality" />
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state of the animation
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }} // Duration of the animation
      >
        <Box
          display={{ xl: "flex", base: "block" }}
          textAlign={"center"}
          justifyContent={"center"}
          gap={"25px"}
          marginBottom={"80px"}
        >
          <Box flex={1} paddingBottom={{ xl: "0px", base: "40px" }}>
            <Box
              paddingBottom={{ xl: "40px", base: "24px" }}
              display={"flex"}
              justifyContent={"center"}
            >
              <IconAfaq />
            </Box>
            <Box
              fontSize={{ xl: "18px", base: "14px" }}
              fontStyle={"normal"}
              fontWeight={400}
              color={"#3B4856"}
              width={"100%"}
              lineHeight={{ xl: "32px", base: "18px" }}
              paddingX={{ xl: "80px", base: "0px" }}
            >
              <FormattedMessage id="service_quality_iso" />
            </Box>
          </Box>
          <Box flex={1} paddingBottom={{ xl: "0px", base: "40px" }}>
            <Box
              display={"flex"}
              paddingBottom={{ xl: "40px", base: "24px" }}
              justifyContent={"center"}
            >
              {" "}
              <GlobalBank />
            </Box>
            <Box
              fontSize={{ xl: "18px", base: "14px" }}
              fontStyle={"normal"}
              fontWeight={400}
              color={"#3B4856"}
              width={"100%"}
              lineHeight={{ xl: "32px", base: "18px" }}
              paddingX={{ xl: "20px", base: "0px" }}
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "service_quality_award" }),
              }}
            ></Box>
          </Box>
          <Box flex={1} paddingBottom={{ xl: "0px", base: "45px" }}>
            <Box
              display={"flex"}
              paddingBottom={{ xl: "40px", base: "24px" }}
              justifyContent={"center"}
            >
              <Excellence />
            </Box>
            <Box
              fontSize={{ xl: "18px", base: "14px" }}
              fontStyle={"normal"}
              fontWeight={400}
              color={"#3B4856"}
              width={"100%"}
              lineHeight={{ xl: "32px", base: "18px" }}
              paddingX={{ xl: "30px", base: "0px" }}
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({
                  id: "service_quality_excellence",
                }),
              }}
            ></Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};
