"use client";

import {
  IconReimburFive,
  IconReimburFour,
  IconReimburOne,
  IconReimburSix,
  IconReimburThree,
  IconReimburTwo,
} from "@/assets";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useIntl } from "react-intl";

type Props = {};

interface ConnectedBorderBoxProps {
  color: string;
  number: number;
  icon: ReactNode;
  text: string;
  bo: boolean;
  bob: boolean;
}
const ConnectedBorderBox = ({
  color,
  number,
  icon,
  text,
  bo,
  bob,
}: ConnectedBorderBoxProps) => (
  <Box textAlign="center">
    <Box
      display="flex"
      justifyContent={"center"}
      alignContent={"center"}
      color={color}
      margin={{ xl: "none", base: "auto" }}
      zIndex={{ xl: 2 }}
      position="relative"
    >
      {icon}
      {bob === true ? null : (
        <Box
          position="absolute"
          display="flex"
          bg={color}
          justifyContent="center"
          alignContent="center"
          width={{ xl: "12vw", base: "15vw" }}
          height="2px"
          border={`1px solid ${color}`}
          top={{ xl: "15px", base: "54px" }}
          right="3"
          zIndex={{ xl: 1 }}
          transform="translateX(101%)"
        ></Box>
      )}
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
      margin={"auto"}
      paddingX="11px"
      paddingY="4px"
      borderRadius="full"
      bg={"#F6F6F6"}
      zIndex={{ xl: 2 }}
    >
      {number}
      {bo === true ? null : (
        <Box
          position="absolute"
          display="flex"
          bg={color}
          justifyContent="center"
          alignContent="center"
          width={{ xl: "12vw", base: "45vw" }}
          height="2px"
          border={`1px solid ${color}`}
          top="15px"
          right="0"
          zIndex={{ xl: 1 }}
          transform="translateX(101%)"
        ></Box>
      )}
    </Box>

    <Box
      w={{ xl: "122px", base: "124px" }}
      fontSize="18px"
      fontWeight={400}
      fontStyle="normal"
      marginTop="16px"
      paddingTop={{ xl: "0px", base: "16px" }}
      color={"#3B4856"}
      margin={{ xl: "none", base: "auto" }}
      lineHeight={"24px"}
    >
      <Box dangerouslySetInnerHTML={{ __html: text }} />
    </Box>
  </Box>
);

