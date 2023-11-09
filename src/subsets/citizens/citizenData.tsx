import iconAutoInsurance from "../../assets/pics/icon-auto-insurance.png";
import iconTravelInsurance from "../../assets/pics/icon-travel-insurance.png";
import iconHouseInsurance from "../../assets/pics/icon-house-insurance.png";
import iconDriverInsurance from "../../assets/pics/icon-driver-insurance.png";
import iconPlaneInsurance from "../../assets/pics/icon-plane-insurance.png";
import iconInfiniteDriverInsurance from "../../assets/pics/icon-infinite-driver-insurance.png";
import { StaticImageData } from "next/image";

type data = {
  title: string;
  icon: StaticImageData;
  color: string;
  id: number;
}[];



export const Colordata: data = [
  {
    title: "Тээврийн хэрэгслийн даатгал",
    icon: iconAutoInsurance,
    color: "#2D998B",
    id: 1,
  },
  {
    title: "Дотоод аялалын даатгал",
    icon: iconTravelInsurance,
    color: "#",
    id: 2,
  },
  {
    title: "Орон сууцны иж бүрэн даатгал",
    icon: iconHouseInsurance,
    color: "#E88300",
    id: 3,
  },
  {
    title: "Жолоочийн хариуцлагын даатгал",
    icon: iconDriverInsurance,
    color: "#DD005C",
    id: 4,
  },
  {
    title: "Гадаадад зорчигчийн даатгал",
    icon: iconPlaneInsurance,
    color: "#2D998B",
    id: 5,
  },
  {
    title: '"Хязгааргүй" сайн дурын жолоочийн хариуцлагын даатгал',
    icon: iconInfiniteDriverInsurance,
    color: "#7EA120",
    id: 6,
  },
];
