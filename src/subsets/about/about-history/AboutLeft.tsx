import { Box, Text } from "@chakra-ui/react";
import rightBanner from "../../../assets/pics/right-banner.png";

export const AboutLeft = (data: any) => {
  return (
    <Box display={"flex"}>
      <Box
        width={"50vw"}
        // height={"25vh"}
        borderRight={"1px"}
        borderColor={"white"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        justifyContent={"center"}
      >
        <Box
          display={"flex"}
          gap={"10px"}
          width={"25vw"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Box
            backgroundImage={rightBanner.src}
            backgroundSize={"contain"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            display={"flex"}
            alignItems={"center"}
            width={"8.5vw"}
            height={"11.9vh"}
          >
            <Box paddingLeft={"2.7vw"}>{data.icon()}</Box>
          </Box>
          <Box
            fontSize={"48px"}
            fontWeight={700}
            color={"white"}
            paddingX={"40px"}
            borderBottom={"1px"}
            borderLeft={"1px"}
            borderStyle={"dashed"}
            borderColor={"white"}
            textAlign={"right"}
          >
            {data.year}
          </Box>
        </Box>
        <Box paddingX={"40px"}>
          <Text
            color={"white"}
            textAlign={"right"}
            fontWeight={700}
            className="uppercase"
            fontSize={"18px"}
          >
            {data.title}
          </Text>
          <Text
            width={"25vw"}
            color={"white"}
            textAlign={"right"}
            fontWeight={400}
            fontSize={"16px"}
          >
            {data.body}
          </Text>
        </Box>
      </Box>
      <Box width={"50vw"}></Box>
    </Box>
  );
};
