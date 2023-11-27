"use client";

import { IconNuhunOne } from "@/assets";
import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

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
      paddingX={"8.3vw"}
      paddingTop={"66px"}
      width={"100vw"}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }} // Initial state of the animation
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animation that will play when the component mounts
        transition={{ duration: 3 }} // Duration of the animation
      >
        <Box color={"#3B4856"} display={"flex"}>
          <Box
            bg={"#FFFFFF"}
            width={"20.83vw"}
            paddingX={"16px"}
            paddingTop={"64px"}
            paddingBottom={"156px"}
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
                >
                  Аюулгүй байдлыг хангах
                </Center>
                <Center fontSize="16px" fontWeight={400}>
                  Хохирлыг ихэсгэхгүй байх, цаашид гарч болзошгүй эрсдэлийг
                  бууруулах арга хэмжээ авна.
                </Center>
              </Box>
            </Box>
          </Box>
          <Box
            bg={"#F0EBF2"}
            width={"20.83vw"}
            paddingX={"16px"}
            paddingTop={"64px"}
            paddingBottom={"156px"}
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
                >
                  Гэмтэж бэртсэн хүмүүст туслах
                </Center>
                <Center fontSize="16px" fontWeight={400}>
                  Өөрийн болон бусдын эрүүл мэнд хамгийн чухал тул анхны тусламж
                  үзүүлж, шаардлагатай бол эмнэлгийн яаралтай тусламж (103)
                  дуудна.
                </Center>
              </Box>
            </Box>
          </Box>
          <Box
            bg={"#FFFFFF"}
            width={"20.83vw"}
            paddingX={"1.11vw"}
            paddingTop={"64px"}
            paddingBottom={"156px"}
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
                >
                  Мэдэгдэх
                </Center>
                <Box lineHeight={"18px"} fontStyle="normal">
                  <Center fontSize="16px" fontWeight={400}>
                    Холбогдох мэргэжлийн байгуулага (ЗЦГ, ОБЕГ, контор, ОСНАА)-
                    д хандах
                  </Center>
                  <Center paddingTop={"16px"} fontSize="16px" fontWeight={400}>
                    Шуурхай алба болон Хаан Даатгал ХХК-д Улаанбаатар хотод 24
                    цагийн дотор, хөдөө, орон нутагт 72 цагийн дотор мэдэгдэж,
                    бүртгүүлэх.
                  </Center>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            bg={"#F0EBF2"}
            width={"20.83vw"}
            paddingX={"16px"}
            paddingTop={"64px"}
            paddingBottom={"156px"}
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
                >
                  Ослыг баримтжуулах
                </Center>
                <Center fontSize="16px" fontWeight={400}>
                  Ослын үеийн орчин нөхцөл, тохиолдыг харуулсан 7-8 зураг авах,
                  1-2 минутын дүрс бичлэг хийх
                </Center>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};
