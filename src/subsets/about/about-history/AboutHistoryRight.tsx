import { useAnimation, motion, useInView } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import leftBanner from "../../../assets/pics/left-banner.png";
import { IconTarget } from "@/assets";

export const AboutHistoryRight = ({ data }: { data: any }) => {
  const ref = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -25% 0px",
  });
  const textIsInView = useInView(textRef, {
    once: true,
    margin: "0px 0px -9% 0px",
  });

  const leftVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -50 },
  };

  const rightVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: 50 },
  };

  const textVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 50 },
  };

  const controls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (textIsInView) {
      textControls.start("visible");
    }
  }, [textControls, textIsInView]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <Box display={"flex"} key={data.id}>
      <Box width={"50vw"} />
      <Box width={"1px"} backgroundColor={"white"} />
      <Box
        width={"50vw"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Box
          display={"flex"}
          width={"25vw"}
          alignItems={"center"}
          position={"relative"}
        >
          <Box
            display={"flex"}
            alignItems={"flex-end"}
            justifyContent={"flex-start"}
            height={"100%"}
            position={"absolute"}
            left={"-8px"}
            bottom={{ xl: "4%", base: "4px" }}
          >
            <IconTarget />
          </Box>
          <Box
            fontSize={{ xl: "48px", base: "28px" }}
            fontWeight={700}
            color={"white"}
            paddingLeft={{ xl: "56px", base: "32px" }}
            paddingRight={{ xl: "24px", base: "12px" }}
            borderBottom={"1px"}
            borderRight={"1px"}
            borderStyle={"dashed"}
            borderColor={"white"}
            textAlign={"left"}
          >
            {data.year}
          </Box>
          <motion.div
            variants={rightVariant}
            initial="hidden"
            ref={ref}
            animate={controls}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              width={{ xl: "8.5vw" }}
              height={{ xl: "11.9vh" }}
              position={"relative"}
            >
              <Box
                backgroundImage={leftBanner.src}
                backgroundSize={"contain"}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"left"}
                width={{ xl: "8.5vw", base: "72.93px" }}
                height={{ xl: "11.9vh", base: "64px" }}
                opacity={"35%"}
              ></Box>
              <Box position={"absolute"} paddingRight={"1.8vw"}>
                {data.icon()}
              </Box>
            </Box>
          </motion.div>
        </Box>
        <Box paddingX={{ xl: "56px", base: "16px" }}>
          <Text
            color={"white"}
            textAlign={"left"}
            fontWeight={700}
            className="uppercase"
            fontSize={"18px"}
            lineHeight={"18px"}
            marginTop={"2vh"}
          >
            {data.title}
          </Text>
          <motion.div
            animate={textControls}
            ref={textRef}
            variants={textVariant}
            initial="hidden"
            dangerouslySetInnerHTML={{ __html: data.body }}
            style={{
              lineHeight: "18px",
              color: "white",
              textAlign: "left",
              fontWeight: 400,
              fontSize: "16px",
              marginTop: "12px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
