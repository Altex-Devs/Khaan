"use client";

import { Excellence, GlobalBank, IconAfaq } from "@/assets";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import React from "react";

type Props = {};

export const AboutQuality = ({}: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust this threshold as needed
    triggerOnce: true,
  });

  return (
    <Box
      ref={ref}
      marginBottom={"100px"}
      height={{ xl: "676px", base: "100%" }}
      width={"100%"}
      backgroundColor={"#EBEDEE"}
      paddingX={{ xl: "8.3vw", base: "3.72vw" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Box
          fontSize={"24px"}
          fontWeight={700}
          fontStyle={"normal"}
          textTransform={"uppercase"}
          color={"#3B4856"}
          display={"flex"}
          justifyContent={"center"}
          paddingTop={{ xl: "80px", base: "40px" }}
          paddingBottom={"44px"}
        >
          үйлчилгээний чанар
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state of the animation
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }} // Duration of the animation
      >
        <Box
          display={{ xl: "flex", base: "block" }}
          textAlign={"center"}
          justifyContent={"center"}
          gap={"25px"}
          marginBottom={"80px"}
        >
          <Box flex={1} paddingBottom={{ xl: "0px", base: "40px" }}>
            <Box
              paddingBottom={{ xl: "40px", base: "24px" }}
              display={"flex"}
              justifyContent={"center"}
            >
              <IconAfaq />
            </Box>
            <Box
              fontSize={"24px"}
              fontStyle={"normal"}
              fontWeight={400}
              color={"#3B4856"}
              width={"100%"}
              lineHeight={"32px"}
            >
              ISO 9001:2015 Монголын даатгалын салбарт Олон улсын чанарын
              удирдлагын тогтолцоог анхлан хэрэгжүүлэгч
            </Box>
          </Box>
          <Box flex={1} paddingBottom={{ xl: "0px", base: "40px" }}>
            <Box
              display={"flex"}
              paddingBottom={{ xl: "40px", base: "24px" }}
              justifyContent={"center"}
            >
              {" "}
              <GlobalBank />
            </Box>
            <Box
              fontSize={"24px"}
              fontStyle={"normal"}
              fontWeight={400}
              color={"#3B4856"}
              width={"100%"}
              lineHeight={"32px"}
            >
              Олон улсын санхүүгийн салбарын чиг хандлагыг тодорхойлогч “Global
              banking and Finance review” сэтгүүлээс 2022 оны “Монголын хамгийн
              хурдацтэй өсөж буй даатгалын компани” шагнал
            </Box>
          </Box>
          <Box flex={1} paddingBottom={{ xl: "0px", base: "45px" }}>
            <Box
              display={"flex"}
              paddingBottom={{ xl: "40px", base: "24px" }}
              justifyContent={"center"}
            >
              <Excellence />
            </Box>
            <Box
              fontSize={"24px"}
              fontStyle={"normal"}
              fontWeight={400}
              color={"#3B4856"}
              width={"100%"}
              lineHeight={"32px"}
            >
              Сингапурын “Service Excellence” буюу “Үйлчилгээний төгөлдөршил”
              стандартыг салбартаа анхлан нэвтрүүлж харилцагчийн үйлчилгээний
              цогц төслийг хэрэгжүүлэгч
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};
