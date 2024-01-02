"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { IconSpecial } from "@/assets";
import { motion } from "framer-motion";

type Props = {};

export const CompAboutHeader = ({}: Props) => {
  const router = useRouter();
  const pathname = usePathname().split("/")[2];
  const pathnext = usePathname().split("/");
  const [boxDisplay, setBoxDisplay] = useState("visible");
  const containerRef = useRef<HTMLDivElement | null>(null);

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
    router.push("/claim");
  };
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;

      // Determine the scroll value based on the current pathname
      let scrollValue = 0;
      switch (pathname) {
        case "risk":
          scrollValue = 150;
          break;
        case "materials":
          scrollValue = 350;
          break;
        case "reimbursement":
          scrollValue = 500;
          break;
        case "claim":
          scrollValue = 0;
          break;
        default:
          break;
      }

      // Scroll the container to the right
      container.scrollLeft = scrollValue;
    }
  }, [pathname]);

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
        width={{ xl: "100vw", base: "100vw" }}
        height={"100%"}
        color={"#000000"}
        display={"relative"}
        overflowX="scroll"
        ref={containerRef}
      >
        <Flex
          fontSize={"16px"}
          fontWeight={600}
          fontStyle={"normal"}
          color={"#89919A"}
          marginRight={"100px"}
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
            fontWeight={600}
            fontSize={"18px"}
            borderBottom={pathnext[1] === "claim" ? "2px" : "0"}
            borderColor={"#66377B"}
            cursor={"pointer"}
            position={"relative"}
            paddingRight={{ xl: "0px", base: "10px" }}
            onClick={pushCheck}
          >
            <Button
              color={pathnext[1] === "claim" ? "#3B4856" : "#89919A"}
              fontSize={16}
              padding={"0px"}
              colorScheme={"none"}
            >
              Нөхөн төлбөр шалгах
            </Button>
            <Box
              paddingRight={{ xl: "0px", base: "10px" }}
              position={"absolute"}
              top={0.8}
              right={-3}
            >
              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 0.5, // Total duration of the animation
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <IconSpecial />
              </motion.div>
            </Box>
          </Box>
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
              fontSize={16}
              padding={"0px"}
              colorScheme={"none"}
            >
              Эрсдэлийн үед авах арга хэмжээ
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
              fontSize={16}
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
              fontSize={16}
              padding={"0px"}
              colorScheme={"none"}
            >
              Нөхөн төлбөрийн процесс
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
