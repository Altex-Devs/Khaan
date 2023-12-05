"use client";
import { Box, Center, Grid, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { materialsData } from "./materialsData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

export const CompMaterials = ({}: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });
  return (
    <Box
      backgroundColor={"#EBEDEE"}
      marginTop={"125px"}
      ref={ref}
      height={"100%"}
      color={"#4F5A67"}
      paddingX={"8.3vw"}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }} // Initial state of the animation
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animation that will play when the component mounts
        transition={{ duration: 2 }} // Duration of the animation
      >
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          paddingTop={"60px"}
          paddingBottom={"156px"}
        >
          {materialsData.map((item) => (
            <WrapItem marginTop={"45px"} width={"26.66vw"} key={item.id}>
              <Box>
                <Box
                  color={"#3B4856"}
                  fontSize={"18px"}
                  fontWeight={700}
                  fontStyle={"normal"}
                  backgroundColor={`${item.color}`}
                  position={"relative"}
                >
                  <Box position={"absolute"} bottom={"45px"} left={"16px"}>
                    {item.icon()}
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    textAlign={"center"}
                    alignItems={"center"}
                    height={"66px"}
                    color={`${item.titleColor}`}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                    lineHeight={"18px"}
                  />
                </Box>
                <Box
                  fontSize={"16px"}
                  fontWeight={400}
                  lineHeight={"24px"}
                  height={"320px"}
                  marginTop={"16px"}
                  bg={"#ffffff"}
                  padding={"16px"}
                >
                  {item.items.map((dd, index) => (
                    <Box key={index}>
                      {index + 1}. {dd.title}
                    </Box>
                  ))}
                </Box>
              </Box>
            </WrapItem>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};
