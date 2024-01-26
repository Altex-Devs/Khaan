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
  title: any;
  year: string;
  body: any;
  icon: () => React.JSX.Element;
  id: number;
}[];

export const historyData: historyDataType = [
  {
    year: "2012",
    title: {
      mongolia: "Үүсгэн байгуулагдав",
      english: "Established",
    },
    body: {
      mongolia:
        "Ердийн даатгалын тусгай зөвшөөрөл авч,<br /> Монголын даатгалын зах зээлд “Хаан даатгал”<br /> нэртэйгээр үйл ажиллагаа явуулж эхлэв.",
      english:
        "Khan Daatgal LLC started operating <br/>in the Mongolian insurance market with <br/>the regulatory license of FRC.",
    },
    icon: IconHouse,
    id: 0,
  },
  {
    year: "2013",
    title: {
      mongolia: "бүтээгдэхүүн хөгжил",
      english: "Product development",
    },
    body: {
      mongolia:
        "Орон сууцны иж бүрэн даатгалын<br /> бүтээгдэхүүнийг зах зээлд нэвтрүүлэв.",
      english:
        "Khaan Daatgal introduced a comprehensive<br/> apartment insurance product to the market.",
    },
    icon: IconGear,
    id: 1,
  },
  {
    year: "2014",
    title: {
      mongolia: "хамтын ажиллагаа",
      english: "COOPERATION",
    },
    body: {
      mongolia:
        "Дэлхий даяар даатгал, давхар даатгалын<br /> үйлчилгээ үзүүлэгч MAPFRE Assistance, Hannover<br /> Ruck SE компанитай хамтран ажиллаж эхлэв.",
      english:
        "Started to cooperate with MAPFRE<br/> Assistance, international assistance <br/>company, and Hannover Ruck SE which is<br/> international reinsurance group.",
    },
    icon: IconHandShake,
    id: 2,
  },
  {
    year: "2016",
    title: { mongolia: "Үйлчилгээний чанар", english: "Service quality" },
    body: {
      mongolia:
        "ISO 9001:2015 Олон Улсын чанарын удирдлагын<br /> тогтолцооны стандартыг анхлан хэрэгжүүлж эхлэв.",
      english: "We implemented ISO 9001:2015.",
    },
    icon: IconMedal,
    id: 3,
  },
  {
    year: "2017",
    title: { mongolia: "инноваци", english: "Innovation" },
    body: {
      mongolia:
        "ХБНГерман улсын GIZ байгууллагаас хэрэгжүүлж<br /> буй Хүртээмжтэй даатгалыг хөгжүүлэх олон<br /> улсын “Inclusive Insurance Innovation Lab” төсөлд<br /> Монгол улсын үндэсний багт сонгогдов.",
      english:
        "Khaan Daatgal has been selected from <br/>Mongolia by the German Corporation for<br/> International Cooperation GmbH, the<br/> organization implementing the 'Inclusive Insurance <br/>Innovation Lab' project on behalf of the state,<br/> with the aim of developing affordable insurance.",
    },
    icon: IconLightBulb,
    id: 4,
  },
  {
    year: "2018",
    title: { mongolia: "чатбот", english: "Chatbot" },
    body: {
      mongolia:
        "Фэйсбүүк болон чатбот дээр суурилсан даатгалын<br /> үйлчилгээг нэвтрүүлэн салбартаа түүчүүлэв.",
      english:
        "Lead the market with an insurance service<br/> that is based on Facebook Chatbot.",
    },
    icon: IconRobot,
    id: 5,
  },
  {
    year: "2019",
    title: { mongolia: "дижиталчлал", english: "Digitalization" },
    body: {
      mongolia:
        "Дижитал борлуулалт, үйлчилгээний<br /> нэгдсэн сувгийг бий болгов.",
      english: "Established an integrated digital sales<br/> and service system.",
    },
    icon: IconCloud,
    id: 6,
  },
  {
    year: "2020",
    title: { mongolia: "ковид даатгал", english: "COVID-Insurance" },
    body: {
      mongolia: "Санхүүгийн даатгалыг зах<br /> зээлд анхлан нэвтрүүлэв.",
      english:
        "For the first time, COVID Insurance<br/> has been introduced to the commercial<br/> insurance market in Mongolia.",
    },
    icon: IconVirus,
    id: 7,
  },
  {
    year: "2021",
    title: { mongolia: "стратегийн түншлэл", english: "Strategic partnership" },
    body: {
      mongolia:
        "Willis Tower Watson-тай давхар даатгалын<br/> онцгой нөхцөлт хамтын ажиллагааг эхлүүлэв.",
      english:
        "We initiated an exclusive reinsurance<br/> cooperation with Willis Tower Watson.",
    },
    icon: IconChess,
    id: 8,
  },
  {
    year: "2022",
    title: { mongolia: "эко шилжилт", english: "Eco transfer" },
    body: {
      mongolia:
        "Цаасан суурьт ажиллагааг халж,<br/> цахим хэлбэрт бүрэн шилжив.",
      english:
        "Instead of paper-based documents,<br/> we started to work with the electronic<br/> documents and materials.",
    },
    icon: IconLeaf,
    id: 9,
  },
];
