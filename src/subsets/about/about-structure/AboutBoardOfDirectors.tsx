import { Box, Image } from "@chakra-ui/react";
import React from "react";
import bayraa from "../../../assets/pics/BoardOfDirectors/bayarsaihn.png";
import enhbileg from "../../../assets/pics/BoardOfDirectors/enhbileg.png";
import mendee from "../../../assets/pics/BoardOfDirectors/mendbayar.png";
import buyan from "../../../assets/pics/BoardOfDirectors/bayantogo.png";
import ragchaa from "../../../assets/pics/BoardOfDirectors/mendbayar.png";
import tuwshin from "../../../assets/pics/BoardOfDirectors/mendbayar.png";
import javhaa from "../../../assets/pics/BoardOfDirectors/mendbayar.png";
import huyag from "../../../assets/pics/BoardOfDirectors/mendbayar.png";
import orgil from "../../../assets/pics/BoardOfDirectors/mendbayar.png";
import enhjav from "../../../assets/pics/BoardOfDirectors/mendbayar.png";
import ulziimaa from "../../../assets/pics/BoardOfDirectors/mendbayar.png";
import nyambayar from "../../../assets/pics/BoardOfDirectors/mendbayar.png";
import hurelzuchukuu from "../../../assets/pics/BoardOfDirectors/mendbayar.png";
import otgon from "../../../assets/pics/BoardOfDirectors/mendbayar.png";
import tseren from "../../../assets/pics/BoardOfDirectors/mendbayar.png";
import uran from "../../../assets/pics/BoardOfDirectors/mendbayar.png";

type Props = {};

export const AboutBoardOfDirectors = ({}: Props) => {
  const data1 = [
    {
      role: "туз-ийн дарга",
      image: bayraa,
      name: "Ж. Баярсайхан",
    },
    {
      role: "туз-ийн дарга",
      image: enhbileg,
      name: "Г. Энхбилэг",
    },
    {
      role: "туз-ийн дарга",
      image: mendee,
      name: "А. Мэндбаяр",
    },
    {
      role: "туз-ийн хараат бус гишүүн",
      image: buyan,
      name: "Б. Буянтогос",
    },
    {
      role: "туз-ийн хараат бус гишүүн",
      image: ragchaa,
      name: "Г. Рагчаасүрэн",
    },
    {
      role: "туз-ийн хараат бус гишүүн",
      image: tuwshin,
      name: "Б. Түвшинтөгс",
    },
    {
      role: "туз-ийн хараат бус гишүүн",
      image: javhaa,
      name: "Н. Жавхлан",
    },
    {
      role: "туз-ийн хараат бус гишүүн",
      image: huyag,
      name: "Ж. Ганхуяг",
    },
  ];
  const data2 = [
    {
      role: "Гүйцэтгэх захирал",
      image: orgil,
      name: "Л. Оргил",
    },
    {
      role: "тэргүүн дэд захирал",
      image: enhjav,
      name: "Ц. Энхжавхлан",
    },
    {
      role: "иргэдийн даатгалын газрын захирал",
      image: ulziimaa,
      name: "Б. Өлзиймаа",
    },
    {
      role: "байгууллагын даатгалын хэлтсийн захирал",
      image: nyambayar,
      name: "Х. Нямбаяр",
    },
    {
      role: "эрсдэлийн удирдлагын газрын захирал",
      image: hurelzuchukuu,
      name: "О. Хүрэлчулуун",
    },
    {
      role: "эрхзүй, нөхөн төлбөрийн газрын захирал",
      image: otgon,
      name: "В. Отгончимэг",
    },
    {
      role: "бизнес хөгжлийн газрын захирал",
      image: tseren,
      name: "Г. Цэрэнбямба",
    },
    {
      role: "санхүү удирдлагын газрын захирал",
      image: uran,
      name: "М. Ураншагай",
    },
  ];
  return (
    <Box paddingX={'8.3vw'} width={"100%"} height={"778px"}>
      <Box paddingBottom={'134px'}>
        <Box
          color={"#3B4856"}
          fontSize={"24px"}
          fontStyle={"normal"}
          fontWeight={700}
          textTransform={"uppercase"}
          display={'flex'}
          justifyContent={'center'}
          paddingTop={'80px'}
          paddingBottom={'40px'}
        >
          төлөөлөн удирдах зөвлөл
        </Box>
        <Box display={'flex'} gap={'16px'}>
          {data1.map((item) => (
            <Box width={'136px'} key={item.name}>
              <Image width={'136px'} height={'136px'} src={item.image.src} alt={item.name} />
              <Box color={'#4F5A67'} fontSize={'16px'} fontWeight={700} textAlign={'center'} fontStyle={'normal'} width={'113px'}>{item.name}</Box>
              <Box color={'#767F89'} fontSize={'10px'} fontWeight={500} textAlign={'center'} textTransform={'uppercase'}>{item.role}</Box>
            </Box>
          ))}
        </Box>
        <Box
          color={"#3B4856"}
          fontSize={"24px"}
          fontStyle={"normal"}
          fontWeight={700}
          textTransform={"uppercase"}
          display={'flex'}
          justifyContent={'center'}
          paddingTop={'80px'}
          paddingBottom={'40px'}
        >
           удирдлагын баг
        </Box>
        <Box display={'flex'} gap={'16px'}>
          {data2.map((item) => (
            <Box width={'136px'} key={item.name}>
              <Image width={'136px'} height={'136px'} src={item.image.src} alt={item.name} />
              <Box color={'#4F5A67'} fontSize={'16px'} fontWeight={700} textAlign={'center'} fontStyle={'normal'} width={'113px'}>{item.name}</Box>
              <Box color={'#767F89'} fontSize={'10px'} fontWeight={500} textAlign={'center'} textTransform={'uppercase'}>{item.role}</Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};
