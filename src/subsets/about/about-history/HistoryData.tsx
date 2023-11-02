import {
  IconHouse,
  IconGear,
  IconHandShake,
  IconMedal,
  IconLightBulb,
  IconRobot,
  IconCloud,
  IconVirus,
  IconChess,
  IconLeaf,
} from "@/assets";
// import { StaticImageData } from "next/image";

type historyDataType = {
  title: string;
  year: string;
  body: string;
  icon: () => React.JSX.Element;
  id: number;
}[];

export const historyData: historyDataType = [
  {
    year: "2012",
    title: "Үүсгэн байгуулагдав",
    body: "Ердийн даатгалын тусгай зөвшөөрөл авч,<br /> Монголын даатгалын зах зээлд “Хаан даатгал”<br /> нэртэйгээр үйл ажиллагаа явуулж эхлэв.",
    icon: IconHouse,
    id: 0,
  },
  {
    year: "2013",
    title: "бүтээгдэхүүн хөгжил",
    body: "Орон сууцны иж бүрэн даатгалын<br /> бүтээгдэхүүнийг зах зээлд нэвтрүүлэв.",
    icon: IconGear,
    id: 1,
  },
  {
    year: "2014",
    title: "хамтын ажиллагаа",
    body: "Дэлхий даяар даатгал, давхар даатгалын<br /> үйлчилгээ үзүүлэгч MAPFRE ASISTENCIA, Hangover<br /> Suck Re компанитай хамтран ажиллаж эхлэв.",
    icon: IconHandShake,
    id: 2,
  },
  {
    year: "2016",
    title: "Үйлчилгээний чанар",
    body: "ISO 9001:2015 Олон Улсын чанарын удирдлагын<br /> тогтолцооны стандартыг анхлан хэрэгжүүлж эхлэв.",
    icon: IconMedal,
    id: 3,
  },
  {
    year: "2017",
    title: "инноваци",
    body: "ХБНГерман улсын GIZ байгууллагаас хэрэгжүүлж<br /> буй Хүртээмжтэй даатгалыг хөгжүүлэх олон<br /> улсын “Inclusive Insurance Innovation Lab” төсөлд<br /> Монгол улсын үндэсний багт сонгогдов.",
    icon: IconLightBulb,
    id: 4,
  },
  {
    year: "2018",
    title: "чатбот",
    body: "Фэйсбүүк болон чатбот дээр суурилсан даатгалын<br /> үйлчилгээг нэвтрүүлэн салбартаа түүчүүлэв.",
    icon: IconRobot,
    id: 5,
  },
  {
    year: "2019",
    title: "дижиталчлал",
    body: "Дижитал борлуулалт, үйлчилгээний<br /> нэгдсэн сувгийг бий болгов.",
    icon: IconCloud,
    id: 6,
  },
  {
    year: "2020",
    title: "ковид даатгал",
    body: "Санхүүгийн даатгалыг зах<br /> зээлд анхлан нэвтрүүлэв.",
    icon: IconVirus,
    id: 7,
  },
  {
    year: "2021",
    title: "стратегийн түншлэл",
    body: "Willis Tower Watson-тай давхар даатгалын<br/> онцгой нөхцөлт хамтын ажиллагааг эхлүүлэв.",
    icon: IconChess,
    id: 8,
  },
  {
    year: "2022",
    title: "эко шилжилт",
    body: "Цаасан суурьт ажиллагааг халж,<br/> цахим хэлбэрт бүрэн шилжив.",
    icon: IconLeaf,
    id: 9,
  },
];
