import React from "react";

import {
  IconMaterialsAcc,
  IconMaterialsAlpha,
  IconMaterialsAttorny,
  IconMaterialsCar,
  IconMaterialsHouse,
  IconMaterialsOther,
} from "@/assets";

type dataItem = {
  title: any;
};

export type Data = {
  title: any;
  icon: () => React.JSX.Element;
  items: dataItem[];
  color: string;
  titleColor: string;
  id: number;
}[];

export const materialsData: Data = [
  {
    title: {
      mongolia: "Албан журам болон <br> автотээврийн  хэрэгслийн даатгал",
      english: "Car/auto insurance",
    },
    icon: IconMaterialsCar,
    color: "#E0D7E5",
    titleColor: "#66377B",
    items: [
      {
        title: {
          mongolia: "Даатгалын гэрээ эх хувь.",
          english: "Insurance policy (original).",
        },
      },
      {
        title: {
          mongolia: "Даатгуулагчийн өргөдөл, албан тоот.",
          english: "Application and official letter requesting claims.",
        },
      },
      {
        title: {
          mongolia:
            "Холбогдох мэргэжлийн байгууллагын гаргасан дүгнэлт, тодорхойлолт.",
          english:
            "Conclusions, decisions, decrees, other legal acts and relevant documents of the competent authority to prove the cause and extent of the insured event.",
        },
      },
      {
        title: {
          mongolia:
            "Учирсан хохиролын тухай хохирол үнэлэгчийн бичгээр гаргасан дүгнэлт, акт материал.",
          english: "Damage assessment report (original).",
        },
      },
      {
        title: {
          mongolia: "Холбогдох жолооч нарын мэдээлэл, материал.",
          english: "Information of drivers.",
        },
      },
      {
        title: {
          mongolia: "Хохирол болон орчин нөхцлийг харуулсан фото зураг.",
          english:
            "Photographs and videos showing the circumstances of the insured event (original).",
        },
      },
      {
        title: {
          mongolia: "Шаардлагатай бусад материал.",
          english:
            "Other documents and materials deemed necessary by the insurer depending on the specifics of the insured event.",
        },
      },
    ],
    id: 1,
  },
  {
    title: { mongolia: "Орон сууцны даатгал", english: "Apartment insurance" },
    icon: IconMaterialsHouse,
    color: "#FCE6EF",
    titleColor: "#DD005C",
    items: [
      {
        title: {
          mongolia: "Даатгалын гэрээ эх хувь",
          english: "Application and official letter requesting claims.",
        },
      },
      {
        title: {
          mongolia: "Даатгуулагчийн өргөдөл, албан тоот",
          english: "Insurance policy (original).",
        },
      },
      {
        title: {
          mongolia:
            "Холбогдох мэргэжлийн байгууллагын гаргасан дүгнэлт, тодорхойлолт;",
          english:
            "Conclusions, decisions, decrees, other legal acts and relevant documents of the competent authority to prove the cause and extent of the insured event.",
        },
      },
      {
        title: {
          mongolia: "Тухайн орон сууцны сүүлийн 2 сарын төлбөр төлсөн баримт.",
          english: "Receipt of payment for the last 2 months of the apartment.",
        },
      },
      {
        title: {
          mongolia:
            "Даатгуулагчийн цахим иргэний үнэмлэх хуулбар /ҮХХ гэрчилгээний хуулбар/.",
          english:
            "Copy of insurer’s identity card /copy of real estate certificate/.",
        },
      },
    ],
    id: 2,
  },
  {
    title: {
      mongolia: "Гэнэтийн ослын даатгал",
      english: "Personal accident insurance",
    },
    icon: IconMaterialsAcc,
    color: "#F2F6E9",
    titleColor: "#7EA120",
    items: [
      {
        title: {
          mongolia: "Гэнэтийн ослын даатгал.",
          english: "Insurance policy (copy).",
        },
      },
      {
        title: {
          mongolia: "Албан тоот",
          english: "Application",
        },
      },
      {
        title: {
          mongolia: "Датгуулагчийн гар өргөдөл",
          english: "Official letter requesting claims.",
        },
      },
      {
        title: {
          mongolia:
            "Амбулаторийн карт, эмчийн бичсэн дүгнэлт, эмнэлгийн магадлагаа болон лист",
          english:
            "Official decision of the Medical-Labor Verification Commission (if the degree of disability is established - original).",
        },
      },
      {
        title: {
          mongolia: "Эрх бүхий байгууллагын гаргасан дүгнэлт, шийдвэр",
          english:
            "Conclusions, decisions, decrees, other legal acts and relevant documents of the competent authority to prove the cause and extent of the insured event, outpatient cards and medical records (original).",
        },
      },
      {
        title: {
          mongolia: "Даатгалын гэрээний хуулбар",
          english:
            "Forensic expert's report and information of the legal representative.",
        },
      },
      {
        title: {
          mongolia: "Шаардлагатай гэж үзсэн бусад материал",
          english:
            "Other documents and materials deemed necessary by the insurer depending on the specifics of the insured event.",
        },
      },
    ],
    id: 3,
  },
  {
    title: {
      mongolia: "Өмгөөлөгчийн хариуцлагын <br> даатгал",
      english: "Lawyer indemnity insurance",
    },
    icon: IconMaterialsAttorny,
    color: "#EAF5F3",
    titleColor: "#2D998B",
    items: [
      {
        title: {
          mongolia: "Хохирол нөхөн төлүүлэх тухайн албан тоот, өргөлдөл",
          english: "Application and official letter requesting claims.",
        },
      },
      {
        title: {
          mongolia: "Даатгалын гэрээ",
          english: "Insurance policy (original)",
        },
      },
      {
        title: {
          mongolia:
            "Холбогдох мэргэжлийн байгууллагын гаргасан дүгнэлт акт, баримт тодорхойлолт",
          english:
            "Conclusions, decisions, decrees, other legal acts and relevant documents of the competent authority to prove the cause and extent of the insured event",
        },
      },
      {
        title: {
          mongolia: "Шүүхийн шийдвэр",
          english: "Court decision (original, if necessary)",
        },
      },
      {
        title: {
          mongolia:
            "Учирсан хохиролд холбоотой хохирогч болон хариуцагчийн өргөдөл, тодорхойлолт болон бусад шаардлагатай мэдээлэлүүд",
          english: "Damage assessment report (original)",
        },
      },
    ],
    id: 4,
  },
  {
    title: {
      mongolia: "Альфа эрүүл мэндийн даатгал",
      english: "Alpha health insurance",
    },
    icon: IconMaterialsAlpha,
    color: "#F7FAEB",
    titleColor: "#AED038",
    items: [
      {
        title: {
          mongolia: "Нөхөн төлбөрийн маягт",
          english: "Claim form",
        },
      },
      {
        title: {
          mongolia: "Эмчийн бичсэн онош, дүгнэлт, амбулаторийн карт",
          english:
            "Diagnosis and conclusion written by the doctor, outpatient card",
        },
      },
      {
        title: {
          mongolia: "Лабораторийн оношилгоо, шинжилгээний хариу, дүгнэлт",
          english: "Laboratory diagnosis, test result and conclusions",
        },
      },
      {
        title: {
          mongolia: "Эмчийн бичсэн эмийн жор",
          english: "Medicine prescription from a doctor",
        },
      },
      {
        title: {
          mongolia: "Төлбөрийн задаргаа",
          english: "Detaild payment",
        },
      },
      {
        title: {
          mongolia:
            "Эмчилгээний төлбөрийн и-баримт, эмийн сангаар үйлчлүүлсэн и-баримт",
          english: "E-barimt of treatment payment and pharmacy",
        },
      },
      {
        title: {
          mongolia: "Шаардлагатай гэж үзсэн бусад баримт материал",
          english:
            "Other documents and materials deemed necessary by the insurer depending on the specifics of the insured event",
        },
      },
    ],
    id: 5,
  },
  {
    title: { mongolia: "Бусад төрлийн даатгал", english: "Other insurances" },
    icon: IconMaterialsOther,
    color: "#FDF3E6",
    titleColor: "#E88300",
    items: [
      {
        title: {
          mongolia: "Даатгалын гэрээ эх хувь",
          english: "Insurance policy (original)",
        },
      },
      {
        title: {
          mongolia: "Даатгуулагчийн өргөдөл, албан тоот",
          english: "Application and official letter requesting claims",
        },
      },
      {
        title: {
          mongolia:
            "Холбогдох мэргэжлийн байгууллагын гаргасан дүгнэлт, тодорхойлолт",
          english:
            "Conclusions, decisions, decrees, other legal acts and relevant documents of the competent authority to prove the cause and extent of the insured event",
        },
      },
      {
        title: {
          mongolia:
            "Учирсан хохиролын тухай хохирол үнэлэгчийн бичгээр гаргасан дүгнэлт, акт материал",
          english: "Damage assessment report (original)",
        },
      },
      {
        title: {
          mongolia: "Хохирол болон орчин нөхцлийг харуулсан фото зураг",
          english:
            "Photographs and videos showing the circumstances of the insured event (original)",
        },
      },
      {
        title: {
          mongolia: "Шаардлагатай бусад материал.",
          english:
            "Other documents and materials deemed necessary by the insurer depending on the specifics of the insured event",
        },
      },
    ],
    id: 6,
  },
];
