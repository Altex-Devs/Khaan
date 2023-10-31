"use client";

import { useRouter } from "next/navigation";
import bgHome1 from "../../assets/pics/bg-home-1.png";
import bgHome2 from "../../assets/pics/bg-home-2.png";
import bgHome3 from "../../assets/pics/bg-home-3.png";
import imageHome1 from "../../assets/pics/image-home-1.png";
import imageHome2 from "../../assets/pics/image-home-2.png";
import imageHome3 from "../../assets/pics/image-home-3.png";
import { Box, Button, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessengerChat } from "react-messenger-chat-plugin";
// import { MessengerChat } from "@/components";
// import { MessengerCustomerChat } from "react-messenger-customer-chat";

let interval: any;

const variants = {
  open: { opacity: 1, transition: { duration: 1 } },
  closed: { opacity: 0, transition: { duration: 1 } },
};

const variantsPoint = {
  open: { opacity: 1, width: "24px", transition: { duration: 0.3 } },
  closed: { opacity: 0.3, width: "8px", transition: { duration: 0.3 } },
};

export const Homepage = () => {
  const router = useRouter(); // Initialize the router
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (index === 0) {
        setIndex(1);
      }
      if (index === 1) {
        setIndex(2);
      }
      if (index === 2) {
        setIndex(0);
      }
    }, 5000);
  }, [index]);

  // const loop = () => {
  //   console.log(interval);
  //   if (!interval) {
  //     setInterval(() => {
  //       if (index < 1) {
  //         setIndex((i) => i + 1);
  //       } else {
  //         setIndex(0);
  //       }
  //       console.log(index);
  //     }, 5000);
  //   }
  // };

  // function stopLoop() {
  //   clearInterval(interval);
  //   // release our intervalID from the variable
  //   interval = null;
  // }

  // useEffect(() => {
  //   loop();
  //   console.log("sda");
  // }, []);

  const data = [
    {
      title: "Эрүүл, аз жаргалтай<br /> гэр бүлийн төлөө",
      bg: bgHome1,
      image: imageHome1,
      width: 35,
      align: "flex-end",
    },
    {
      title: "Дижитал<br/> шилжилт",
      bg: bgHome2,
      image: imageHome2,
      width: 45,
      align: "center",
    },
    {
      title: "Бүтээгдэхүүний<br/> ялгарал",
      bg: bgHome3,
      image: imageHome3,
      width: 35,
      align: "flex-end",
    },
  ];

  return (
    <Box paddingTop={"13.98vh"} height={"100vh"} position={"relative"}>
      <Box
        zIndex={-1}
        position={"absolute"}
        bottom={0}
        right={0}
        width={"100%"}
        height={"86.02%"}
        display={index === 0 ? "block" : "none"}
        style={{
          backgroundImage: `url(${data[0].bg.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      />
      <Box
        zIndex={-1}
        position={"absolute"}
        bottom={0}
        right={0}
        width={"100%"}
        height={"86.02%"}
        display={index === 1 ? "block" : "none"}
        style={{
          backgroundImage: `url(${data[1].bg.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      />
      <Box
        zIndex={-1}
        position={"absolute"}
        bottom={0}
        right={0}
        width={"100%"}
        height={"86.02%"}
        display={index === 2 ? "block" : "none"}
        style={{
          backgroundImage: `url(${data[2].bg.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      />
      <MessengerChat
        pageId="585954518093463"
        themeColor={"#66377B"}
        loggedInGreeting="loggedInGreeting"
        loggedOutGreeting="loggedOutGreeting"
      />
      ,{/* <MessengerChat /> */}
      {/* <MessengerCustomerChat pageId={"585954518093463"} appId={"300848802800662"} /> */}
      <Box
        paddingBottom={"8.16vh"}
        paddingX={"8.3vw"}
        width={"100vw"}
        height={"100%"}
        display={"flex"}
        position={"relative"}
      >
        <Box
          flex={1}
          paddingTop={"18.26vh"}
          display={"flex"}
          flexDirection={"column"}
          gap={"40px"}
        >
          <Box
            color={"#66377B"}
            fontWeight={500}
            fontSize={"64px"}
            lineHeight={"75px"}
          >
            <motion.div
              animate={index === 0 ? "open" : "closed"}
              variants={variants}
              dangerouslySetInnerHTML={{ __html: data[0].title }}
              style={{ display: index === 0 ? "block" : "none", width: "43vw" }}
            />
            <motion.div
              animate={index === 1 ? "open" : "closed"}
              variants={variants}
              dangerouslySetInnerHTML={{ __html: data[1].title }}
              style={{ display: index === 1 ? "block" : "none" }}
            />
            <motion.div
              animate={index === 2 ? "open" : "closed"}
              variants={variants}
              dangerouslySetInnerHTML={{ __html: data[2].title }}
              style={{ display: index === 2 ? "block" : "none" }}
            />
          </Box>
          <Box>
            <Button paddingX={0}>
              <Box
                height={"48px"}
                width={"149px"}
                borderRadius={50}
                bgGradient="linear(to-r, #66377B, #DD005C)"
                fontWeight={600}
                fontSize={"16px"}
                color={"white"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                Дэлгэрэнгүй
              </Box>
            </Button>
          </Box>
        </Box>
        <Box
          flex={1}
          display={"flex"}
          alignItems={"flex-end"}
          justifyContent={"flex-end"}
          position={"relative"}
        >
          <motion.div
            animate={index === 0 ? "open" : "closed"}
            variants={variants}
            style={{
              width: "100%",
              height: "100%",
              alignItems: data[index].align,
              justifyContent: "flex-end",
              position: "absolute",
              display: index === 0 ? "flex" : "none",
              right: -35,
            }}
          >
            <Image width={`${data[0].width}vw`} src={data[0].image?.src} />
          </motion.div>
          <motion.div
            animate={index === 1 ? "open" : "closed"}
            variants={variants}
            style={{
              width: "100%",
              height: "100%",
              alignItems: data[index].align,
              justifyContent: "flex-end",
              position: "absolute",
              display: index === 1 ? "flex" : "none",
              right: -95,
            }}
          >
            <Image width={`${data[1].width}vw`} src={data[1].image?.src} />
          </motion.div>
          <motion.div
            animate={index === 2 ? "open" : "closed"}
            variants={variants}
            style={{
              width: "100%",
              height: "100%",
              alignItems: data[index].align,
              justifyContent: "flex-end",
              position: "absolute",
              display: index === 2 ? "flex" : "none",
              right: -50,
            }}
          >
            <Image width={`${data[2].width}vw`} src={data[2].image?.src} />
          </motion.div>
          <Box
            position={"absolute"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            marginBottom={"2.88vh"}
            gap={"4px"}
          >
            <motion.div
              onClick={() => {
                // stopLoop();
                setIndex(0);
                // loop();
              }}
              variants={variantsPoint}
              animate={index === 0 ? "open" : "closed"}
              className={`h-[8px] rounded-[6px] bg-gradient-to-r from-[#6B337E] to-[#DD005C] cursor-pointer`}
            />
            <motion.div
              onClick={() => setIndex(1)}
              variants={variantsPoint}
              animate={index === 1 ? "open" : "closed"}
              className={`h-[8px] rounded-[6px] bg-gradient-to-r from-[#6B337E] to-[#DD005C] cursor-pointer`}
            />
            <motion.div
              onClick={() => setIndex(2)}
              variants={variantsPoint}
              animate={index === 2 ? "open" : "closed"}
              className={`h-[8px] rounded-[6px] bg-gradient-to-r from-[#6B337E] to-[#DD005C] cursor-pointer`}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
