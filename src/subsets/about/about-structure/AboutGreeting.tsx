"use client";

import { Box, Image } from "@chakra-ui/react";
import React from "react";
import tuzImage from "../../../assets/pics/tuzGreetings.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FormattedMessage, useIntl } from "react-intl";

type Props = {};

export const AboutGreeting = ({}: Props) => {
  const intl = useIntl();
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });
  return (
    <Box
      ref={ref}
      paddingX={{ xl: "8.3vw", base: "3.72vw" }}
      paddingY={{ xl: "64px", base: "40px" }}
      width={"100vw"}
    >
      <Box
        display={{ xl: "flex", base: "block" }}
        gap={"23px"}
        justifyContent={"center"}
      >
        <Box
          position={"relative"}
        >
          <Image
            borderRadius={"8px"}
            width={{ xl: "485px", base: "full" }}
            h={{ xl: "323px", base: "full" }}
            src={`${tuzImage.src}`}
            alt=""
          />
          <Box
            width={"162px"}
            height={"79px"}
            bg="rgba(102, 55, 123, 0.50)"
            borderRadius={"4px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            top={{xl: "232px"}}
            bottom={{base: "16px"}}
            color={"#ffffff"}
            right={"16px"}
          >
            <Box>
              <Box
                fontSize={"16px"}
                fontWeight={700}
                textTransform={"uppercase"}
              >
                <FormattedMessage id="bayarsaikhan" />
              </Box>
              <Box fontSize={"16px"} fontWeight={400} fontStyle={"normal"}>
                <FormattedMessage id="chairman" />
              </Box>
            </Box>
          </Box>
        </Box>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Box width={{ xl: "690px" }}>
            <Box
              paddingBottom={"16px"}
              paddingTop={{ xl: "19px", base: "24px" }}
              textTransform={"uppercase"}
              fontSize={{ xl: "18px", base: "1.2rem" }}
              fontWeight={700}
              color={"#3B4856"}
            >
              <FormattedMessage id="greetings" />
            </Box>
            <Box
              fontSize={"16px"}
              fontStyle={"normal"}
              fontWeight={400}
              color={"#3B4856"}
            >
              <Box
                lineHeight={"20px"}
                paddingBottom={"10px"}
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "greetings_desc" }),
                }}
              ></Box>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};
