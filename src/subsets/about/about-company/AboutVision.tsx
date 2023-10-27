import { IconVision, IconVisionSec } from "@/assets";
import { Box, Divider } from "@chakra-ui/react";
import React from "react";

type Props = {};

export const AboutVision = ({}: Props) => {
  return (
    // <Box textAlign={"center"} display={"flex"} gap={'32px'} justifyContent={"center"} paddingX={"8.3vw"} paddingY={"9.59vh"}>
    <Box textAlign={"center"} display={"flex"} gap={'32px'} justifyContent={"center"} alignItems={"center"} paddingX={"8.3vw"} height={"100vh"}>
      <Box>
        <Box paddingBottom={"20px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <IconVision />
        </Box>
        <Box
          textTransform={"uppercase"}
          fontSize={"24px"}
          color={"#66377B"}
          fontWeight={700}
          fontStyle={"normal"}
          paddingBottom={"16px"}
        >
          алсын хараа
        </Box>
        <Box width={'579px'} fontSize={"24px"} color={"#3B4856"} lineHeight={"32px"}>
          Салбарыг түүчээлэгч, олон улсын үнэлгээтэй, мэдлэгт суурилсан даатгалын
          компани
        </Box>
      </Box>
      <Box borderRight={"1px"} borderColor={"#E0D7E5"} />
      <Box>
        <Box paddingBottom={"20px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <IconVisionSec />
        </Box>
        <Box
          textTransform={"uppercase"}
          fontSize={"24px"}
          color={"#66377B"}
          fontWeight={700}
          fontStyle={"normal"}
          paddingBottom={"16px"}
        >
          эрхэм зорилго
        </Box>
        <Box width={'479px'} fontSize={"24px"} color={"#3B4856"} lineHeight={"32px"}>
          Мэдлэгт суурилсан даатгалын үйлчилгээг хамгийн хялбар шийдлээр
        </Box>
      </Box>
    </Box>
  );
};
