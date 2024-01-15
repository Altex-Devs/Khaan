"use client";

import { useRouter } from "next/navigation";
import bgHome1 from "../../assets/pics/bg-home-1.png";
import bgHome2 from "../../assets/pics/bg-home-2.png";
import bgHome3 from "../../assets/pics/bg-home-3.png";
import bgHome4 from "../../assets/pics/bg-home-4.png";
import bgHome11 from "../../assets/pics/bg-home-11.png";
import bgHome22 from "../../assets/pics/bg-home-22.png";
import bgHome33 from "../../assets/pics/bg-home-33.png";
import bgHome44 from "../../assets/pics/bg-home-44.png";
import imageHome1 from "../../assets/pics/image-home-1.png";
import imageHome2 from "../../assets/pics/image-home-2.png";
import imageHome3 from "../../assets/pics/image-home-3.png";
import imageHome4 from "../../assets/pics/image-home-4.png";
import { Box, Button, Image, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessengerChat } from "@/components";
import { useIntl } from "react-intl";
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
  const intl = useIntl();
  const router = useRouter(); // Initialize the router
  const [index, setIndex] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(false);

  useEffect(() => {
    setPhoneNumber(false);
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
      title: {
        mongolia: "<p>Таны эрсдэлгүй</p><p>амьдралын хэв маяг</p>",
        english: "<p>Your reliable</p><p>lifestyle</p>",
      },
      title1: {
        mongolia: "Таны эрсдэлгүй амьдралын <br> хэв маяг",
        english: "Your reliable<br/> lifestyle",
      },
      body: {
        mongolia:
          "Та бидний амьдралд ямарваа нэгэн эрсдэлүүд учирч байдаг. Бид<br/>тэрхүү эрсдэл бүрийг давах бамбай байх болно.",
        english: "We the shield to your everyday-risk",
      },
      body1: {
        mongolia:
          "Та бидний амьдралд ямарваа нэгэн эрсдэлүүд учирч байдаг. Бид тэрхүү эрсдэл бүрийг давах бамбай байх болно.",
        english: "We the shield to your everyday-risk",
      },
      bg: bgHome1,
      bg1: bgHome11,
      image: imageHome1,
      width: 35.78,
      align: "flex-end",
      right: 63,
      bottom: 64,
      right1: 0,
      bottom1: 88,
      link: "/retail",
    },
    {
      title: {
        mongolia:
          "<div>Байгальд ээлтэй түргэн</div> <div>шуурхай цахим шийдэл</div>",
        english: "Devoted insurance services<br/> tailored for our customers",
      },
      title1: {
        mongolia: "Байгальд ээлтэй түргэн шуурхай цахим шийдэл",
        english: "Devoted insurance services tailored for our customers",
      },
      body: {
        mongolia:
          "Бид харилцагчдаа Чатбот-оор дамжуулан хурдан, хялбар, төвлөрсөн, цогц<br /> мэдээллээр хангадаг бөгөөд цахим нөхөн төлбөрийн үйлчилгээг үе<br /> шаттайгаар нэвтрүүлж байна.",
        english:
          "To cater to diverse lifestyles and risks, our product's terms and <br/>protections are tailored to suit your specific needs.",
      },
      body1: {
        mongolia:
          "Бид харилцагчдаа Чатбот-оор дамжуулан хурдан, хялбар, төвлөрсөн, цогц мэдээллээр хангадаг бөгөөд цахим нөхөн төлбөрийн үйлчилгээг үе шаттайгаар нэвтрүүлж байна.",
        english:
          "To cater to diverse lifestyles and risks, our product's terms and protections are tailored to suit your specific needs.",
      },
      bg: bgHome2,
      bg1: bgHome22,
      image: imageHome2,
      width: 35.2,
      align: "flex-end",
      right: 123,
      bottom: 40,
      right1: 20,
      bottom1: 98,
      link: "https://www.facebook.com/khaandaatgal",
    },
    {
      title: {
        mongolia:
          "<div>Зөвхөн танд зориулсан</div> <div>даатгалын үйлчилгээ</div>",
        english: "Eco-friendly<br/> and e-solutions",
      },
      title1: {
        mongolia: "Зөвхөн танд зориулсан даатгалын үйлчилгээ",
        english: "Eco-friendly and e-solutions",
      },
      body: {
        mongolia:
          "Бидний амьдралын хэв маяг, түүнд тулгарч болох эрсдэлүүд хоорондоо<br /> ялгаатай тул манай бүтээгдэхүүн үйлчилгээ зөвхөн танд зориулсан<br /> нөхцөл, хамгаалалттай байдаг.",
        english:
          "We provide our customers with express, easy, centralized, and<br /> comprehensive information through Chatbots and we are rolling out<br /> e-reimbursement services.",
      },
      body1: {
        mongolia:
          "Бидний амьдралын хэв маяг, түүнд тулгарч болох эрсдэлүүд хоорондоо ялгаатай тул манай бүтээгдэхүүн үйлчилгээ зөвхөн танд зориулсан нөхцөл, хамгаалалттай байдаг.",
        english:
          "We provide our customers with express, easy, centralized, and comprehensive information through Chatbots and we are rolling out e-reimbursement services.",
      },

      bg: bgHome3,
      bg1: bgHome33,
      image: imageHome3,
      width: 33.24,
      align: "flex-end",
      right: 62,
      bottom: 64,
      right1: 20,
      bottom1: 88,
      // link: "https://alpha-ten-kappa.vercel.app/",
      link: "/retail",
    },
    {
      title: {
        mongolia:
          "<div>Мэргэжлийн найдвартай</div> <div>эрсдэлийн зөвлөгөө</div>",
        english: "Professional and<br/> reliable risk advice",
      },
      title1: {
        mongolia: "Мэргэжлийн найдвартай эрсдэлийн зөвлөгөө",
        english: "Professional and reliable risk advice",
      },
      body: {
        mongolia:
          "Бид харилцагчдынхаа хамгийн итгэлт түнш байхыг эрмэлзэн<br /> ажилладаг бөгөөд харилцагчийн асуудлыг түргэн шуурхай<br /> шийдвэрлэх нь манай хамт олны зорилт юм.",
        english:
          "We aim to be a dependable partner for our customers, with<br /> our team dedicated to promptly resolving any issues they may encounter.",
      },
      body1: {
        mongolia:
          "Бид харилцагчдынхаа хамгийн итгэлт түнш байхыг эрмэлзэн ажилладаг бөгөөд харилцагчийн асуудлыг түргэн шуурхай шийдвэрлэх нь манай хамт олны зорилт юм.",
        english:
          "We aim to be a dependable partner for our customers, with our team dedicated to promptly resolving any issues they may encounter.",
      },
      bg: bgHome4,
      bg1: bgHome44,
      image: imageHome4,
      width: 42.84,
      align: "flex-end",
      right: 0,
      bottom: 64,
      right1: 0,
      bottom1: 88,
      link: "",
    },
  ];

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={{ base: "column-reverse", xl: "row" }}
      position={"relative"}
    >
      {/** Background Images */}
      <Box
        position={{ xl: "absolute" }}
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
          <Image
            display={{ xl: "block", base: "none" }}
            src={data[0].bg.src}
            width={"100%"}
            h={"100vh"}
          />
          <Image
            display={{ xl: "none", base: "block" }}
            src={data[0].bg1.src}
            width={"100%"}
            h={"100%"}
          />
        </motion.div>
        <motion.div
          animate={index === 1 ? "open" : "closed"}
          variants={variants}
          style={{ display: index === 1 ? "block" : "none" }}
        >
          <Image
            display={{ xl: "block", base: "none" }}
            src={data[1].bg.src}
            width={"100%"}
            h={"100vh"}
          />
          <Image
            display={{ xl: "none", base: "block" }}
            src={data[1].bg1.src}
            width={"100%"}
            h={"100%"}
          />
        </motion.div>
        <motion.div
          animate={index === 2 ? "open" : "closed"}
          variants={variants}
          style={{ display: index === 2 ? "block" : "none" }}
        >
          <Image
            display={{ xl: "block", base: "none" }}
            src={data[2].bg.src}
            width={"100%"}
            h={"100vh"}
          />
          <Image
            display={{ xl: "none", base: "block" }}
            src={data[2].bg1.src}
            width={"100%"}
            h={"100%"}
          />
        </motion.div>
        <motion.div
          animate={index === 3 ? "open" : "closed"}
          variants={variants}
          style={{ display: index === 3 ? "block" : "none" }}
        >
          <Image
            display={{ xl: "block", base: "none" }}
            src={data[3].bg.src}
            width={"100%"}
            h={"100vh"}
          />
          <Image
            display={{ xl: "none", base: "block" }}
            src={data[3].bg1.src}
            width={"100%"}
            h={"100%"}
          />
        </motion.div>
      </Box>
      {/** Left Contents */}
      <Box
        paddingTop={{ base: "32%", xl: "32vh" }}
        paddingLeft={{ xl: "8.33vw", base: "3.72vw" }}
        paddingRight={{ base: "3.72vw", xl: "0vw" }}
      >
        <Box
          color={"#66377B"}
          display={{ xl: "block", base: "none" }}
          fontSize={{ base: "24px", xl: "56px" }}
          fontWeight={{ base: 700, xl: 600 }}
          lineHeight={{ xl: "62px", base: "32px" }}
          fontFamily={"Montserrat"}
        >
          <motion.div
            animate={index === 0 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[0].title.mongolia
                  : data[0].title.english,
            }}
            style={{ display: index === 0 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 1 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[1].title.mongolia
                  : data[1].title.english,
            }}
            style={{ display: index === 1 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 2 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[2].title.mongolia
                  : data[2].title.english,
            }}
            style={{ display: index === 2 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 3 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[3].title.mongolia
                  : data[3].title.english,
            }}
            style={{ display: index === 3 ? "block" : "none" }}
          />
        </Box>
        <Box
          color={"#66377B"}
          display={{ xl: "none", base: "block" }}
          fontSize={{ base: "18px", xl: "64px" }}
          fontWeight={{ base: 700, xl: 500 }}
          lineHeight={{ xl: "72px", base: "24px" }}
          textTransform={"uppercase"}
          height={"48px"}
        >
          <motion.div
            animate={index === 0 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[0].title1.mongolia
                  : data[0].title1.english,
            }}
            style={{ display: index === 0 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 1 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[1].title1.mongolia
                  : data[1].title1.english,
            }}
            style={{ display: index === 1 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 2 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[2].title1.mongolia
                  : data[2].title1.english,
            }}
            style={{ display: index === 2 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 3 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[3].title1.mongolia
                  : data[3].title1.english,
            }}
            style={{ display: index === 3 ? "block" : "none" }}
          />
        </Box>
        <Box
          color={"#3B4856"}
          fontSize={{ base: "14px", xl: "18px" }}
          fontWeight={400}
          lineHeight={{ xl: "22px", base: "18px" }}
          paddingTop={"12px"}
          display={{ xl: "block", base: "none" }}
        >
          <motion.div
            animate={index === 0 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[0].body.mongolia
                  : data[0].body.english,
            }}
            style={{ display: index === 0 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 1 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[1].body.mongolia
                  : data[1].body.english,
            }}
            style={{ display: index === 1 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 2 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[2].body.mongolia
                  : data[2].body.english,
            }}
            style={{ display: index === 2 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 3 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[3].body.mongolia
                  : data[3].body.english,
            }}
            style={{ display: index === 3 ? "block" : "none" }}
          />
        </Box>
        <Box
          color={"#3B4856"}
          fontSize={{ base: "14px", xl: "18px" }}
          fontWeight={400}
          lineHeight={{ xl: "22px", base: "18px" }}
          paddingTop={"8px"}
          display={{ xl: "none", base: "block" }}
          height={"80px"}
        >
          <motion.div
            animate={index === 0 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[0].body1.mongolia
                  : data[0].body1.english,
            }}
            style={{ display: index === 0 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 1 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[1].body1.mongolia
                  : data[1].body1.english,
            }}
            style={{ display: index === 1 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 2 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[2].body1.mongolia
                  : data[2].body1.english,
            }}
            style={{ display: index === 2 ? "block" : "none" }}
          />
          <motion.div
            animate={index === 3 ? "open" : "closed"}
            variants={variants}
            dangerouslySetInnerHTML={{
              __html:
                intl.locale === "mn"
                  ? data[3].body1.mongolia
                  : data[3].body1.english,
            }}
            style={{ display: index === 3 ? "block" : "none" }}
          />
        </Box>
        <a
          style={{ display: index === 0 ? "block" : "none" }}
          href={data[0].link}
        >
          <Button
            marginTop={{ xl: "40px", base: "16px" }}
            borderRadius={50}
            paddingX={0}
          >
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
              {intl.locale === "mn" ? "Дэлгэрэнгүй" : "Learn more"}
            </Box>
          </Button>
        </a>
        <a
          style={{ display: index === 1 ? "block" : "none" }}
          href={data[1].link}
        >
          <Button
            marginTop={{ xl: "40px", base: "16px" }}
            borderRadius={50}
            paddingX={0}
          >
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
              {intl.locale === "mn" ? "Дэлгэрэнгүй" : "Learn more"}
            </Box>
          </Button>
        </a>
        <a
          style={{ display: index === 2 ? "block" : "none" }}
          href={data[2].link}
        >
          <Button
            marginTop={{ xl: "40px", base: "16px" }}
            borderRadius={50}
            paddingX={0}
          >
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
              {intl.locale === "mn" ? "Дэлгэрэнгүй" : "Learn more"}
            </Box>
          </Button>
        </a>
        <a style={{ display: index === 3 ? "block" : "none" }}>
          <Button
            marginTop={{ xl: "40px", base: "16px" }}
            borderRadius={50}
            paddingX={0}
            onClick={() => setPhoneNumber(true)}
          >
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
              {phoneNumber
                ? "+976 7000-0808"
                : intl.locale === "mn"
                ? "Холбогдох"
                : "To contact"}
            </Box>
          </Button>
        </a>
      </Box>
      {/** Right Images */}
      <Show above="base">
        <Box
          position={"absolute"}
          right={{ xl: "21.65vw", base: "45vw" }}
          bottom={{ xl: "12.6vh", base: "180px" }}
          display={{ xl: "flex", base: "none" }}
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
      </Show>
      <Show above="base">
        <Box
          position={"absolute"}
          right={{ xl: "21.65vw", base: "45vw" }}
          bottom={{ xl: "12.6vh", base: "180px" }}
          display={{ xl: "none", base: "flex" }}
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
      </Show>
      <Box
        position={"absolute"}
        width={"100vw"}
        display={{ xl: "block", base: "none" }}
        height={"100vh"}
        top={0}
        left={0}
      >
        <Box
          width={"100vw"}
          height={"100vh"}
          position={"relative"}
          display={"flex"}
          alignItems={{ xl: "flex-end", base: "center" }}
          justifyContent={{ xl: "flex-end", base: "center" }}
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
              width={{ xl: `${data[0].width}vw`, base: "200%" }}
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
              width={{ xl: `${data[1].width}vw`, base: "150%" }}
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
              width={{ xl: `${data[2].width}vw`, base: "150%" }}
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
              width={{ xl: `${data[3].width}vw`, base: "150%" }}
              src={data[3].image?.src}
              alt="switch image"
            />
          </motion.div>
        </Box>
      </Box>
      <Box
        display={{ xl: "none", base: "block" }}
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
          alignItems={{ xl: "flex-end", base: "center" }}
          justifyContent={{ xl: "flex-end", base: "center" }}
        >
          <motion.div
            animate={index === 0 ? "open" : "closed"}
            variants={variants}
            style={{
              position: "absolute",
              display: index === 0 ? "flex" : "none",
              right: data[0].right1,
              bottom: data[0].bottom1,
              left: 30,
            }}
          >
            <Image
              width={{ xl: `${data[0].width}vw`, base: "100%" }}
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
              right: data[1].right1,
              bottom: data[1].bottom1,
              left: 40,
            }}
          >
            <Image
              width={{ xl: `${data[1].width}vw`, base: "150%" }}
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
              right: data[2].right1,
              bottom: data[2].bottom1,
              left: 30,
            }}
          >
            <Image
              width={{ xl: `${data[2].width}vw`, base: "150%" }}
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
              right: data[3].right1,
              bottom: data[3].bottom1,
            }}
          >
            <Image
              width={{ xl: `${data[3].width}vw`, base: "150%" }}
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
