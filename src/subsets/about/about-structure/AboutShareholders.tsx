"use client";

import {
  MobileShareHolders,
  MobileShareHoldersEnglish,
  ShareHolders,
  ShareHoldersEnglish,
} from "@/assets";
import { Box, Center, flexbox } from "@chakra-ui/react";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FormattedMessage, useIntl } from "react-intl";

type Props = {};

export const AboutShareholders = ({}: Props) => {
  const intl = useIntl();
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });
  return (
    <Box
      ref={ref}
      backgroundColor={"#EBEDEE"}
      paddingBottom={{ xl: "10.39vh", base: "40px" }}
      width={"100%"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        paddingTop={{ xl: "10.39vh", base: "40px" }}
        paddingBottom={{ xl: "3.195vh", base: "24px" }}
        color={"#3B4856"}
        fontSize={{ xl: "18px", base: "1.2rem" }}
        fontWeight={700}
        textTransform={"uppercase"}
        fontStyle={"normal"}
        paddingX={{ xl: "0px", base: "20px" }}
        textAlign="center"
      >
        <FormattedMessage id="shareholders" />
      </Box>
      <Box display={{ xl: "flex", base: "none" }} justifyContent={"center"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state of the animation
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animation that will play when the component mounts
          transition={{ duration: 1 }} // Duration of the animation
        >
          {intl.locale === "mn" ? <ShareHolders /> : <ShareHoldersEnglish />}
        </motion.div>
      </Box>
      <Box
        marginX={"3.72vw"}
        display={{ xl: "none", base: "flex" }}
        justifyContent={"center"}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state of the animation
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animation that will play when the component mounts
          transition={{ duration: 1 }} // Duration of the animation
        >
          {intl.locale === "mn" ? (
            <MobileShareHolders />
          ) : (
            <MobileShareHoldersEnglish />
          )}
        </motion.div>
      </Box>
    </Box>
  );
};
