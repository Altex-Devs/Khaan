import { IconPhoneNuhun } from "@/assets";
import { Box, Center } from "@chakra-ui/react";
import React from "react";

type Props = {};

export const SectionOne = ({}: Props) => {
  return (
    <Box
      backgroundColor={"#F6F6F6"}
      marginTop={"170px"}
      height={"100%"}
      color={"#4F5A67"}
    >
      <Box paddingTop={"40px"}>
        <Center
          fontSize={"24px"}
          fontStyle={"normal"}
          fontWeight={400}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign="center"
          margin="auto"
          width={"995px"}
        >
          Та даатгалын тохиолдлын үед дараах арга хэмжээг авч, даатгалын шуурхай
          албаны утаснаас заавар, зөвлөгөө аваарай.
        </Center>
        <Center marginTop={"24px"}>
          <Box
            gap={"8px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"#ffffff"}
            paddingX={"16px"}
            borderRadius={"21.5px"}
          >
            <Box paddingY={"8px"}>
              <IconPhoneNuhun />
            </Box>
            <Box fontSize={"16px"} fontWeight={400} color={"#3B4856"}>
              +7570-0808
            </Box>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};