export const CompReimbursement = ({}: Props) => {
  const intl = useIntl();
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });
  return (
    <>
      <Box
        backgroundColor={"#EBEDEE"}
        marginTop={{ xl: "125px" }}
        height={"100%"}
        color={"#4F5A67"}
        display={{ xl: "block", base: "none" }}
        paddingX={{ xl: "8.3vw", base: "3.72vw" }}
        ref={ref}
        paddingTop={{ xl: "60px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }} // Initial state of the animation
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animation that will play when the component mounts
          transition={{ duration: 3 }} // Duration of the animation
        >
          <Box paddingTop="80px" paddingBottom="252px">
            <Box display={"flex"} justifyContent={"space-around"}>
              <ConnectedBorderBox
                number={1}
                color="#66377B"
                icon={<IconReimburOne />}
                text={
                  intl.locale === "mn"
                    ? "Ослын дуудлага хүлээн авах зөвлөгөө <br/> өгөх"
                    : "Respond to emergency calls and provide advice"
                }
                bo={false}
                bob={true}
              />
              <ConnectedBorderBox
                number={2}
                color="#DD005C"
                icon={<IconReimburTwo />}
                bo={false}
                bob={true}
                text={
                  intl.locale === "mn"
                    ? "Шуурхай албанаас ослын газарт үзлэг хийж баримтжуулах"
                    : "The emergency service will inspect the accident site and prove it."
                }
              />
              <ConnectedBorderBox
                number={3}
                color="#7EA120"
                icon={<IconReimburThree />}
                bo={false}
                bob={true}
                text={
                  intl.locale === "mn"
                    ? "Нөхөн төлбөрийн баримтыг цахимаар хүлээн авах"
                    : "Receive the claim documents online."
                }
              />
              <ConnectedBorderBox
                number={4}
                color="#E88300"
                icon={<IconReimburFour />}
                bo={false}
                bob={true}
                text={
                  intl.locale === "mn"
                    ? "Нөхөн төлбөрийн баримтанд хяналт дүгнэлт хийх"
                    : "Processing claim documents."
                }
              />
              <ConnectedBorderBox
                number={5}
                color="#2D998B"
                icon={<IconReimburFive />}
                bo={false}
                bob={true}
                text={
                  intl.locale === "mn"
                    ? "Нөхөн төлбөрийн шийдвэр гаргах"
                    : "The insurer assesses the claim. The claim is either accepted or denied."
                }
              />
              <ConnectedBorderBox
                number={6}
                color="#66377B"
                icon={<IconReimburSix />}
                bo={true}
                bob={true}
                text={
                  intl.locale === "mn"
                    ? "Нөхөн төлбөрийн олголт"
                    : "Providing compensation."
                }
              />
            </Box>
          </Box>
        </motion.div>
      </Box>
      <Box
        backgroundColor={"#EBEDEE"}
        marginTop={{ xl: "125px" }}
        height={"100%"}
        display={{ xl: "none", base: "block" }}
        color={"#4F5A67"}
        paddingX={{ xl: "8.3vw", base: "3.72vw" }}
        paddingTop={{ xl: "60px", base: "180px" }}
      >
        <Box paddingTop="20px" paddingBottom={{ xl: "240px", base: "140px" }}>
          <SimpleGrid columns={2} spacing={10}>
            <Box>
              <ConnectedBorderBox
                number={1}
                color="#66377B"
                icon={<IconReimburOne />}
                text={
                  intl.locale === "mn"
                    ? "Ослын дуудлага хүлээн авах зөвлөгөө <br/> өгөх"
                    : "Respond to emergency calls and provide advice"
                }
                bo={true}
                bob={false}
              />
            </Box>
            <Box>
              <ConnectedBorderBox
                number={2}
                color="#DD005C"
                icon={<IconReimburTwo />}
                bo={true}
                bob={true}
                text={
                  intl.locale === "mn"
                    ? "Шуурхай албанаас ослын газарт үзлэг хийж баримтжуулах"
                    : "The emergency service will inspect the accident site and prove it."
                }
              />
            </Box>
            <Box>
              <ConnectedBorderBox
                number={3}
                color="#7EA120"
                icon={<IconReimburThree />}
                bo={true}
                bob={false}
                text={
                  intl.locale === "mn"
                    ? "Нөхөн төлбөрийн баримтыг цахимаар хүлээн авах"
                    : "Receive the claim documents online."
                }
              />
            </Box>
            <Box>
              <ConnectedBorderBox
                number={4}
                color="#E88300"
                icon={<IconReimburFour />}
                bo={true}
                bob={true}
                text={
                  intl.locale === "mn"
                    ? "Нөхөн төлбөрийн баримтанд хяналт дүгнэлт хийх"
                    : "Processing claim documents."
                }
              />
            </Box>
            <Box>
              <ConnectedBorderBox
                number={5}
                color="#2D998B"
                icon={<IconReimburFive />}
                bo={true}
                bob={false}
                text={
                  intl.locale === "mn"
                    ? "Нөхөн төлбөрийн шийдвэр гаргах"
                    : "The insurer assesses the claim. The claim is either accepted or denied."
                }
              />
            </Box>
            <Box>
              <ConnectedBorderBox
                number={6}
                color="#66377B"
                icon={<IconReimburSix />}
                bo={true}
                bob={true}
                text={
                  intl.locale === "mn"
                    ? "Нөхөн төлбөрийн олголт"
                    : "Providing compensation."
                }
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};
