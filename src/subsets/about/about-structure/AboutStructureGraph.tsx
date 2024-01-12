"use client";

import {
  AboutMainMobileSvg,
  AboutMainMobileSvgEnglish,
  AboutMainSvg,
  AboutMainSvgEnglish,
} from "@/assets";
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FormattedMessage, useIntl } from "react-intl";

type Props = {};

export const AboutStructureGraph = ({}: Props) => {
  const intl = useIntl();
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });
  return (
    <>
      <Box
        marginTop={{ xl: "20.52vh", base: "120px" }}
        paddingBottom={{ xl: "10.39vh", base: "20px" }}
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
            fontSize={{ xl: "24px", base: "1.2rem" }}
            paddingTop={"10.39vh"}
            paddingBottom={{ xl: "5.195vh", base: "0px" }}
            color={"#3B4856"}
            textTransform={"uppercase"}
          >
            <FormattedMessage id="company_structure" />
          </Box>
          <Box
            paddingX={"8.3vw"}
            display={{ xl: "flex", base: "none" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {intl.locale === "mn" ? <AboutMainSvg /> : <AboutMainSvgEnglish />}
          </Box>
          <Box
            paddingX={"3.72vw"}
            display={{ xl: "none", base: "flex" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {intl.locale === "mn" ? (
              <AboutMainMobileSvg />
            ) : (
              <AboutMainMobileSvgEnglish />
            )}
          </Box>
        </motion.div>
      </Box>
    </>
  );
};
