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
            <Box paddingBottom={'10px'}>
              Бид даатгалын зах зээлд огцомд тооцогдох үсрэлтүүдийг хийн,
              компанийн үнэ цэнийг өсгөж урт хугацаанд тогтвортой хөгжихөд
              шаардлагатай шийдлүүдийг олох нь хэрэглэгч буюу зах зээлийн
              шаардлагыг зөв ойлгож, түүнд нийцсэн стратеги бүхий үйл ажиллагааг
              явуулах нь нэн тэргүүний шийдэл гэж үзсэн билээ.{" "}
            </Box>
            <Box>
              Мөн компани байгуулагдсан цагаас эхлэн түүхийн өгөгдлийг баяжуулж,
              дотоод болон гадаад үйл ажиллагаа, менежмент, засаглал, соёлын
              тогтолцоог судалгаа суурьтайгаар хөгжүүлэх нь шилдэг шийдлүүдийг
              нэвтрүүлж, урт хугацааны тогтмол хөгжлөөр хангах суурь бааз гэж
              үзсэний дагуу 2017 онд менежментийн шинэчлэлтийг хийж компанийн
              дээд болон дунд төвшний менежментийн багийг мэргэжлийн,
              туршлагатай боловсон хүчнээр бүрдүүлэн зах зээл дахь тэргүүн
              эгнээний тоглогч байх бодлогыг баримтлан ажиллаж байна.
            </Box>
          </Box>
        </Box>
        <Box paddingY={"40px"}>
          <Image
            borderRadius={"8px"}
            width={"485px"}
            height={"260px"}
            src={`${tuzImage.src}`}
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
};
