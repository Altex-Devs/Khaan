"use client";

import { Box, Text } from "@chakra-ui/react";
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
    if (filteredData) {
      const sorted = Object.keys(filteredData)
        .sort((a: any, b: any) => b - a)
        .reduce((accumulator: any, key: any) => {
          accumulator[key] = filteredData[key];
          return accumulator;
        }, {});
      setSelectedData(sorted);
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
      const filteredData: any = data.find((e: any) => e.id === selected);
      const sorted = Object.keys(filteredData)
        .sort((a: any, b: any) => a - b)
        .reduce((accumulator: any, key: any) => {
          accumulator[key] = filteredData[key];
          return accumulator;
        }, {});
      console.log("sorted:", sorted);
      setSelectedData(sorted);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Box
      paddingTop={{ xl: "29.6vh", base: "220px" }}
      paddingX={{ xl: "8.33vw", base: "3.72vw" }}
    >
      <Box
        color={"black"}
        display={"flex"}
        justifyContent={"center"}
        marginBottom={{ xl: "4.8vh", base: "24px" }}
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
      <Box
        display={"flex"}
        gap={{ xl: "24px", base: "3.72vw" }}
        marginBottom={{ xl: "4.8vh", base: "20px" }}
        textAlign={{ xl: "start", base: "center" }}
        marginX={{ xl: 0, base: "3.67vw" }}
      >
        {data.map((year: any) => {
          return (
            <Box
              flex={1}
              borderBottom={"2px"}
              borderColor={selected === year.id ? "#DD005C" : "#89919A"}
              onClick={() => setSelected(year.id)}
              key={year.id}
              cursor={"pointer"}
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
        {selectedData.seasons ? (
          Object.keys(selectedData.seasons[0])
            ?.sort()
            .reverse()
            .map((season, index) => {
              if (season !== "id")
                return (
                  <Box
                    key={index}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    backgroundColor={"#FFF"}
                    borderRadius={"16px"}
                    padding={{ xl: "24px", base: "12px" }}
                  >
                    <Text
                      color={"#3B4856"}
                      fontSize={{ xl: "24px", base: "18px" }}
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
                    <a href={selectedData.seasons[0][season]} target="_blank">
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
                          display={{ xl: "block", base: "none" }}
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
            })
        ) : (
          <></>
        )}
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"2.88vh"}
        marginTop={{ xl: "9.6vh", base: "40px" }}
        marginBottom={{ xl: "0px", base: "40px" }}
      >
        <Box
          color={"black"}
          display={"flex"}
          justifyContent={"center"}
          marginBottom={{ xl: "4.8vh", base: "20px" }}
        >
          <Text
            className="uppercase"
            fontWeight={700}
            fontSize={"24px"}
            lineHeight={"28px"}
            color={"#3B4856"}
            textAlign={"center"}
          >
            компанийн засаглалын кодекс
          </Text>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          backgroundColor={"#FFF"}
          borderRadius={"16px"}
          padding={{ xl: "24px", base: "12px" }}
        >
          <Text
            color={"#3B4856"}
            fontSize={{ xl: "24px", base: "18px" }}
            fontWeight={700}
            lineHeight={"28px"}
          >
            Ёс зүйн журам
          </Text>
          <a
            href={
              "https://firebasestorage.googleapis.com/v0/b/khaan-e3b0c.appspot.com/o/report%2F%D0%95%CC%88%D1%81%20%D0%B7%D2%AF%D0%B8%CC%86%D0%BD%20%D0%B6%D1%83%D1%80%D0%B0%D0%BC%202020.pdf?alt=media&token=d0f4d025-6bb1-4c2d-a874-91cb3c95bc0a"
            }
            target="_blank"
          >
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
                display={{ xl: "block", base: "none" }}
                fontSize={"16px"}
                fontWeight={600}
                color={"#66377B"}
              >
                Харах
              </Text>
            </Box>
          </a>
        </Box>
      </Box>
    </Box>
  );
};
