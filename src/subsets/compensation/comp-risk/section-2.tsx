"use client";

import {
  IconNuhunFour,
  IconNuhunOne,
  IconNuhunThree,
  IconNuhunTwo,
} from "@/assets";
import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import compRiskOne from "../../../assets/pics/comp-risk-1.png";
import Image from "next/image";

type Props = {};

export const SectionTwo = ({}: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });
  return (
    <Box
      ref={ref}
      backgroundColor={"#EBEDEE"}
      paddingX={{ xl: "8.3vw", base: "3.72vw" }}
      paddingTop={"66px"}
      width={"100vw"}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }} // Initial state of the animation
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animation that will play when the component mounts
        transition={{ duration: 3 }} // Duration of the animation
      >
        <Box color={"#3B4856"} display={{ xl: "flex", base: "none" }}>
          <Box
            bg={"#FCE6EF"}
            width={"20.83vw"}
            paddingX={"16px"}
            paddingTop={"64px"}
            paddingBottom={"6.23vh"}
            position={"relative"}
          >
            <Center>
              <Box position={"absolute"} top="-4.935vh">
                <IconNuhunTwo />
              </Box>
            </Center>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box textAlign="center">
                <Center
                  paddingBottom={"16px"}
                  fontWeight={700}
                  fontSize="18px"
                  color="#3B4856"
                  lineHeight={"18px"}
                >
                  Аюулгүй байдлыг хангах
                </Center>
                <Center fontSize="16px" fontWeight={400} lineHeight={"18px"}>
                  Хохирлыг ихэсгэхгүй байх, цаашид гарч болзошгүй эрсдэлийг
                  бууруулах арга хэмжээ авна.
                </Center>
              </Box>
            </Box>
          </Box>
          <Box
            bg={"#F2F6E9"}
            width={"20.83vw"}
            paddingX={"16px"}
            paddingTop={"64px"}
            paddingBottom={"6.23vh"}
            position={"relative"}
          >
            <Center>
              <Box position={"absolute"} top="-38px">
                <IconNuhunThree />
              </Box>
            </Center>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box textAlign="center">
                <Center
                  paddingBottom={"16px"}
                  fontWeight={700}
                  fontSize="18px"
                  color="#3B4856"
                  lineHeight={"18px"}
                >
                  Гэмтэж бэртсэн хүмүүст туслах
                </Center>
                <Center fontSize="16px" fontWeight={400} lineHeight={"18px"}>
                  Өөрийн болон бусдын эрүүл мэнд хамгийн чухал тул анхны тусламж
                  үзүүлж, шаардлагатай бол эмнэлгийн яаралтай тусламж (103)
                  дуудна.
                </Center>
              </Box>
            </Box>
          </Box>
          <Box
            bg={"#FDF3E6"}
            width={"20.83vw"}
            paddingX={"1.11vw"}
            paddingTop={"64px"}
            paddingBottom={"6.23vh"}
            position={"relative"}
          >
            <Center>
              <Box position={"absolute"} top="-38px">
                <IconNuhunFour />
              </Box>
            </Center>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box textAlign="center">
                <Center
                  paddingBottom={"16px"}
                  fontWeight={700}
                  fontSize="18px"
                  color="#3B4856"
                  lineHeight={"18px"}
                >
                  Мэдэгдэх
                </Center>
                <Box lineHeight={"18px"} fontStyle="normal">
                  <Center fontSize="16px" fontWeight={400} lineHeight={"18px"}>
                    Холбогдох мэргэжлийн байгуулага (ЗЦГ, ОБЕГ, контор, ОСНАА)-
                    д хандах
                  </Center>
                  <Center
                    paddingTop={"16px"}
                    fontSize="16px"
                    fontWeight={400}
                    lineHeight={"18px"}
                  >
                    Шуурхай алба болон Хаан Даатгал ХХК-д Улаанбаатар хотод 24
                    цагийн дотор, хөдөө, орон нутагт 72 цагийн дотор мэдэгдэж,
                    бүртгүүлэх.
                  </Center>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            bg={"#EAF5F3"}
            width={"20.83vw"}
            paddingX={"16px"}
            paddingTop={"64px"}
            paddingBottom={"6.23vh"}
            position={"relative"}
          >
            <Center>
              <Box position={"absolute"} top="-38px">
                <IconNuhunOne />
              </Box>
            </Center>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box textAlign="center">
                <Center
                  paddingBottom={"16px"}
                  fontWeight={700}
                  fontSize="18px"
                  color="#3B4856"
                  lineHeight={"18px"}
                >
                  Ослыг баримтжуулах
                </Center>
                <Center fontSize="16px" fontWeight={400} lineHeight={"18px"}>
                  Ослын үеийн орчин нөхцөл, тохиолдыг харуулсан 7-8 зураг авах,
                  1-2 минутын дүрс бичлэг хийх
                </Center>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
      <Box color={"#3B4856"} display={{ base: "block", xl: "none" }}>
        <Box
          bg={"#FCE6EF"}
          width={{ xl: "20.83vw" }}
          height={"260px"}
          paddingX={"16px"}
          paddingTop={"64px"}
          paddingBottom={"6.23vh"}
          position={"relative"}
        >
          <Center>
            <Box position={"absolute"} top="-4.935vh">
              <IconNuhunTwo />
            </Box>
          </Center>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box textAlign="center">
              <Center
                paddingBottom={"16px"}
                fontWeight={700}
                fontSize={{ xl: "18px", base: "16px" }}
                color="#3B4856"
                lineHeight={"18px"}
              >
                Аюулгүй байдлыг хангах
              </Center>
              <Center
                fontSize={{ xl: "16px", base: "14px" }}
                fontWeight={400}
                lineHeight={"18px"}
              >
                Хохирлыг ихэсгэхгүй байх, цаашид гарч болзошгүй эрсдэлийг
                бууруулах арга хэмжээ авна.
              </Center>
            </Box>
          </Box>
        </Box>
        <Box
          bg={"#F2F6E9"}
          width={{ xl: "20.83vw" }}
          paddingX={"16px"}
          height={"260px"}
          paddingTop={"64px"}
          paddingBottom={"6.23vh"}
          position={"relative"}
        >
          <Center>
            <Box position={"absolute"} top="-38px">
              <IconNuhunThree />
            </Box>
          </Center>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box textAlign="center">
              <Center
                paddingBottom={"16px"}
                fontWeight={700}
                fontSize="18px"
                color="#3B4856"
                lineHeight={"18px"}
              >
                Гэмтэж бэртсэн хүмүүст туслах
              </Center>
              <Center fontSize="16px" fontWeight={400} lineHeight={"18px"}>
                Өөрийн болон бусдын эрүүл мэнд хамгийн чухал тул анхны тусламж
                үзүүлж, шаардлагатай бол эмнэлгийн яаралтай тусламж (103)
                дуудна.
              </Center>
            </Box>
          </Box>
        </Box>
        <Box
          bg={"#FDF3E6"}
          width={{ xl: "20.83vw" }}
          paddingX={"1.11vw"}
          paddingTop={"64px"}
          height={"260px"}
          paddingBottom={"6.23vh"}
          position={"relative"}
        >
          <Center>
            <Box position={"absolute"} top="-38px">
              <IconNuhunFour />
            </Box>
          </Center>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box textAlign="center">
              <Center
                paddingBottom={"16px"}
                fontWeight={700}
                fontSize="18px"
                color="#3B4856"
                lineHeight={"18px"}
              >
                Мэдэгдэх
              </Center>
              <Box lineHeight={"18px"} fontStyle="normal">
                <Center fontSize="16px" fontWeight={400} lineHeight={"18px"}>
                  Холбогдох мэргэжлийн байгуулага (ЗЦГ, ОБЕГ, контор, ОСНАА)- д
                  хандах
                </Center>
                <Center
                  paddingTop={"16px"}
                  fontSize="16px"
                  fontWeight={400}
                  lineHeight={"18px"}
                >
                  Шуурхай алба болон Хаан Даатгал ХХК-д Улаанбаатар хотод 24
                  цагийн дотор, хөдөө, орон нутагт 72 цагийн дотор мэдэгдэж,
                  бүртгүүлэх.
                </Center>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          bg={"#EAF5F3"}
          width={{ xl: "20.83vw" }}
          paddingX={"16px"}
          height={"260px"}
          paddingTop={"64px"}
          paddingBottom={"6.23vh"}
          position={"relative"}
        >
          <Center>
            <Box position={"absolute"} top="-38px">
              <IconNuhunOne />
            </Box>
          </Center>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box textAlign="center">
              <Center
                paddingBottom={"16px"}
                fontWeight={700}
                fontSize="18px"
                color="#3B4856"
                lineHeight={"18px"}
              >
                Ослыг баримтжуулах
              </Center>
              <Center fontSize="16px" fontWeight={400} lineHeight={"18px"}>
                Ослын үеийн орчин нөхцөл, тохиолдыг харуулсан 7-8 зураг авах,
                1-2 минутын дүрс бичлэг хийх
              </Center>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
