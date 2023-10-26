import { IconVision, IconVisionSec } from "@/assets";
import { Box, Divider } from "@chakra-ui/react";
import React from "react";

type Props = {};

export const AboutVision = ({}: Props) => {
  return (
    <Box textAlign={"center"} display={"flex"} gap={'81px'} justifyContent={"center"} >
      <Box paddingTop={"80px"} height={"336px"} >
        <Box paddingTop={"20px"} paddingBottom={"16px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <IconVision />
        </Box>
        <Box
          textTransform={"uppercase"}
          fontSize={"24px"}
          color={"#66377B"}
          fontWeight={700}
          fontStyle={"normal"}
        >
          алсын хараа
        </Box>
        <Box width={'579px'} fontSize={"24px"} color={"#3B4856"}>
          Салбарыг түүчээлэгч, олон улсын үнэлгээтэй, мэдлэгт суурилсан даатгалын
          компани
        </Box>
      </Box>
      <Divider width={'1px'} backgroundColor={"#E0D7E5"} marginY={"100px"} orientation='vertical' />
      <Box paddingTop={"80px"}>
        <Box paddingTop={"20px"} paddingBottom={"16px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <IconVisionSec />
        </Box>
        <Box
          textTransform={"uppercase"}
          fontSize={"24px"}
          color={"#66377B"}
          fontWeight={700}
          fontStyle={"normal"}
        >
          эрхэм зорилго
        </Box>
        <Box width={'479px'} fontSize={"24px"} color={"#3B4856"}>
          Мэдлэгт суурилсан даатгалын үйлчилгээг хамгийн хялбар шийдлээр
        </Box>
      </Box>
    </Box>
  );
};
