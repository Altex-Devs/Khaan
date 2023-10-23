import React from "react";
import { HStack, Text, Box, Flex } from "@chakra-ui/react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedIcon,
  XIcon,
  YoutubeIcon,
} from "@/assets/svg";

export const Footer = () => {
  return (
    <Box position="fixed" bottom={0} width="100%">
      <Flex justify="space-between" align="center" paddingX={"8.3vw"} paddingY={"2.45vh"} bg="#ffffff">
        <HStack spacing={"24px"}>
          <FacebookIcon />
          <YoutubeIcon />
          <InstagramIcon />
          <LinkedIcon />
          <XIcon />
        </HStack>
        <Text color="#454655" fontSize="14px" fontWeight="400">
          ©2023 - Хаан даатгал | Бүх эрх хуулиар хамгаалагдсан.
        </Text>
      </Flex>
    </Box>
  );
};
