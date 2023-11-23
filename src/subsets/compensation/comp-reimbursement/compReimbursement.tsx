import {
  IconReimburFive,
  IconReimburFour,
  IconReimburOne,
  IconReimburSix,
  IconReimburThree,
  IconReimburTwo,
} from "@/assets";

import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {};

export const CompReimbursement = ({}: Props) => {
  return (
    <>
      <Box
        backgroundColor={"#F6F6F6"}
        marginTop={"125px"}
        height={"100%"}
        color={"#4F5A67"}
        paddingX={"8.3vw"}
        paddingTop={"60px"}
      >
        <Box paddingTop="80px" paddingBottom="252px">
          <Box display={"flex"} justifyContent={"space-around"}>
            <Box textAlign={"center"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <IconReimburOne />
              </Box>
              <Box position={"relative"} paddingY={"16px"}>
                <Box
                  color={"#66377B"}
                  fontSize={"16px"}
                  fontWeight={700}
                  fontStyle={"normal"}
                  width={"max"}
                  border={"2px solid #66377B"}
                  margin={"auto"}
                  paddingX={"11px"}
                  paddingY={"4px"}
                  borderRadius={"full"}
                >
                  1
                  <Box
                    position={"absolute"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignContent={"center"}
                    width={"206px"}
                    height={"2px"}
                    border={"2px solid Black"}
                    top={"32px"}
                    left={"70px"}
                  ></Box>
                </Box>
              </Box>
              <Box
                w={"110px"}
                fontSize={"18px"}
                fontWeight={400}
                fontStyle={"normal"}
              >
                Ослын дуудлага хүлээн авах зөвлөгөө өгөх
              </Box>
            </Box>
            <Box textAlign={"center"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <IconReimburTwo />
              </Box>
              <Box paddingY={"16px"}>
                <Box
                  color={"#DD005C"}
                  fontSize={"16px"}
                  fontWeight={700}
                  fontStyle={"normal"}
                  width={"max"}
                  border={"2px solid #DD005C"}
                  margin={"auto"}
                  paddingX={"11px"}
                  paddingY={"4px"}
                  borderRadius={"full"}
                >
                  2
                </Box>
              </Box>
              <Box
                w={"122px"}
                fontSize={"18px"}
                fontWeight={400}
                fontStyle={"normal"}
              >
                Шуурхай албанаас ослын газарт үзлэг хийж баримтжуулах
              </Box>
            </Box>
            <Box textAlign={"center"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <IconReimburThree />
              </Box>
              <Box marginY={"16px"}>
                <Box
                  color={"#7EA120"}
                  fontSize={"16px"}
                  fontWeight={700}
                  fontStyle={"normal"}
                  width={"max"}
                  border={"2px solid #7EA120"}
                  margin={"auto"}
                  paddingX={"11px"}
                  paddingY={"4px"}
                  borderRadius={"full"}
                >
                  3
                </Box>
              </Box>
              <Box
                w={"110px"}
                fontSize={"18px"}
                fontWeight={400}
                fontStyle={"normal"}
              >
                Нөхөн төлбөрийн баримтыг цахимаар хүлээн авах
              </Box>
            </Box>
            <Box textAlign={"center"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <IconReimburFour />
              </Box>
              <Box paddingY={"16px"}>
                <Box
                  color={"#E88300"}
                  fontSize={"16px"}
                  fontWeight={700}
                  fontStyle={"normal"}
                  width={"max"}
                  border={"2px solid #E88300"}
                  margin={"auto"}
                  paddingX={"11px"}
                  paddingY={"4px"}
                  borderRadius={"full"}
                >
                  4
                </Box>
              </Box>
              <Box
                w={"110px"}
                fontSize={"18px"}
                fontWeight={400}
                fontStyle={"normal"}
              >
                Нөхөн төлбөрийн баримтанд хяналт дүгнэлт хийх
              </Box>
            </Box>
            <Box textAlign={"center"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <IconReimburFive />
              </Box>
              <Box paddingY={"16px"}>
                <Box
                  color={"#2D998B"}
                  fontSize={"16px"}
                  fontWeight={700}
                  fontStyle={"normal"}
                  width={"max"}
                  border={"2px solid #2D998B"}
                  margin={"auto"}
                  paddingX={"11px"}
                  paddingY={"4px"}
                  borderRadius={"full"}
                >
                  5
                </Box>
              </Box>
              <Box
                w={"110px"}
                fontSize={"18px"}
                fontWeight={400}
                fontStyle={"normal"}
              >
                Нөхөн төлбөрийн шийдвэр гаргах
              </Box>
            </Box>
            <Box textAlign={"center"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <IconReimburSix />
              </Box>
              <Box paddingY={"16px"}>
                <Box
                  color={"#66377B"}
                  fontSize={"16px"}
                  fontWeight={700}
                  fontStyle={"normal"}
                  width={"max"}
                  border={"2px solid #66377B"}
                  margin={"auto"}
                  paddingX={"11px"}
                  paddingY={"4px"}
                  borderRadius={"full"}
                >
                  6
                </Box>
              </Box>
              <Box
                w={"110px"}
                fontSize={"18px"}
                fontWeight={400}
                fontStyle={"normal"}
              >
                Нөхөн төлбөрийн олголт
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
