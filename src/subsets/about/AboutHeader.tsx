"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type Props = {};

export const AboutHeader = ({}: Props) => {
  const router = useRouter();
  const pathname = usePathname().split("/")[2];

  const pushCompany = () => {
    router.push("/about/company");
  };

  const pushStructure = () => {
    router.push("/about/structure");
  };

  const pushHistory = () => {
    router.push("/about/history");
  };

  const pushReport = () => {
    router.push("/about/report");
  };

  return (
    <Box
      position={"fixed"}
      zIndex={1}
      bg={"#ffffff"}
      paddingTop={"12vh"}
      overflowX="auto"
    >
      <Box
        paddingX={{ xl: "8.3vw", base: "3.72vw" }}
        paddingY={"20px"}
        width={"100vw"}
        height={"100%"}
        color={"#000000"}
        overflowX="auto"
      >
        <Flex
          fontSize={"16px"}
          fontWeight={600}
          fontStyle={"normal"}
          color={"#89919A"}
          gap={{ xl: "40px", base: "12px" }}
        >
          <Box
            position={"absolute"}
            width="101px"
            right={0}
            height="46px"
            flexShrink={0}
            bg="linear-gradient(270deg, #FFF 25.25%, rgba(255, 255, 255, 0.00) 100%)"
          ></Box>
          <Box
            color={pathname === "company" ? "#3B4856" : "#89919A"}
            fontWeight={600}
            fontSize={"18px"}
            display={{ xl: "block", base: "none" }}
            onClick={pushCompany}
            borderBottom={pathname === "company" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
          >
            <Text width={"max"}>Компани</Text>
          </Box>
          <Box
            color={pathname === "company" ? "#3B4856" : "#89919A"}
            fontWeight={600}
            fontSize={"18px"}
            display={{ xl: "none", base: "block" }}
            onClick={pushCompany}
            borderBottom={pathname === "company" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
          >
            <Text width={"max"}>Компани</Text>
          </Box>
          <Box
            color={pathname === "structure" ? "#3B4856" : "#89919A"}
            fontWeight={600}
            fontSize={"18px"}
            onClick={pushStructure}
            borderBottom={pathname === "structure" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
          >
            <Text width={"max"}>Бүтэц, удирдлага</Text>
          </Box>
          <Box
            color={pathname === "history" ? "#3B4856" : "#89919A"}
            fontWeight={600}
            fontSize={"18px"}
            borderBottom={pathname === "history" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
            onClick={pushHistory}
          >
            <Text width={"max"}>Түүхэн замнал</Text>
          </Box>
          <Box
            color={pathname === "report" ? "#3B4856" : "#89919A"}
            fontWeight={600}
            fontSize={"18px"}
            borderBottom={pathname === "report" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
            onClick={pushReport}
          >
            <Text width={"max"}>Тайлан, бичиг баримт</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
