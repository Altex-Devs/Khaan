import iconMining from "../../assets/pics/icon-mining.png";
import iconBuilding from "../../assets/pics/icon-building.png";
import iconTransportation from "../../assets/pics/icon-transportation.png";
import iconStore from "../../assets/pics/icon-store.png";
import iconOil from "../../assets/pics/icon-oil.png";
import { StaticImageData } from "next/image";

type data = {
  title: string;
  icon: StaticImageData;
  color: string;
  id: number;
}[];

export const data: data = [
  {
    title: "Уул уурхайн салбар",
    icon: iconMining,
    color: "#2D998B",
    id: 1,
  },
  {
    title: "Барилгын салбар",
    icon: iconBuilding,
    color: "#7EA120",
    id: 2,
  },
  {
    title: "Тээврийн салбар",
    icon: iconTransportation,
    color: "#E88300",
    id: 3,
  },
  {
    title: "Худалдааны салбар",
    icon: iconStore,
    color: "#DD005C",
    id: 4,
  },
  {
    title: "Газрын тосны салбар",
    icon: iconOil,
    color: "#2D998B",
    id: 5,
  },
];
