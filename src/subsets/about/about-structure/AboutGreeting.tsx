"use client";

import { Box, Image } from "@chakra-ui/react";
import React from "react";
import tuzImage from "../../../assets/pics/tuzGreetings.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

export const AboutGreeting = ({}: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });
  return (
    <Box
      ref={ref}
      paddingX={{ xl: "8.3vw", base: "3.72vw" }}
      paddingY={{ xl: "64px", base: "40px" }}
      width={"100vw"}
    >
      <Box
        display={{ xl: "flex", base: "block" }}
        gap={"23px"}
        justifyContent={"center"}
      >
        <Box position={"relative"}>
          <Image
            borderRadius={"8px"}
            width={{ xl: "485px", base: "full" }}
            h={{ xl: "323px", base: "full" }}
            src={`${tuzImage.src}`}
            alt=""
          />
          <Box
            width={"162px"}
            height={"79px"}
            bg="rgba(102, 55, 123, 0.50)"
            borderRadius={"4px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            bottom={"16px"}
            color={"#ffffff"}
            right={"16px"}
          >
            <Box>
              <Box
                fontSize={"16px"}
                fontWeight={700}
                textTransform={"uppercase"}
              >
                ж. баярсайхан
              </Box>
              <Box fontSize={"16px"} fontWeight={400} fontStyle={"normal"}>
                ТУЗ-ийн дарга
              </Box>
            </Box>
          </Box>
        </Box>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Box width={{ xl: "690px" }}>
            <Box
              paddingBottom={"16px"}
              paddingTop={{ xl: "19px", base: "24px" }}
              textTransform={"uppercase"}
              fontSize={{ xl: "24px", base: "1.2rem" }}
              fontWeight={700}
              color={"#3B4856"}
            >
              мэндчилгээ
            </Box>
            <Box
              fontSize={"16px"}
              fontStyle={"normal"}
              fontWeight={400}
              color={"#3B4856"}
            >
              <Box lineHeight={"20px"} paddingBottom={"10px"}>
                Эрхэм хүндэт харилцагчид, бизнесийн түншүүд Та бүхэндээ ажлын
                амжилт, сайн сайхныг хүсэн мэндчилж байна.Хаан даатгал нь
                санхүүгийн зах зээлд сүүлийн үеийн технологи, шинэ стандартыг
                нэвтрүүлэх замаар харилцагчдадаа түргэн шуурхай үйлчилгээг
                найдвартайгаар хүргэхийн тулд үйлчилгээндээ дижитал суваг,
                технологийн боломжуудыг нэвтрүүлэн үйлчлүүлэгчдийнхээ хэрэгцээ,
                шаардлагыг цаг хугацаа, орон зай хамаарахгүйгээр цаг алдалгүй
                шийдвэрлэж байна.
                <br />
                <br />
                Бид ирэх жилүүдэд стратегийн түвшинд үйл ажиллагаагаа сайжруулан
                нээлттэй ил тод байх зарчмаа ямагт баримтлан ажиллах болно.
                Өнгөрсөн он жилүүдэд бүх цаг үед хамт байж нэг зорилго дор
                нэгдэж чадсан амжилт бүтээлийн оргил өөд тэмүүлж буй Төлөөлөн
                удирдах зөвлөлийн гишүүд болон хувьцаа эзэмшигчид, Хаан
                даатгалын нийт ажилтнууддаа гүнээ талархал илэрхийлье.
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};
