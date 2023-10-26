import { Box, Image } from "@chakra-ui/react";
import React from "react";
import tuzImage from "../../../assets/pics/tuzGreetings.png";

type Props = {};

export const AboutGreeting = ({}: Props) => {
  return (
    <Box paddingX={"8.3vw"} paddingY={"64px"} width={"100vw"}>
      <Box display={"flex"} gap={"23px"}>
        <Box width={"690px"}>
          <Box
            paddingBottom={"24px"}
            textTransform={"uppercase"}
            fontSize={"24px"}
            fontWeight={700}
            color={"#3B4856"}
          >
            мэндчилгээ
          </Box>
          <Box
            fontSize={"16px"}
            fontStyle={"normal"}
            fontWeight={400}
            color={"#3B4856"}
          >
            <Box paddingBottom={"10px"}>
              Эрхэм хүндэт харилцагчид, бизнесийн түншүүд Та бүхэндээ ажлын
              амжилт, сайн сайхныг хүсэн мэндчилж байна. <br />
              <br />
              Хаан даатгал нь санхүүгийн зах зээлд сүүлийн үеийн технологи, шинэ
              стандартыг нэвтрүүлэх замаар харилцагчдадаа түргэн шуурхай
              үйлчилгээг найдвартайгаар хүргэхийн тулд үйлчилгээндээ дижитал
              суваг, технологийн боломжуудыг нэвтрүүлэн үйлчлүүлэгчдийнхээ
              хэрэгцээ, шаардлагыг цаг хугацаа, орон зай хамаарахгүйгээр цаг
              алдалгүй шийдвэрлэж байна. Бид ирэх жилүүдэд стратегийн түвшинд
              үйл ажиллагаагаа сайжруулан нээлттэй ил тод байх зарчмаа ямагт
              баримтлан ажиллах болно. <br />
              <br /> Өнгөрсөн он жилүүдэд бүх цаг үед хамт байж нэг зорилго дор
              нэгдэж чадсан амжилт бүтээлийн оргил өөд тэмүүлж буй Төлөөлөн
              удирдах зөвлөлийн гишүүд болон хувьцаа эзэмшигчид, Хаан даатгалын
              нийт ажилтнууддаа гүнээ талархал илэрхийлье.
            </Box>
          </Box>
        </Box>
        <Box position={"relative"} paddingY={"40px"}>
          <Image
            borderRadius={"8px"}
            width={"485px"}
            src={`${tuzImage.src}`}
            alt=""
          />
          <Box
            width={"162px"}
            height={"79px"}
            bg="rgba(102, 55, 123, 0.50)"
            borderRadius={"4px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            top={"205px"}
            left={"16px"}
          >
            <Box>
              <Box
                fontSize={"16px"}
                fontWeight={700}
                textTransform={"uppercase"}
              >
                ж. баярсайхан
              </Box>
              <Box fontSize={"16px"} fontWeight={400} fontStyle={"normal"}>
                ТУЗ-ийн дарга
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
