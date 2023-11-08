"use client";

import { Box, LinkBox, Text } from "@chakra-ui/react";
import { getDocs } from "firebase/firestore";
import { collection, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { IconPDF } from "@/assets";
import { useRouter } from "next/navigation";

export const ReportPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("2023");
  const [selectedData, setSelectedData] = useState<any>({});

  useEffect(() => {
    const filteredData: any = data.find((e: any) => e.id === selected);
    console.log("filtered: ", filteredData);
    if (filteredData) {
      const sorted = Object.keys(filteredData)
        .sort((a: any, b: any) => b - a)
        .reduce((accumulator: any, key: any) => {
          accumulator[key] = filteredData[key];
          return accumulator;
        }, {});
      setSelectedData(sorted);
      console.log(sorted);
    }
  }, [selected]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const q = query(collection(db, "reports"));
      const querySnapshot = await getDocs(q);
      const data: any = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(data.reverse());
      const filteredData = data.find((e: any) => e.id === selected);
      console.log(filteredData);
      const sorted = Object.keys(filteredData)
        .sort((a: any, b: any) => a - b)
        .reduce((accumulator: any, key: any) => {
          accumulator[key] = filteredData[key];
          return accumulator;
        }, {});
      console.log(sorted);
      setSelectedData(sorted);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Box paddingTop={"29.6vh"} paddingX={"8.33vw"} height={"100vh"}>
      <Box
        color={"black"}
        display={"flex"}
        justifyContent={"center"}
        marginBottom={"4.8vh"}
      >
        <Text
          className="uppercase"
          fontWeight={700}
          fontSize={"24px"}
          lineHeight={"28px"}
          color={"#3B4856"}
        >
          санхүүгийн тайлан
        </Text>
      </Box>
      <Box display={"flex"} gap={"24px"} marginBottom={"4.8vh"}>
        {data.map((year: any) => {
          return (
            <Box
              flex={1}
              borderBottom={"2px"}
              borderColor={selected === year.id ? "#DD005C" : "#89919A"}
              onClick={() => setSelected(year.id)}
              key={year.id}
            >
              <Text
                color={selected === year.id ? "#DD005C" : "#89919A"}
                fontWeight={600}
                fontSize={"18px"}
                lineHeight={"28px"}
              >
                {year.id}
              </Text>
            </Box>
          );
        })}
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={"2.88vh"}>
        {Object.keys(selectedData)
          .sort()
          .reverse()
          .map((season) => {
            console.log(season);
            if (season !== "id")
              return (
                <Box
                  key={season.split("_")[1]}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  backgroundColor={"#FFF"}
                  borderRadius={"16px"}
                  padding={"24px"}
                >
                  <Text
                    color={"#3B4856"}
                    fontSize={"24px"}
                    fontWeight={700}
                    lineHeight={"28px"}
                  >
                    <span>{selected}</span>
                    &nbsp;
                    <span>оны</span>
                    &nbsp;
                    <span>{season.split("_")[1]}</span>
                    <span>-р улирал</span>
                  </Text>
                  <a href={selectedData[season]} target="_blank">
                    <Box
                      borderRadius={"50px"}
                      border={"1px"}
                      borderColor={"#66377B"}
                      paddingX={"24px"}
                      paddingY={"8px"}
                      display={"flex"}
                      gap={"8px"}
                      cursor={"pointer"}
                    >
                      <IconPDF />
                      <Text
                        fontSize={"16px"}
                        fontWeight={600}
                        color={"#66377B"}
                      >
                        Харах
                      </Text>
                    </Box>
                  </a>
                </Box>
              );
          })}
      </Box>
    </Box>
  );
};
