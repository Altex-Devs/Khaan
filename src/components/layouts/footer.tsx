import React from "react";
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
const router = useRouter();
const pushFacebook = () => {
  router.push("https://www.facebook.com/khaandaatgal");
}
const pushYoutube = () => {
  router.push("https://www.youtube.com/channel/UCqqsVyq6TX51OlzhlyjSPbg/videos");
}
const pushInstagram = () => {
  router.push("https://www.instagram.com/khaandaatgal/");
}

const pushLinkedin = () => {
  router.push("https://www.linkedin.com/company/khaandaatgalcompany/");
}
const pushTwitter = () => {
  router.push("https://twitter.com/khaan_daatgal");
}

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
          <Box cursor={"pointer"} onClick={pushFacebook}>
            <FacebookIcon />
          </Box>
          <Box cursor={"pointer"} onClick={pushYoutube}>
            <YoutubeIcon />
          </Box>
          <Box cursor={"pointer"} onClick={pushInstagram}>
            <InstagramIcon />
          </Box>
          <Box cursor={"pointer"} onClick={pushLinkedin}>
            <LinkedIcon />
          </Box>
          <Box cursor={"pointer"} onClick={pushTwitter}>
            <XIcon />
          </Box>
        </HStack>
        <Text color="#454655" fontSize="14px" fontWeight="400">
          ©2023 - Хаан даатгал | Бүх эрх хуулиар хамгаалагдсан.
        </Text>
      </Flex>
    </Box>
  );
};
