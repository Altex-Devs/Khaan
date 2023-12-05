"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type Props = {};

export const CompAboutHeader = ({}: Props) => {
  const [shouldHideBox, setShouldHideBox] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollX = window.scrollX || window.pageXOffset;
      setShouldHideBox(scrollX >= 100);
    };
    console.log("window:", window.scrollX);
    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const pushCheck = () => {
    router.push("/compensation/check");
  };

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
            display={shouldHideBox ? "none" : "block"}
            flexShrink={0}
            bg="linear-gradient(270deg, #FFF 25.25%, rgba(255, 255, 255, 0.00) 100%)"
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
            <Text width={"max"}>Эрсдлийн үед авах арга хэмжээ</Text>
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
            <Text width={"max"}>Бүрдүүлэх материал</Text>
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
            <Text width={"max"}>Нөхөн төлбөрийн процесс</Text>
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
