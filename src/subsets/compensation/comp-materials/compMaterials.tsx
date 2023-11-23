import { Box, Center, Grid, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { materialsData } from "./materialsData";

type Props = {};

export const CompMaterials = ({}: Props) => {
  return (
    <Box
      backgroundColor={"#F6F6F6"}
      marginTop={"125px"}
      height={"100%"}
      color={"#4F5A67"}
      paddingX={"8.3vw"}
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
                  dangerouslySetInnerHTML={{ __html: item.title }}
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
    </Box>
  );
};
