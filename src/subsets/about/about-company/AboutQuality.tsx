import { Excellence, GlobalBank, IconAfaq } from "@/assets";
import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {};

export const AboutQuality = ({}: Props) => {
  return (
    <Box marginBottom={"80px"} height={"676px"} width={"100%"} backgroundColor={"#F6F6F6"} paddingX={"8.3vw"}>
      <Box
        fontSize={"24px"}
        fontWeight={700}
        fontStyle={"normal"}
        textTransform={"uppercase"}
        color={"#3B4856"}
        display={'flex'}
        justifyContent={'center'}
        paddingTop={'80px'}
        paddingBottom={"44px"}
      >
        үйлчилгээний чанар
      </Box>
      <Box
        display={"flex"}
        textAlign={"center"}
        justifyContent={"center"}
        gap={"25px"}
        marginBottom={"80px"}
      >
        <Box flex={1}>
          <Box paddingBottom={'40px'} display={"flex"} justifyContent={"center"}>
            <IconAfaq />
          </Box>
          <Box
            fontSize={"24px"}
            fontStyle={"normal"}
            fontWeight={400}
            color={"#3B4856"}
            width={"100%"}
            lineHeight={"32px"}
          >
            ISO 9001:2015 Монголын даатгалын салбарт Олон улсын чанарын
            удирдлагын тогтолцоог анхлан хэрэгжүүлэгч
          </Box>
        </Box>
        <Box flex={1}>
          <Box display={"flex"} paddingBottom={'40px'} justifyContent={"center"}>
            {" "}
            <GlobalBank />
          </Box>
          <Box
            fontSize={"24px"}
            fontStyle={"normal"}
            fontWeight={400}
            color={"#3B4856"}
            width={"100%"}
            lineHeight={"32px"}
          >
            Олон улсын санхүүгийн салбарын чиг хандлагыг тодорхойлогч “Global
            banking and Finance review” сэтгүүлээс 2022 оны “Монголын хамгийн
            хурдацтэй өсөж буй даатгалын компани” шагнал
          </Box>
        </Box>
        <Box flex={1}>
          <Box display={"flex"} paddingBottom={'40px'} justifyContent={"center"}>
            <Excellence />
          </Box>
          <Box
            fontSize={"24px"}
            fontStyle={"normal"}
            fontWeight={400}
            color={"#3B4856"}
            width={"100%"}
            lineHeight={"32px"}
          >
            Сингапурын “Service Excellence” буюу “Үйлчилгээний төгөлдөршил”
            стандартыг салбартаа анхлан нэвтрүүлж харилцагчийн үйлчилгээний цогц
            төслийг хэрэгжүүлэгч
          </Box>
        </Box>
      </Box>
    </Box>
  );
};