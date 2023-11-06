"use client";

import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { data } from "./citizenData";
import { IconArrowDown, IconCircleArrow, Shadow } from "@/assets";
import { useRouter } from "next/navigation";

export const CitizensPage = () => {
  const router = useRouter();

  const pushAbout = () => {
    router.push("/companies/companiesDetails");
  };
  return (
    <Box
      backgroundColor={"#F6F6F6"}
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
            <GridItem
              bgGradient="linear(257deg, #F9FAFB 1.28%, #FAFBFB 100%)"
              w={"100%"}
              key={e.id}
              boxShadow={"0px 0px 4px 0px #F1F1F1"}
              borderRadius={"16px"}
            >
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
                <Image src={e.icon.src} paddingBottom={"16px"} alt="icon" />
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
                <Box cursor={'pointer'} onClick={pushAbout}  display={"flex"} alignItems={"center"} gap={"8px"}>
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
