"use client";

import { HomeCarousel } from "@/assets";
import { HomeCarousel_2 } from "@/assets/svg/homeCarousel_2";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import CaroIma_1 from "../../assets/pics/HomeCarousel_1.png";
import Image from "next/image";

export const Homepage = () => {
  const router = useRouter(); // Initialize the router

  return (
    <>
      <Box mx={120} display="flex" justifyContent="space-between" gap={303}>
        <Box mt={180} mb={52} position="relative">
          {/* <Box
            position="absolute"
            border="1px solid #66377B"
            width="256px"
            height="80px"
            bg="#66377B"
            opacity={0.9}
            filter="blur(90px)"
          />
          <Box
            position="absolute"
            left="230px"
            border="1px solid #66377B"
            width="256px"
            height="80px"
            bg="#66377B"
            opacity={0.9}
            filter="blur(100px)"
          /> */}
          <Flex justifyContent="space-between" gap={26}>
            <Box>
              <Box
                color="#66377B"
                fontSize="64px"
                fontWeight={500}
                mb={40}
                width="645px"
              >
                Эрүүл, аз жаргалтай гэр бүлийн төлөө
              </Box>
              <Button onClick={() => router.push("/about")}>Дэлгэрэнгүй</Button>
            </Box>
            <Box>
              <Image src={CaroIma_1} alt="123" width={616} height={655} />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box position="absolute" top={137} right={0}>
        <HomeCarousel />
      </Box>
      <Box position="absolute" bottom={0} right={500}>
        <HomeCarousel_2 />
      </Box>
    </>
  );
};
