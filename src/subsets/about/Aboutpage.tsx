import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AboutFirst } from "./about_1";
import { AboutTwo } from "./about_2";

type Props = {};

export const Aboutpage = ({}: Props) => {
  const data = [
    {
      id: 1,
      title: "Компани",
    },
    {
      id: 2,
      title: "Бүтэц, удирдлага",
    },
    {
      id: 3,
      title: "Түүхэн замнал",
    },
    {
      id: 4,
      title: "Тайлан, бичиг баримт",
    },
  ];
  return (
    <Box  paddingTop={"8.98vh"}>
      <Box
        paddingX={"8.3vw"}
        paddingY={"20px"}
        width={"100vw"}
        height={"100%"}
        color={"#000000"}
      >
        <Flex fontSize={'16px'} fontWeight={600} fontStyle={'normal'} color={"#89919A"} gap={'40px'}>
          {data.map((item) => (
            <Box key={item.id}>{item.title}</Box>
          ))}
        </Flex>
        
      </Box>
      {/* <AboutFirst/> */}
      <AboutTwo/>
    </Box>
  );
};
