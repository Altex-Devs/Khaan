"use client";

import { Box, Text } from "@chakra-ui/react";
import React from "react";
import bgImage from "../../../assets/pics/bg-history.png";
import rightBanner from "../../../assets/pics/right-banner.png";
import leftBanner from "../../../assets/pics/left-banner.png";
import { historyData } from "./data";
import { AboutLeft } from "./AboutLeft";

type Props = {};

type dataType = {
  title: string;
  year: string;
  body: string;
  icon: () => React.JSX.Element;
  id: number;
};

export const AboutHistory = ({}: Props) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      backgroundImage={bgImage.src}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      paddingY={"80px"}
    >
      <Box
        width={"5px"}
        height={"5px"}
        borderRadius={"64px"}
        backgroundColor={"white"}
        display={"flex"}
        gap={"24px"}
        flexDirection={"column"}
      />
      <Box height={"8vh"} width={"1px"} backgroundColor={"white"} />
      {historyData.map((data) => {
        if (data.id % 2 === 1) {
          return (
            <Box display={"flex"} key={data.id}>
              <Box
                width={"50vw"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-end"}
                justifyContent={"center"}
              >
                <Box
                  display={"flex"}
                  gap={"10px"}
                  width={"25vw"}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                >
                  <Box
                    backgroundImage={rightBanner.src}
                    backgroundSize={"contain"}
                    backgroundRepeat={"no-repeat"}
                    backgroundPosition={"center"}
                    display={"flex"}
                    alignItems={"center"}
                    width={"8.5vw"}
                    height={"11.9vh"}
                  >
                    <Box paddingLeft={"2.7vw"}>{data.icon()}</Box>
                  </Box>
                  <Box
                    fontSize={"48px"}
                    fontWeight={700}
                    color={"white"}
                    paddingX={"40px"}
                    borderBottom={"1px"}
                    borderLeft={"1px"}
                    borderStyle={"dashed"}
                    borderColor={"white"}
                    textAlign={"right"}
                  >
                    {data.year}
                  </Box>
                </Box>
                <Box paddingX={"40px"}>
                  <Text
                    color={"white"}
                    textAlign={"right"}
                    fontWeight={700}
                    className="uppercase"
                    fontSize={"18px"}
                  >
                    {data.title}
                  </Text>
                  <Text
                    width={"25vw"}
                    color={"white"}
                    textAlign={"right"}
                    fontWeight={400}
                    fontSize={"16px"}
                  >
                    {data.body}
                  </Text>
                </Box>
              </Box>
              <Box width={"1px"} backgroundColor={"white"} />
              <Box width={"50vw"} />
            </Box>
          );
        } else {
          return (
            <Box display={"flex"} key={data.id}>
              <Box width={"50vw"} />
              <Box width={"1px"} backgroundColor={"white"} />
              <Box
                width={"50vw"}
                // height={"25vh"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Box
                  display={"flex"}
                  gap={"10px"}
                  width={"25vw"}
                  alignItems={"center"}
                >
                  <Box
                    fontSize={"48px"}
                    fontWeight={700}
                    color={"white"}
                    paddingX={"40px"}
                    borderBottom={"1px"}
                    borderRight={"1px"}
                    borderStyle={"dashed"}
                    borderColor={"white"}
                    textAlign={"left"}
                  >
                    {data.year}
                  </Box>
                  <Box
                    backgroundImage={leftBanner.src}
                    backgroundSize={"contain"}
                    backgroundRepeat={"no-repeat"}
                    backgroundPosition={"center"}
                    display={"flex"}
                    alignItems={"center"}
                    width={"8.5vw"}
                    height={"11.9vh"}
                  >
                    <Box paddingLeft={"2.7vw"}>{data.icon()}</Box>
                  </Box>
                </Box>
                <Box paddingX={"40px"}>
                  <Text
                    color={"white"}
                    textAlign={"left"}
                    fontWeight={700}
                    className="uppercase"
                    fontSize={"18px"}
                  >
                    {data.title}
                  </Text>
                  <Text
                    width={"25vw"}
                    color={"white"}
                    textAlign={"left"}
                    fontWeight={400}
                    fontSize={"16px"}
                  >
                    {data.body}
                  </Text>
                </Box>
              </Box>
            </Box>
          );
        }
      })}
      <Box height={"8vh"} width={"1px"} backgroundColor={"white"} />
      <Box
        width={"5px"}
        height={"5px"}
        borderRadius={"64px"}
        backgroundColor={"white"}
        display={"flex"}
        gap={"24px"}
        flexDirection={"column"}
      />
    </Box>
  );
};
