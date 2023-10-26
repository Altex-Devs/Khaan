import { AboutMainSvg } from "@/assets";
import { Box, Image } from "@chakra-ui/react";
import React from "react";

type Props = {};

export const AboutStructureGraph = ({}: Props) => {
  return (
    <>
      <Box height={'626px'} width={'100%'} backgroundColor={'#F6F6F6'}>
        <Box paddingX={"8.3vw"} paddingY={"80px"}>
          <AboutMainSvg />
        </Box>
      </Box>
    </>
  );
};
