"use client";

import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { data } from "./companiesData";
import { IconArrowDown, IconCircleArrow, Shadow } from "@/assets";

export const CompaniesPage = () => {
  return (
    <Box
      paddingBottom={"18vh"}
      paddingTop={"20vh"}
      paddingX={"8.3vw"}
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Grid templateColumns="repeat(3, 1fr)" gap={"24px"} width={"100%"}>
        {data.map((e) => {
          return (
            <GridItem key={e.id} boxShadow={"0px 0px 4px 0px #F1F1F1"}>
              <Box
                height={"23vh"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                paddingX={"34px"}
                paddingY={"24px"}
                position={"relative"}
              >
                <Box position={"absolute"} left={0} top={0}>
                  <Shadow color={e.color} />
                </Box>
                <Image src={e.icon.src} paddingBottom={"16px"} />
                <Text
                  color={"#3B4856"}
                  lineHeight={"20px"}
                  fontWeight={500}
                  fontSize={"14px"}
                  textAlign={"center"}
                  paddingBottom={"44px"}
                  className="uppercase"
                >
                  {e.title}
                </Text>
                <Box display={"flex"} alignItems={"center"} gap={"8px"}>
                  <Box>
                    <IconCircleArrow />
                  </Box>
                  <Text fontSize={"14px"} fontWeight={600} color={"#66377B"}>
                    Дэлгэрэнгүй
                  </Text>
                </Box>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
      <Button
        colorScheme="outlineButton"
        variant="outline"
        color={"#66377B"}
        fontSize={"16px"}
        fontWeight={600}
        borderRadius={"64px"}
        display={"flex"}
        gap={"8px"}
      >
        <IconArrowDown />
        Бүгдийг харах
      </Button>
    </Box>
  );
};
