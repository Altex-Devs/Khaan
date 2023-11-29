import React, { useState } from "react";
import { HStack, Text, Box, Flex } from "@chakra-ui/react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedIcon,
  XIcon,
  YoutubeIcon,
} from "@/assets/svg";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const [hover, setHover] = useState("");
  const router = useRouter();

  const pushFacebook = () => {
    router.push("https://www.facebook.com/khaandaatgal");
  };
  const pushYoutube = () => {
    router.push(
      "https://www.youtube.com/channel/UCqqsVyq6TX51OlzhlyjSPbg/videos"
    );
  };
  const pushInstagram = () => {
    router.push("https://www.instagram.com/khaandaatgal/");
  };

  const pushLinkedin = () => {
    router.push("https://www.linkedin.com/company/khaandaatgalcompany/");
  };
  const pushTwitter = () => {
    router.push("https://twitter.com/khaan_daatgal");
  };

  return (
    <Box position="fixed" bottom={0} width="100%">
      <Flex
        justify="space-between"
        align="center"
        paddingX={"8.3vw"}
        paddingY={"2.45vh"}
        bg="#ffffff"
        display={{ xl: "flex", base: "block" }}
      >
        <HStack spacing={"24px"}>
          <Box
            cursor={"pointer"}
            onClick={pushFacebook}
            onMouseEnter={() => setHover("facebook")}
            onMouseLeave={() => setHover("")}
          >
            <FacebookIcon
              color={hover === "facebook" ? "#DD005C" : "#66377B"}
            />
          </Box>
          <Box
            cursor={"pointer"}
            onClick={pushYoutube}
            onMouseEnter={() => setHover("youtube")}
            onMouseLeave={() => setHover("")}
          >
            <YoutubeIcon color={hover === "youtube" ? "#DD005C" : "#66377B"} />
          </Box>
          <Box
            cursor={"pointer"}
            onClick={pushInstagram}
            onMouseEnter={() => setHover("instagram")}
            onMouseLeave={() => setHover("")}
          >
            <InstagramIcon
              color={hover === "instagram" ? "#DD005C" : "#66377B"}
            />
          </Box>
          <Box
            cursor={"pointer"}
            onClick={pushLinkedin}
            onMouseEnter={() => setHover("linkedin")}
            onMouseLeave={() => setHover("")}
          >
            <LinkedIcon color={hover === "linkedin" ? "#DD005C" : "#66377B"} />
          </Box>
          <Box
            cursor={"pointer"}
            onClick={pushTwitter}
            onMouseEnter={() => setHover("twitter")}
            onMouseLeave={() => setHover("")}
          >
            <XIcon color={hover === "twitter" ? "#DD005C" : "#66377B"} />
          </Box>
        </HStack>
        <Text
          marginTop={{ base: "24px", xl: "0px" }}
          color="#454655"
          fontSize={{ xl: "14px", base: "12px" }}
          fontWeight="400"
        >
          ©2023 - Хаан даатгал | Бүх эрх хуулиар хамгаалагдсан.
        </Text>
      </Flex>
    </Box>
  );
};
