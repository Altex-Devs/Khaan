"use client";

import { Box, Center, Image, SimpleGrid, Wrap } from "@chakra-ui/react";
import React from "react";
import bayraa from "../../../assets/pics/BoardOfDirectors/bayarsaihn3.png";
import enhbileg from "../../../assets/pics/BoardOfDirectors/enhbileg3.png";
import mendee from "../../../assets/pics/BoardOfDirectors/mendbayar3.png";
import buyan from "../../../assets/pics/BoardOfDirectors/buyantogos4.png";
import ragchaa from "../../../assets/pics/BoardOfDirectors/ragchaa.png";
import tuwshin from "../../../assets/pics/BoardOfDirectors/tuvshintugs3.png";
import javhaa from "../../../assets/pics/BoardOfDirectors/javhlan3.png";
import huyag from "../../../assets/pics/BoardOfDirectors/ganhuyag3.png";
import orgil1 from "../../../assets/pics/BoardOfDirectors/orgil3.png";
import enhjav1 from "../../../assets/pics/BoardOfDirectors/jay3.png";
import ulziimaa1 from "../../../assets/pics/BoardOfDirectors/ulziimaa3.png";
import nyambayar1 from "../../../assets/pics/BoardOfDirectors/nyambayar3.png";
import hurelzuchukuu1 from "../../../assets/pics/BoardOfDirectors/hurelchuluun3.png";
import otgon1 from "../../../assets/pics/BoardOfDirectors/otgonchimeg3.png";
import tseren1 from "../../../assets/pics/BoardOfDirectors/byamba3.png";
import uran1 from "../../../assets/pics/BoardOfDirectors/uranshagai3.png";
import enkhzaya from "../../../assets/pics/BoardOfDirectors/enkhzaya.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Bayarsaihan } from "@/assets";
import { FormattedMessage, useIntl } from "react-intl";

type Props = {};

