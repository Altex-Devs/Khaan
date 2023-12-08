"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type Props = {};

export const AboutHeader = ({}: Props) => {
  const router = useRouter();
  const pathname = usePathname().split("/")[2];
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;

      // Determine the scroll value based on the current pathname
      let scrollValue = 0;
      switch (pathname) {
        case "company":
          scrollValue = 0;
          break;
        case "structure":
          scrollValue = 180;
          break;
        case "history":
          scrollValue = 300;
          break;
        case "report":
          scrollValue = 480;
          break;
        default:
          break;
      }

      // Scroll the container to the right
      container.scrollLeft = scrollValue;
    }
  }, [pathname]);
  return (
    <Box position={"fixed"} zIndex={1} bg={"#ffffff"} paddingTop={"12vh"}>
      <Box
        paddingX={{ xl: "8.3vw", base: "3.72vw" }}
        paddingY={"20px"}
        width={{ xl: "100vw", base: "450px" }}
        height={"100%"}
        color={"#000000"}
        overflowX="scroll"
        ref={containerRef}
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
            right={0}
            width={"101px"}
            height="46px"
            flexShrink={0}
            bg="linear-gradient(270deg, #FFF 25.25%, rgba(255, 255, 255, 0.00) 100%)"
          ></Box>
          <Box
            color={pathname === "company" ? "#3B4856" : "#89919A"}
            fontWeight={600}
            display={{ xl: "block", base: "none" }}
            onClick={pushCompany}
            borderBottom={pathname === "company" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
          >
            <Button
              colorScheme={"none"}
              padding={"0px"}
              color={pathname === "company" ? "#3B4856" : "#89919A"}
              fontSize={"18px"}
            >
              Компани
            </Button>
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
            <Button
              colorScheme={"none"}
              color={pathname === "company" ? "#3B4856" : "#89919A"}
              fontSize={"18px"}
              padding={"0px"}
            >
              Компани
            </Button>
          </Box>
          <Box
            color={pathname === "structure" ? "#3B4856" : "#89919A"}
            fontWeight={600}
            fontSize={"18px"}
            onClick={pushStructure}
            borderBottom={pathname === "structure" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
            padding={"0px"}
          >
            <Button
              colorScheme={"none"}
              color={pathname === "structure" ? "#3B4856" : "#89919A"}
              fontSize={"18px"}
              padding={"0px"}
            >
              Бүтэц, удирдлага
            </Button>
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
            <Button
              colorScheme={"none"}
              padding={"0px"}
              color={pathname === "history" ? "#3B4856" : "#89919A"}
              fontSize={"18px"}
            >
              Түүхэн замнал
            </Button>
          </Box>
          <Box
            color={pathname === "report" ? "#3B4856" : "#89919A"}
            fontWeight={600}
            borderBottom={pathname === "report" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
            onClick={pushReport}
          >
            <Button
              colorScheme={"none"}
              padding={"0px"}
              paddingRight={{ xl: "0px", base: "80px" }}
              color={pathname === "report" ? "#3B4856" : "#89919A"}
              fontSize={"18px"}
              marginRight={{ xl: "0px", base: "40px" }}
            >
              Тайлан, бичиг баримт
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
