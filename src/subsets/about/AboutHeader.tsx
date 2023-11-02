"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
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

  return (
    <Box paddingTop={"12vh"}>
      <Box
        paddingX={"8.3vw"}
        paddingY={"20px"}
        width={"100vw"}
        height={"100%"}
        color={"#000000"}
      >
        <Flex
          fontSize={"16px"}
          fontWeight={600}
          fontStyle={"normal"}
          color={"#89919A"}
          gap={"40px"}
        >
          <Box
            color={pathname === "company" ? "#3B4856" : "#89919A"}
            fontWeight={600}
            fontSize={"18px"}
            onClick={pushCompany}
            borderBottom={pathname === "company" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
          >
            <Text>Компани</Text>
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
            <Text>Бүтэц, удирдлага</Text>
          </Box>
          <Box
            color={"#89919A"}
            fontWeight={600}
            fontSize={"18px"}
            borderBottom={pathname === "history" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
            onClick={pushHistory}
          >
            <Text>Түүхэн замнал</Text>
          </Box>
          <Box
            color={"#89919A"}
            fontWeight={600}
            fontSize={"18px"}
            borderBottom={pathname === "report" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
          >
            <Text>Тайлан, бичиг баримт</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
