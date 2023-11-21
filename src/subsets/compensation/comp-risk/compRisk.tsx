import { Box, Center } from "@chakra-ui/react";
import React from "react";
type Props = {};

export const CompRisk = ({}: Props) => {
  return (
    <>
      <Box
        marginTop={"170px"}
        display={"flex"}
        flexDirection={"column"}
        color={"#4F5A67"}
        paddingTop={"80px"}
        paddingBottom={"150px"}
      >
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
      </Box>
    </>
  );
};
