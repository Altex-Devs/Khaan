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
    <Box position="absolute" bottom={0} width="100%">
      <Flex justify="space-between" align="center" mx={120} p={24} bg="#ffffff">
        <HStack spacing={24}>
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
