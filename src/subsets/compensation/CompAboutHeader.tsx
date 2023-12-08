"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type Props = {};

export const CompAboutHeader = ({}: Props) => {
  const router = useRouter();
  const pathname = usePathname().split("/")[2];
  const [boxDisplay, setBoxDisplay] = useState("visible");

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;

      if (window.scrollX > scrollThreshold) {
        setBoxDisplay("none");
      } else {
        setBoxDisplay("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position={"fixed"}
      zIndex={1}
      bg={"#ffffff"}
      overflowX="auto"
      paddingTop={"12vh"}
    >
      <Box
        paddingX={{ xl: "8.3vw", base: "3.72vw" }}
        paddingY={"20px"}
        width={"100vw"}
        height={"100%"}
        color={"#000000"}
        display={"relative"}
        overflowX="scroll"
      >
        <Flex
          fontSize={"16px"}
          fontWeight={600}
          fontStyle={"normal"}
          color={"#89919A"}
          paddingRight={"100px"}
          gap={{ xl: "40px", base: "12px" }}
        >
          <Box
            position={"absolute"}
            bg="linear-gradient(270deg, #FFF 25.25%, rgba(255, 255, 255, 0.00) 100%)"
            width={"101px"}
            right={0}
            display={"none"}
            height="46px"
            flexShrink={0}
            zIndex={10}
          ></Box>
          <Box
            color={pathname === "risk" ? "#3B4856" : "#89919A"}
            fontWeight={600}
            fontSize={"18px"}
            onClick={pushCompany}
            borderBottom={pathname === "risk" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
          >
            <Button
              color={pathname === "risk" ? "#3B4856" : "#89919A"}
              fontSize={"18px"}
              padding={"0px"}
              colorScheme={"none"}
            >
              Эрсдлийн үед авах арга хэмжээ
            </Button>
          </Box>
          <Box
            fontWeight={600}
            fontSize={"18px"}
            onClick={pushStructure}
            borderBottom={pathname === "materials" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
          >
            <Button
              color={pathname === "materials" ? "#3B4856" : "#89919A"}
              fontSize={"18px"}
              padding={"0px"}
              colorScheme={"none"}
            >
              Бүрдүүлэх материал
            </Button>
          </Box>
          <Box
            fontWeight={600}
            fontSize={"18px"}
            borderBottom={pathname === "reimbursement" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
            onClick={pushHistory}
          >
            <Button
              color={pathname === "reimbursement" ? "#3B4856" : "#89919A"}
              fontSize={"18px"}
              padding={"0px"}
              colorScheme={"none"}
            >
              Нөхөн төлбөрийн процесс
            </Button>
          </Box>
          <Box
            fontWeight={600}
            fontSize={"18px"}
            borderBottom={pathname === "check" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
            onClick={pushCheck}
          >
            <Button
              color={pathname === "check" ? "#3B4856" : "#89919A"}
              fontSize={"18px"}
              padding={"0px"}
              paddingRight={{ xl: "0px", base: "20px" }}
              colorScheme={"none"}
            >
              Нөхөн төлбөр шалгах
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
