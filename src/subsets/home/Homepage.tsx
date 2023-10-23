"use client";

import { useRouter } from "next/navigation";
import bgHome1 from "../../assets/pics/bg-home-1.png";
import bgHome2 from "../../assets/pics/bg-home-2.png";
import bgHome3 from "../../assets/pics/bg-home-3.png";
import imageHome1 from "../../assets/pics/image-home-1.png";
import imageHome2 from "../../assets/pics/image-home-2.png";
import imageHome3 from "../../assets/pics/image-home-3.png";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Homepage = () => {
  const router = useRouter(); // Initialize the router
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 2) {
      setTimeout(() => {
        setIndex(index + 1);
      }, 5000);
    } else {
      setTimeout(() => {
        setIndex(0);
      }, 5000);
    }
  }, [index]);

  const data = [
    {
      title: "Эрүүл, аз жаргалтай<br /> гэр бүлийн төлөө",
      bg: bgHome1,
      image: imageHome1,
      width: 42.7,
      align: "flex-end",
    },
    {
      title: "Дижитал<br/> шилжилт",
      bg: bgHome2,
      image: imageHome2,
      width: 51.3,
      align: "center",
    },
    {
      title: "Бүтээгдэхүүний<br/> ялгарал",
      bg: bgHome3,
      image: imageHome3,
      width: 37.5,
      align: "flex-end",
    },
  ];

  return (
    <Box paddingBottom={"8.16vh"} paddingTop={"13.98vh"} height={"100vh"}>
      <Box
        paddingX={"8.3vw"}
        width={"100vw"}
        height={"100%"}
        display={"flex"}
        style={{
          backgroundImage: `url(${data[index].bg.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      >
        <Box
          flex={1}
          paddingTop={"18.26vh"}
          display={"flex"}
          flexDirection={"column"}
          gap={"40px"}
        >
          <Box color={"#66377B"} fontWeight={500} fontSize={"6.52vh"}>
            <Box dangerouslySetInnerHTML={{ __html: data[index].title }} />
          </Box>
          <Box>
            <Button
              height={"48px"}
              width={"149px"}
              borderRadius={50}
              bgGradient="linear(to-r, #66377B, #DD005C)"
            >
              <Text fontWeight={600} fontSize={"16px"} color={"white"}>
                Дэлгэрэнгүй
              </Text>
            </Button>
          </Box>
        </Box>
        <Box flex={1} display={"flex"} alignItems={data[index].align} justifyContent={"flex-end"}>
          <Image
            width={`${data[index].width}vw`}
            src={data[index].image?.src}
          />
        </Box>
      </Box>
    </Box>
  );
};
