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
  number: number;
  icon: ReactNode; // Use ReactNode as the type for the icon prop
  text: string; // Specify the type for the text prop
  bo: boolean;
}
const ConnectedBorderBox = ({
  color,
  number,
  icon,
  text,
  bo,
}: ConnectedBorderBoxProps) => (
  <Box textAlign="center">
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      color={color}
      zIndex={2}
    >
      {icon}
    </Box>
    <Box
      position="relative"
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
      bg={"#F6F6F6"}
      zIndex={2}
    >
      {number}
      {bo === true ? null : (
        <Box
          position="absolute"
          display="flex"
          bg={color}
          justifyContent="center"
          alignContent="center"
          width="12vw"
          height="2px"
          border={`1px solid ${color}`}
          top="15px"
          right="0"
          zIndex={1}
          transform="translateX(101%)"
        ></Box>
      )}
    </Box>

    <Box
      w="122px"
      fontSize="18px"
      fontWeight={400}
      fontStyle="normal"
      marginTop="16px"
      color={"#3B4856"}
    >
      <Box dangerouslySetInnerHTML={{ __html: text }} />
    </Box>
  </Box>
);

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
            <ConnectedBorderBox
              number={1}
              color="#66377B"
              icon={<IconReimburOne />}
              text="Ослын дуудлага хүлээн авах зөвлөгөө <br> өгөх"
              bo={false}
            />
            <ConnectedBorderBox
              number={2}
              color="#DD005C"
              icon={<IconReimburTwo />}
              bo={false}
              text="Шуурхай албанаас ослын газарт үзлэг хийж баримтжуулах"
            />
            <ConnectedBorderBox
              number={3}
              color="#7EA120"
              icon={<IconReimburThree />}
              bo={false}
              text="Нөхөн төлбөрийн баримтыг цахимаар хүлээн авах"
            />
            <ConnectedBorderBox
              number={4}
              color="#E88300"
              icon={<IconReimburFour />}
              bo={false}
              text="Нөхөн төлбөрийн баримтанд хяналт дүгнэлт хийх"
            />
            <ConnectedBorderBox
              number={5}
              color="#2D998B"
              icon={<IconReimburFive />}
              bo={false}
              text="Нөхөн төлбөрийн шийдвэр гаргах"
            />
            <ConnectedBorderBox
              number={6}
              color="#66377B"
              icon={<IconReimburSix />}
              bo={true}
              text="Нөхөн төлбөрийн олголт"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
