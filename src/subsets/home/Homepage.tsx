"use client";

import { useRouter } from "next/navigation";
import bgHome1 from "../../assets/pics/bg-home-1.png";
import bgHome2 from "../../assets/pics/bg-home-2.png";
import bgHome3 from "../../assets/pics/bg-home-3.png";
import bgHome4 from "../../assets/pics/bg-home-4.png";
import imageHome1 from "../../assets/pics/image-home-1.png";
import imageHome2 from "../../assets/pics/image-home-2.png";
import imageHome3 from "../../assets/pics/image-home-3.png";
import imageHome4 from "../../assets/pics/image-home-4.png";
import { Box, Button, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessengerChat } from "@/components";
// import { MessengerChat } from "react-messenger-chat-plugin";
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
        setIndex(3);
      }
      if (index === 3) {
        setIndex(0);
      }
    }, 7000);
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
      title: "Таны эрсдэлгүй<br /> амьдралын хэв маяг",
      body: "Та бидний амьдралд ямарваа нэгэн эрсдэлүүд учирч байдаг. Бид<br />тэрхүү эрсдэл бүрийг давах бамбай байх болно.",
      bg: bgHome1,
      image: imageHome1,
      width: 35.78,
      align: "flex-end",
      right: 63,
      bottom: 64,
    },
    {
      title: "Байгальд ээлтэй түргэн<br/> шуурхай цахим шийдэл",
      body: "Бид харилцагчдаа Чатбот-оор дамжуулан хурдан, хялбар, төвлөрсөн, цогц<br /> мэдээллээр хангадаг бөгөөд цахим нөхөн төлбөрийн үйлчилгээг үе<br /> шаттайгаар нэвтрүүлж байна.",
      bg: bgHome2,
      image: imageHome2,
      width: 35.2,
      align: "flex-end",
      right: 123,
      bottom: 40,
    },
    {
      title: "Зөвхөн танд зориулсан<br/> даатгалын үйлчилгээ",
      body: "Бидний амьдралын хэв маяг, түүнд тулгарч болох эрсдэлүүд хоорондоо<br /> ялгаатай тул манай бүтээгдэхүүн үйлчилгээ зөвхөн танд зориулсан<br /> нөхцөл, хамгаалалттай байдаг.",
      bg: bgHome3,
      image: imageHome3,
      width: 33.24,
      align: "flex-end",
      right: 62,
      bottom: 64,
    },
    {
      title: "Мэргэжлийн найдвартай<br/> эрсдэлийн зөвлөгөө",
      body: "Бид харилцагчдынхаа хамгийн итгэлт түнш байхыг эрмэлзэн<br /> ажилладаг бөгөөд харилцагчийн асуудлыг түргэн шуурхай<br /> шийдвэрлэх нь манай хамт олны зорилт юм.",
      bg: bgHome4,
      image: imageHome4,
      width: 42.84,
      align: "flex-end",
      right: 0,
      bottom: 64,
    },
  ];

  return (
    <Box height={"100vh"} position={"relative"}>
      {/** Background Images */}
      <Box
        position={"absolute"}
        width={"100vw"}
        height={"100vh"}
        zIndex={-1}
        display={"flex"}
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
      >
        <motion.div
          animate={index === 0 ? "open" : "closed"}
          variants={variants}
          style={{ display: index === 0 ? "block" : "none" }}
        >
          <Image src={data[0].bg.src} width={"100%"} h={"100vh"} />
        </motion.div>
        <motion.div
          animate={index === 1 ? "open" : "closed"}
          variants={variants}
          style={{ display: index === 1 ? "block" : "none" }}
        >
          <Image src={data[1].bg.src} width={"100%"} h={"100vh"} />
        </motion.div>
        <motion.div
          animate={index === 2 ? "open" : "closed"}
          variants={variants}
          style={{ display: index === 2 ? "block" : "none" }}
        >
          <Image src={data[2].bg.src} width={"100%"} h={"100vh"} />
        </motion.div>
        <motion.div
          animate={index === 3 ? "open" : "closed"}
          variants={variants}
          style={{ display: index === 3 ? "block" : "none" }}
        >
          <Image src={data[3].bg.src} width={"100%"} h={"100vh"} />
        </motion.div>
      </Box>
      {/** Left Contents */}
      <Box paddingTop={"32vh"} paddingLeft={"8.33vw"}>
        <Box
          color={"#66377B"}
          fontSize={"64px"}
          fontWeight={500}
          lineHeight={"72px"}
        >
          <motion.div
            animate={index === 0 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{ __html: data[0].title }}
            style={{ display: index === 0 ? "block" : "none" }}
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
          <motion.div
            animate={index === 3 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{ __html: data[3].title }}
            style={{ display: index === 3 ? "block" : "none" }}
          />
        </Box>
        <Box
          color={"#3B4856"}
          fontSize={"18px"}
          fontWeight={400}
          lineHeight={"22px"}
          paddingTop={"16px"}
        >
          <motion.div
            animate={index === 0 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{ __html: data[0].body }}
            style={{ display: index === 0 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 1 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{ __html: data[1].body }}
            style={{ display: index === 1 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 2 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{ __html: data[2].body }}
            style={{ display: index === 2 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 3 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{ __html: data[3].body }}
            style={{ display: index === 3 ? "block" : "none" }}
          />
        </Box>
        <Button marginTop={"40px"} borderRadius={50} paddingX={0}>
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
            cursor={"pointer"}
            _hover={{ opacity: "0.9" }}
            zIndex={1}
          >
            Дэлгэрэнгүй
          </Box>
        </Button>
      </Box>
      {/** Right Images */}
      <Box
        position={"absolute"}
        right={"21.65vw"}
        bottom={"12.6vh"}
        display={"flex"}
        gap={"4px"}
        zIndex={1}
      >
        <motion.div
          onClick={() => setIndex(0)}
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
        <motion.div
          onClick={() => setIndex(3)}
          variants={variantsPoint}
          animate={index === 3 ? "open" : "closed"}
          className={`h-[8px] rounded-[6px] bg-gradient-to-r from-[#6B337E] to-[#DD005C] cursor-pointer`}
        />
      </Box>
      <Box
        position={"absolute"}
        width={"100vw"}
        height={"100vh"}
        top={0}
        left={0}
      >
        <Box
          width={"100vw"}
          height={"100vh"}
          position={"relative"}
          display={"flex"}
          alignItems={"flex-end"}
          justifyContent={"flex-end"}
        >
          <motion.div
            animate={index === 0 ? "open" : "closed"}
            variants={variants}
            style={{
              position: "absolute",
              display: index === 0 ? "flex" : "none",
              right: data[0].right,
              bottom: data[0].bottom,
            }}
          >
            <Image
              width={`${data[0].width}vw`}
              src={data[0].image?.src}
              alt="switch image"
            />
          </motion.div>
          <motion.div
            animate={index === 1 ? "open" : "closed"}
            variants={variants}
            style={{
              position: "absolute",
              display: index === 1 ? "flex" : "none",
              right: data[1].right,
              bottom: data[1].bottom,
            }}
          >
            <Image
              width={`${data[1].width}vw`}
              src={data[1].image?.src}
              alt="switch image"
            />
          </motion.div>
          <motion.div
            animate={index === 2 ? "open" : "closed"}
            variants={variants}
            style={{
              position: "absolute",
              display: index === 2 ? "flex" : "none",
              right: data[2].right,
              bottom: data[2].bottom,
            }}
          >
            <Image
              width={`${data[2].width}vw`}
              src={data[2].image?.src}
              alt="switch image"
            />
          </motion.div>
          <motion.div
            animate={index === 3 ? "open" : "closed"}
            variants={variants}
            style={{
              position: "absolute",
              display: index === 3 ? "flex" : "none",
              right: data[3].right,
              bottom: data[3].bottom,
            }}
          >
            <Image
              width={`${data[3].width}vw`}
              src={data[3].image?.src}
              alt="switch image"
            />
          </motion.div>
        </Box>
      </Box>
      <Box>
        <MessengerChat />
      </Box>
    </Box>
  );
};
