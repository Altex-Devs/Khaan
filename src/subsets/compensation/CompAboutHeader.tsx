"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type Props = {};

export const CompAboutHeader = ({}: Props) => {
  const router = useRouter();
  const pathname = usePathname().split("/")[2];

  const pushCompany = () => {
    router.push("/compensation/risk");
  };

  const pushStructure = () => {
    router.push("/compensation/materials");
  };

  const pushHistory = () => {
    router.push("/compensation/reimbursement");
  };

  const pushCheck = () => {
    router.push("/compensation/check");
  };

  return (
    <Box position={"fixed"} zIndex={1} bg={"#ffffff"} paddingTop={"12vh"}>
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
            color={pathname === "risk" ? "#3B4856" : "#89919A"}
            fontWeight={600}
            fontSize={"18px"}
            onClick={pushCompany}
            borderBottom={pathname === "risk" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
          >
            <Text>Эрсдлийн үед авах арга хэмжээ</Text>
          </Box>
          <Box
            color={pathname === "materials" ? "#3B4856" : "#89919A"}
            fontWeight={600}
            fontSize={"18px"}
            onClick={pushStructure}
            borderBottom={pathname === "materials" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
          >
            <Text>Бүрдүүлэх материал</Text>
          </Box>
          <Box
            color={pathname === "reimbursement" ? "#3B4856" : "#89919A"}
            fontWeight={600}
            fontSize={"18px"}
            borderBottom={pathname === "reimbursement" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
            onClick={pushHistory}
          >
            <Text>Нөхөн төлбөрийн процесс</Text>
          </Box>
          <Box
            color={pathname === "check" ? "#3B4856" : "#89919A"}
            fontWeight={600}
            fontSize={"18px"}
            borderBottom={pathname === "check" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
            onClick={pushCheck}
          >
            <Text>Нөхөн төлбөр шалгах</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
