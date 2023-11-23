import {
  IconReimburFive,
  IconReimburFour,
  IconReimburOne,
  IconReimburSix,
  IconReimburThree,
  IconReimburTwo,
} from "@/assets";
import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = {};

interface ConnectedBorderBoxProps {
  color: string;
  icon: ReactNode; // Use ReactNode as the type for the icon prop
  text: string; // Specify the type for the text prop
}
const ConnectedBorderBox = ({ color, icon, text }: ConnectedBorderBoxProps) => (
  <Box position="relative" textAlign="center">
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      color={color}
      fontSize="16px"
      fontWeight={700}
      fontStyle="normal"
      width="max"
      border={`2px solid ${color}`}
      margin="auto"
      paddingX="11px"
      paddingY="4px"
      borderRadius="full"
      zIndex={2}
    >
      {icon}
    </Box>
    <Box
      position="absolute"
      display="flex"
      bg={color}
      justifyContent="center"
      alignContent="center"
      width="12.1vw"
      height="2px"
      border={`1px solid ${color}`}
      top="33px"
      left="50%"
      zIndex={1}
      transform="translateX(-50%)"
    ></Box>
    <Box
      w="110px"
      fontSize="18px"
      fontWeight={400}
      fontStyle="normal"
      marginTop="16px"
    >
      {text}
    </Box>
  </Box>
);

export const Test = ({}: Props) => {
  return (
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
          <ConnectedBorderBox
            color="#66377B"
            icon={<IconReimburOne />}
            text="Ослын дуудлага хүлээн авах зөвлөгөө өгөх"
          />
          <ConnectedBorderBox
            color="#DD005C"
            icon={<IconReimburTwo />}
            text="Шуурхай албанаас ослын газарт үзлэг хийж баримтжуулах"
          />
          <ConnectedBorderBox
            color="#7EA120"
            icon={<IconReimburThree />}
            text="Нөхөн төлбөрийн баримтыг цахимаар хүлээн авах"
          />
          <ConnectedBorderBox
            color="#E88300"
            icon={<IconReimburFour />}
            text="Нөхөн төлбөрийн баримтанд хяналт дүгнэлт хийх"
          />
          <ConnectedBorderBox
            color="#2D998B"
            icon={<IconReimburFive />}
            text="Нөхөн төлбөрийн шийдвэр гаргах"
          />
          <ConnectedBorderBox
            color="#66377B"
            icon={<IconReimburSix />}
            text="Нөхөн төлбөрийн олголт"
          />
        </Box>
      </Box>
    </Box>
  );
};
