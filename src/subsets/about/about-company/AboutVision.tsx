"use client";

import { IconVision, IconVisionSec } from "@/assets";
import { Box, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

type Props = {};

export const AboutVision = ({}: Props) => {
  const intl = useIntl();
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });

  return (
    // <Box textAlign={"center"} display={"flex"} gap={'32px'} justifyContent={"center"} paddingX={"8.3vw"} paddingY={"9.59vh"}>
    <Box
      ref={ref}
      textAlign={"center"}
      display={{ xl: "flex", base: "block" }}
      gap={"32px"}
      paddingX={{ xl: "8.3vw", base: "3.72vw" }}
      paddingY={{ xl: "160px", base: "40px" }}
    >
      <Box flex={1}>
        <Box
          paddingBottom={"20px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconVision />
        </Box>
        <motion.div
          initial={{ opacity: 0, y: 60 }} // Initial state of the animation
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animation that will play when the component mounts
          transition={{ duration: 2 }} // Duration of the animation
        >
          <Box
            textTransform={"uppercase"}
            fontSize={{ xl: "24px", base: "1.2rem" }}
            color={"#66377B"}
            fontWeight={700}
            fontStyle={"normal"}
            paddingBottom={"16px"}
          >
            <FormattedMessage id="vision_statement" />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }} // Initial state of the animation
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animation that will play when the component mounts
          transition={{ duration: 3 }} // Duration of the animation
        >
          <Box
            fontSize={{ xl: "24px", base: "14px" }}
            paddingBottom={{ xl: "0px", base: "25px" }}
            color={"#3B4856"}
            fontWeight={400}
            fontStyle={"normal"}
            lineHeight={{ xl: "32px", base: "18px" }}
          >
            <FormattedMessage id="vision_statement_desc" />
          </Box>
        </motion.div>
      </Box>

      <Box display={{ xl: "flex", base: "none" }} alignItems={"center"}>
        <Box height={"100%"} width={"1px"} backgroundColor={"#E0D7E5"} />
      </Box>
      <Box
        display={{ xl: "none", base: "flex" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box height={"1px"} width={"60%"} backgroundColor={"#E0D7E5"} />
      </Box>

      <Box flex={1} paddingTop={{ xl: "0px", base: "55px" }}>
        <Box paddingBottom={"20px"} display={"flex"} justifyContent={"center"}>
          <IconVisionSec />
        </Box>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animation that will play when the component mounts
          transition={{ duration: 2 }}
        >
          <Box
            textTransform={"uppercase"}
            fontSize={{ xl: "24px", base: "1.2rem" }}
            color={"#66377B"}
            fontWeight={700}
            fontStyle={"normal"}
            paddingBottom={"16px"}
          >
            <FormattedMessage id="business_goal" />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animation that will play when the component mounts
          transition={{ duration: 3 }}
        >
          <Box
            fontSize={{ xl: "24px", base: "14px" }}
            fontWeight={400}
            fontStyle={"normal"}
            color={"#3B4856"}
            lineHeight={{ xl: "32px", base: "18px" }}
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "business_goal_desc" }),
            }}
          >
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};
