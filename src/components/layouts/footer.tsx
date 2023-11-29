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
    window.open("https://www.facebook.com/khaandaatgal", "_blank");
  };
  const pushYoutube = () => {
    window.open(
      "https://www.youtube.com/channel/UCqqsVyq6TX51OlzhlyjSPbg/videos",
      "_blank"
    );
  };
  const pushInstagram = () => {
    window.open("https://www.instagram.com/khaandaatgal/", "_blank");
  };

  const pushLinkedin = () => {
    window.open(
      "https://www.linkedin.com/company/khaandaatgalcompany/",
      "_blank"
    );
  };
  const pushTwitter = () => {
    window.open("https://twitter.com/khaan_daatgal", "_blank");
  };

  return (
    <Box position="fixed" bottom={0} width="100%">
      <Flex
        justify="space-between"
        align="center"
        paddingX={"8.3vw"}
        paddingY={"2.45vh"}
        bg="#ffffff"
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
        <Text color="#454655" fontSize="14px" fontWeight="400">
          ©2023 - Хаан даатгал | Бүх эрх хуулиар хамгаалагдсан.
        </Text>
      </Flex>
    </Box>
  );
};
