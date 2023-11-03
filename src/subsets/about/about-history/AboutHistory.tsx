"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import bgImage from "../../../assets/pics/bg-history.png";
import { historyData } from "./HistoryData";
import { AboutHistoryLeft } from "./AboutHistoryLeft";
import { AboutHistoryRight } from "./AboutHistoryRight";

type Props = {};

export const AboutHistory = ({}: Props) => {
  return (
    <Box
      marginTop={"170px"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      backgroundImage={bgImage.src}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      paddingTop={"80px"}
      paddingBottom={"150px"}
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
          return <AboutHistoryLeft data={data} key={data.id} />;
        } else {
          return <AboutHistoryRight data={data} key={data.id} />;
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
