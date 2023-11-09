"use client";

import { Box, Image } from "@chakra-ui/react";
import React from "react";
import bayraa from "../../../assets/pics/BoardOfDirectors/bayarsaihn.png";
import enhbileg from "../../../assets/pics/BoardOfDirectors/enhbileg.png";
import mendee from "../../../assets/pics/BoardOfDirectors/mendbayar.png";
import buyan from "../../../assets/pics/BoardOfDirectors/bayantogo.png";
import ragchaa from "../../../assets/pics/BoardOfDirectors/ragchaa.png";
import tuwshin from "../../../assets/pics/BoardOfDirectors/tuvshintugs.png";
import javhaa from "../../../assets/pics/BoardOfDirectors/javhlan.png";
import huyag from "../../../assets/pics/BoardOfDirectors/ganhuyag.png";
import orgil from "../../../assets/pics/BoardOfDirectors/orgil.png";
import enhjav from "../../../assets/pics/BoardOfDirectors/enhjav.png";
import ulziimaa from "../../../assets/pics/BoardOfDirectors/ulziimaa.png";
import nyambayar from "../../../assets/pics/BoardOfDirectors/nymbayar.png";
import hurelzuchukuu from "../../../assets/pics/BoardOfDirectors/hurel.png";
import uran from "../../../assets/pics/BoardOfDirectors/uranshagai.png";
import orgil1 from "../../../assets/pics/BoardOfDirectors/orgil1.png"
import enhjav1 from "../../../assets/pics/BoardOfDirectors/jay1.png"
import ulziimaa1 from "../../../assets/pics/BoardOfDirectors/ulziimaa1.png"
import nyambayar1 from "../../../assets/pics/BoardOfDirectors/nyambayar1.png"
import hurelzuchukuu1 from "../../../assets/pics/BoardOfDirectors/hurelchuluun1.png"
import otgon1 from "../../../assets/pics/BoardOfDirectors/otgonchimeg1.png"
import tseren1 from "../../../assets/pics/BoardOfDirectors/byamba1.png"
import uran1 from "../../../assets/pics/BoardOfDirectors/uranshagai1.png"


import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

export const AboutBoardOfDirectors = ({}: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });
  const data1 = [
    {
      role: "туз-ийн дарга",
      image: bayraa,
      name: "Ж. Баярсайхан",
    },
    {
      role: "туз-ийн гишүүн",
      image: enhbileg,
      name: "Г. Энхбилэг",
    },
    {
      role: "туз-ийн гишүүн",
      image: mendee,
      name: "А. Мэндбаяр",
    },
    {
      role: "туз-ийн хараат бус гишүүн",
      image: buyan,
      name: "Б. Буянтогос",
    },
    {
      role: "туз-ийн хараат бус гишүүн",
      image: ragchaa,
      name: "Г. Рагчаасүрэн",
    },
    {
      role: "туз-ийн хараат бус гишүүн",
      image: tuwshin,
      name: "Б. Түвшинтөгс",
    },
    {
      role: "туз-ийн хараат бус гишүүн",
      image: javhaa,
      name: "Н. Жавхлан",
    },
    {
      role: "туз-ийн хараат бус гишүүн",
      image: huyag,
      name: "Ж. Ганхуяг",
    },
  ];
  const data2 = [
    {
      role: "Гүйцэтгэх захирал",
      image: orgil1,
      name: "Л. Оргил",
    },
    {
      role: "тэргүүн дэд захирал",
      image: enhjav1,
      name: "Ц. Энхжавхлан",
    },
    {
      role: "иргэдийн даатгалын газрын захирал",
      image: ulziimaa1,
      name: "Б. Өлзиймаа",
    },
    {
      role: "байгууллагын даатгалын хэлтсийн захирал",
      image: nyambayar1,
      name: "Х. Нямбаяр",
    },
    {
      role: "эрсдэлийн удирдлагын газрын захирал",
      image: hurelzuchukuu1,
      name: "О. Хүрэлчулуун",
    },
    {
      role: "эрхзүй, нөхөн төлбөрийн газрын захирал",
      image: otgon1,
      name: "В. Отгончимэг",
    },
    {
      role: "бизнес хөгжлийн газрын захирал",
      image: tseren1,
      name: "Г. Цэрэнбямба",
    },
    {
      role: "санхүү удирдлагын газрын захирал",
      image: uran1,
      name: "М. Ураншагай",
    },
  ];
  return (
    <Box ref={ref} paddingX={"8.3vw"} width={"100%"}>
      <Box paddingBottom={"134px"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box
            color={"#3B4856"}
            fontSize={"24px"}
            fontStyle={"normal"}
            fontWeight={700}
            textTransform={"uppercase"}
            display={"flex"}
            justifyContent={"center"}
            paddingTop={"80px"}
            paddingBottom={"40px"}
          >
            төлөөлөн удирдах зөвлөл
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
        >
          <Box display={"flex"} justifyContent={"space-between"} gap={"16px"}>
            {data1.map((item) => (
              <Box width={"136px"} key={item.name}>
                <Image
                  width={"136px"}
                  height={"136px"}
                  marginBottom={"8px"}
                  src={item.image.src}
                  alt={item.name}
                />
                <Box
                  color={"#4F5A67"}
                  marginBottom={"8px"}
                  fontSize={"16px"}
                  fontWeight={700}
                  textAlign={"center"}
                  fontStyle={"normal"}
                >
                  {item.name}
                </Box>
                <Box
                  color={"#767F89"}
                  fontSize={"10px"}
                  fontWeight={500}
                  textAlign={"center"}
                  textTransform={"uppercase"}
                >
                  {item.role}
                </Box>
              </Box>
            ))}
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box
            color={"#3B4856"}
            fontSize={"24px"}
            fontStyle={"normal"}
            fontWeight={700}
            textTransform={"uppercase"}
            display={"flex"}
            justifyContent={"center"}
            paddingTop={"80px"}
            paddingBottom={"40px"}
          >
            удирдлагын баг
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
        >
          <Box display={"flex"} justifyContent={"space-between"} gap={"16px"}>
            {data2.map((item) => (
              <Box width={"136px"} key={item.name}>
                <Image
                  marginBottom={"8px"}
                  borderRadius={"full"}
                  width={"136px"}
                  height={"136px"}
                  src={item.image.src}
                  alt={item.name}
                />
                <Box
                  marginBottom={"8px"}
                  color={"#4F5A67"}
                  fontSize={"16px"}
                  fontWeight={700}
                  textAlign={"center"}
                  fontStyle={"normal"}
                >
                  {item.name}
                </Box>
                <Box
                  color={"#767F89"}
                  fontSize={"10px"}
                  fontWeight={500}
                  textAlign={"center"}
                  textTransform={"uppercase"}
                >
                  {item.role}
                </Box>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>
      <Box></Box>
    </Box>
  );
};