export const AboutBoardOfDirectors = ({}: Props) => {
  const intl = useIntl();
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });
  const data1 = [
    {
      role: {
        mongolia: "туз-ийн дарга",
        english: "The Board Chairman",
      },
      image: bayraa,
      name: { mongolia: "Ж. Баярсайхан", english: "Bayarsaikhan.J" },
    },
    {
      role: {
        mongolia: "туз-ийн гишүүн",
        english: "Board member",
      },
      image: enhbileg,
      name: { mongolia: "Г. Энхбилэг", english: "Enkhbileg.G" },
    },
    {
      role: {
        mongolia: "туз-ийн гишүүн",
        english: "Board member",
      },
      image: mendee,
      name: { mongolia: "А. Мэндбаяр", english: "Mendbayar.A" },
    },
    {
      role: {
        mongolia: "туз-ийн хараат бус гишүүн",
        english: "Independent member of the board",
      },
      image: buyan,
      name: { mongolia: "Б. Буянтогос", english: "Buyantogos.A" },
    },
    {
      role: {
        mongolia: "туз-ийн хараат бус гишүүн",
        english: "Independent member of the board",
      },
      image: tuwshin,
      name: { mongolia: "Б. Түвшинтөгс", english: "Tuvshintugs.B" },
    },
    {
      role: {
        mongolia: "туз-ийн хараат бус гишүүн",
        english: "Independent member of the board",
      },
      image: javhaa,
      name: { mongolia: "Н. Жавхлан", english: "Javkhlan.N" },
    },
    {
      role: {
        mongolia: "туз-ийн хараат бус гишүүн",
        english: "Independent member of the board",
      },
      image: huyag,
      name: { mongolia: "Ж. Ганхуяг", english: "Gankhuyag.J" },
    },
  ];
  const data2 = [
    {
      role: {
        mongolia: "Гүйцэтгэх захирал",
        english: "Chief Executive Officer (CEO)",
      },
      image: orgil1,
      name: { mongolia: "Л. Оргил", english: "Orgil.L" },
    },
    {
      role: { mongolia: "тэргүүн дэд захирал", english: "Deputy CEO" },
      image: enhjav1,
      name: { mongolia: "Ц. Энхжавхлан", english: "Enkhjavkhlan.Ts" },
    },
    {
      role: {
        mongolia: "эрхзүй, нөхөн төлбөрийн газрын захирал",
        english: "Head of the legal regulatory and claims department",
      },
      image: otgon1,
      name: { mongolia: "В. Отгончимэг", english: "Otgonchimeg.V" },
    },
    {
      role: {
        mongolia: "эрсдэлийн удирдлагын газрын захирал",
        english: "Chief risk officer",
      },
      image: hurelzuchukuu1,
      name: { mongolia: "О. Хүрэлчулуун", english: "Khurelchuluun.O" },
    },
    {
      role: {
        mongolia: "санхүү удирдлагын газрын захирал",
        english: "Chief finance officer",
      },
      image: uran1,
      name: { mongolia: "М. Ураншагай", english: "Uranshagai.M" },
    },
    {
      role: {
        mongolia: "байгууллагын даатгалын газрын захирал",
        english: "Head of corporate  insurance",
      },
      image: nyambayar1,
      name: { mongolia: "Х. Нямбаяр", english: "Nyambayar.Kh" },
    },
  ];
  const data3 = [
    {
      role: {
        mongolia: "иргэдийн даатгалын газрын захирал",
        english: "Head of retail insurance",
      },
      image: ulziimaa1,
      name: { mongolia: "Б. Өлзиймаа", english: "Ulziimaa.B" },
    },
    {
      role: {
        mongolia: "бизнес хөгжлийн газрын захирал",
        english: "Head of business development",
      },
      image: tseren1,
      name: { mongolia: "Г. Цэрэнбямба", english: "Tserenbyamba.G" },
    },
    {
      role: {
        mongolia: "Байгууллагын даатгалын газрын захирал",
        english: "Head of corporate insurance",
      },
      image: enkhzaya,
      name: { mongolia: "Э. Энхзаяа", english: "Enkhzaya.E" },
    },
  ];
  return (
    <Box ref={ref} paddingX={{ xl: "8.3vw", base: "3.72vw" }} width={"100%"}>
      <Box display={{ xl: "block", base: "none" }} paddingBottom={"134px"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Center
            color={"#3B4856"}
            fontSize={{ xl: "24px", base: "0.8rem" }}
            fontStyle={"normal"}
            fontWeight={700}
            textTransform={"uppercase"}
            display={"flex"}
            justifyContent={"center"}
            paddingTop={"80px"}
            wordBreak="break-word"
            paddingBottom={"40px"}
            mx={"auto"}
          >
            <FormattedMessage id="board_members" />
          </Center>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
        >
          <Box display={"flex"} justifyContent={"center"} gap={"16px"}>
            {data1.map((item) => (
              <Box width={"136px"} key={item.name.mongolia}>
                <Image
                  width={"136px"}
                  height={"136px"}
                  marginBottom={"8px"}
                  src={item.image.src}
                  alt={item.name.mongolia}
                />
                <Box
                  color={"#4F5A67"}
                  marginBottom={"8px"}
                  fontSize={"16px"}
                  fontWeight={700}
                  textAlign={"center"}
                  fontStyle={"normal"}
                >
                  {intl.locale === "mn"
                    ? item.name.mongolia
                    : item.name.english}
                </Box>
                <Box
                  color={"#767F89"}
                  fontSize={"10px"}
                  fontWeight={500}
                  textAlign={"center"}
                  textTransform={"uppercase"}
                  lineHeight={"12px"}
                >
                  {intl.locale === "mn"
                    ? item.role.mongolia
                    : item.role.english}
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
            fontSize={{ xl: "24px", base: "1.2rem" }}
            fontStyle={"normal"}
            fontWeight={700}
            textTransform={"uppercase"}
            display={"flex"}
            justifyContent={"center"}
            paddingTop={"80px"}
            paddingBottom={"40px"}
          >
            <FormattedMessage id="chief_team" />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
        >
          <Box display={"flex"} justifyContent={"center"} gap={"16px"}>
            {data2.map((item) => (
              <Box width={"136px"} key={item.name.mongolia}>
                <Image
                  marginBottom={"8px"}
                  borderRadius={"full"}
                  width={"136px"}
                  height={"136px"}
                  src={item.image.src}
                  alt={item.name.mongolia}
                />
                <Box
                  marginBottom={"8px"}
                  color={"#4F5A67"}
                  fontSize={"16px"}
                  fontWeight={700}
                  textAlign={"center"}
                  fontStyle={"normal"}
                >
                  {intl.locale === "mn"
                    ? item.name.mongolia
                    : item.name.english}
                </Box>
                <Box
                  color={"#767F89"}
                  fontSize={"10px"}
                  fontWeight={500}
                  textAlign={"center"}
                  textTransform={"uppercase"}
                  lineHeight={"12px"}
                >
                  {intl.locale === "mn"
                    ? item.role.mongolia
                    : item.role.english}
                </Box>
              </Box>
            ))}
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
          style={{ marginTop: "24px" }}
        >
          <Box display={"flex"} justifyContent={"center"} gap={"16px"}>
            {data3.map((item) => (
              <Box width={"136px"} key={item.name.mongolia}>
                <Image
                  marginBottom={"8px"}
                  borderRadius={"full"}
                  width={"136px"}
                  height={"136px"}
                  src={item.image.src}
                  alt={item.name.mongolia}
                />
                <Box
                  marginBottom={"8px"}
                  color={"#4F5A67"}
                  fontSize={"16px"}
                  fontWeight={700}
                  textAlign={"center"}
                  fontStyle={"normal"}
                >
                  {intl.locale === "mn"
                    ? item.name.mongolia
                    : item.name.english}
                </Box>
                <Box
                  color={"#767F89"}
                  fontSize={"10px"}
                  fontWeight={500}
                  textAlign={"center"}
                  textTransform={"uppercase"}
                  lineHeight={"12px"}
                >
                  {intl.locale === "mn"
                    ? item.role.mongolia
                    : item.role.english}
                </Box>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>
      <Box display={{ xl: "none", base: "block" }} paddingBottom={"134px"}>
        <Box
          color={"#3B4856"}
          fontSize={{ xl: "24px", base: "1.2rem" }}
          fontStyle={"normal"}
          fontWeight={700}
          textTransform={"uppercase"}
          display={"flex"}
          justifyContent={"center"}
          paddingTop={"80px"}
          paddingBottom={"40px"}
        >
          <FormattedMessage id="board_members" />
        </Box>
        <Wrap justify="center" justifyContent={"center"} spacing={"16px"}>
          {data1.map((item) => (
            <Box width={"136px"} key={item.name.mongolia}>
              <Image
                width={"136px"}
                height={"136px"}
                marginBottom={"8px"}
                src={item.image.src}
                alt={item.name.mongolia}
              />
              <Box
                color={"#4F5A67"}
                marginBottom={"8px"}
                fontSize={"16px"}
                fontWeight={700}
                textAlign={"center"}
                fontStyle={"normal"}
              >
                {intl.locale === "mn" ? item.name.mongolia : item.name.english}
              </Box>
              <Box
                color={"#767F89"}
                fontSize={"10px"}
                fontWeight={500}
                textAlign={"center"}
                textTransform={"uppercase"}
                lineHeight={"12px"}
              >
                {intl.locale === "mn" ? item.role.mongolia : item.role.english}
              </Box>
            </Box>
          ))}
        </Wrap>
        <Box
          color={"#3B4856"}
          fontSize={{ xl: "24px", base: "1.2rem" }}
          fontStyle={"normal"}
          fontWeight={700}
          textTransform={"uppercase"}
          display={"flex"}
          justifyContent={"center"}
          paddingTop={{ xl: "80px", base: "40px" }}
          paddingBottom={"40px"}
        >
          <FormattedMessage id="chief_team" />
        </Box>
        <Wrap justify="center" justifyContent={"center"} spacing={"16px"}>
          {data2.map((item) => (
            <Box width={"136px"} key={item.name.mongolia}>
              <Image
                marginBottom={"8px"}
                borderRadius={"full"}
                width={"136px"}
                height={"136px"}
                src={item.image.src}
                alt={item.name.mongolia}
              />
              <Box
                marginBottom={"8px"}
                color={"#4F5A67"}
                fontSize={"16px"}
                fontWeight={700}
                textAlign={"center"}
                fontStyle={"normal"}
              >
                {intl.locale === "mn" ? item.name.mongolia : item.name.english}
              </Box>
              <Box
                color={"#767F89"}
                fontSize={"10px"}
                fontWeight={500}
                textAlign={"center"}
                textTransform={"uppercase"}
                lineHeight={"12px"}
              >
                {intl.locale === "mn" ? item.role.mongolia : item.role.english}
              </Box>
            </Box>
          ))}
        </Wrap>
        <Wrap justify="center" justifyContent={"center"} spacing={"16px"} marginTop={"16px"}>
          {data3.map((item) => (
            <Box width={"136px"} key={item.name.mongolia}>
              <Image
                marginBottom={"8px"}
                borderRadius={"full"}
                width={"136px"}
                height={"136px"}
                src={item.image.src}
                alt={item.name.mongolia}
              />
              <Box
                marginBottom={"8px"}
                color={"#4F5A67"}
                fontSize={"16px"}
                fontWeight={700}
                textAlign={"center"}
                fontStyle={"normal"}
              >
                {intl.locale === "mn" ? item.name.mongolia : item.name.english}
              </Box>
              <Box
                color={"#767F89"}
                fontSize={"10px"}
                fontWeight={500}
                textAlign={"center"}
                textTransform={"uppercase"}
                lineHeight={"12px"}
              >
                {intl.locale === "mn" ? item.role.mongolia : item.role.english}
              </Box>
            </Box>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
};
