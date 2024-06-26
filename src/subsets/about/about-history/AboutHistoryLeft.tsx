import { Box, Text } from "@chakra-ui/react";
import { useAnimation, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import rightBanner from "../../../assets/pics/right-banner.png";
import { IconTarget } from "@/assets";
import { useIntl } from "react-intl";

export const AboutHistoryLeft = ({ data }: { data: any }) => {
  const intl = useIntl();
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
      <Box
        width={"50vw"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        justifyContent={"center"}
      >
        <Box
          display={"flex"}
          width={"25vw"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          position={"relative"}
        >
          <motion.div
            variants={leftVariant}
            initial="hidden"
            ref={ref}
            animate={controls}
            style={{ display: "flex", alignItems: "flex-end" }}
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
                backgroundImage={rightBanner.src}
                backgroundSize={"contain"}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"right"}
                width={{ xl: "8.5vw", base: "72.93px" }}
                height={{ xl: "11.9vh", base: "64px" }}
                opacity={"35%"}
              ></Box>
              <Box
                position={"absolute"}
                paddingLeft={"1.8vw"}
                display={"flex"}
                alignItems={"flex-end"}
              >
                {data.icon()}
              </Box>
            </Box>
          </motion.div>
          <Box
            fontSize={{ xl: "48px", base: "28px" }}
            fontWeight={700}
            color={"white"}
            paddingRight={{ xl: "56px", base: "32px" }}
            paddingLeft={{ xl: "24px", base: "12px" }}
            borderBottom={"1px"}
            borderLeft={"1px"}
            borderStyle={"dashed"}
            borderColor={"white"}
            textAlign={"right"}
            position={"relative"}
          >
            {data.year}
            <Box
              position={"absolute"}
              display={"flex"}
              alignItems={"flex-end"}
              height={"100%"}
              right={"-8px"}
              bottom={"-8px"}
            >
              <IconTarget />
            </Box>
          </Box>
        </Box>
        <Box paddingX={{ xl: "56px", base: "16px" }}>
          <Text
            color={"white"}
            textAlign={"right"}
            fontWeight={700}
            className="uppercase"
            fontSize={{ xl: "18px", base: "16px" }}
            lineHeight={"18px"}
            marginTop={"2vh"}
          >
            {intl.locale === "mn" ? data.title.mongolia : data.title.english}
          </Text>
          <motion.div
            animate={textControls}
            ref={textRef}
            variants={textVariant}
            initial="hidden"
            dangerouslySetInnerHTML={
              intl.locale === "mn"
                ? { __html: data.body.mongolia }
                : { __html: data.body.english }
            }
            style={{
              lineHeight: "18px",
              color: "white",
              textAlign: "right",
              fontWeight: 400,
              fontSize: "16px",
              marginTop: "12px",
            }}
          />
        </Box>
      </Box>
      <Box width={"1px"} backgroundColor={"white"} />
      <Box width={"50vw"} />
    </Box>
  );
};
