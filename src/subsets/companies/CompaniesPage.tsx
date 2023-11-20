"use client";

import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { IconArrowDown, IconCircleArrow, Shadow } from "@/assets";
import { useRouter } from "next/navigation";
import { getDocs } from "firebase/firestore";
import { collection, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useEffect, useState } from "react";

export const CompaniesPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("companies");
  const [typpe, setTyppe] = useState("");
  const [isMore, setIsMore] = useState(false);
  console.log('typpe:',typpe)
  const pushAbout = (id: any) => {
    router.push(`/companies/${id}`);
  };
  const fetchData = async (category: any, typpe: any) => {
    try {
      const q = query(collection(db, category));
      const querySnapshot = await getDocs(q);
      const data: any = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("data:",data)
      const filteredData = typpe
      ? data.filter((item: any) => Array.isArray(item.type))
      : data;
      
      setData(filteredData);
      console.log('filter',filteredData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData(category, typpe);
  }, [category, typpe]);
  return (
    <Box
      paddingBottom={"11.75vh"}
      paddingTop={"20vh"}
      paddingX={"8.3vw"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      backgroundColor={"#F6F6F6"}
    >
      <Box
          marginBottom={"24px"}
          fontSize={"12px"}
          fontStyle={"normal"}
          fontWeight={500}
          display={"flex"}
          gap={"16px"}
        >
          <Box
            onClick={() => {
              setTyppe("");
              setIsMore(false);
            }}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            color={typpe === "" ? "#ffffff" : "#66377B"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
            bg={typpe === "" ? "#66377B" : "#F0EBF2"}
          >
            Бүгд
          </Box>
          <Box
            onClick={() => {
              setTyppe("Хөдөө аж ахуй");
              setIsMore(false);
            }}
            color={
              typpe === "Хөдөө аж ахуй" ? "#ffffff" : "#66377B"
            }
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Хөдөө аж ахуй" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Хөдөө аж ахуй
          </Box>
          <Box
            onClick={() => {
              setTyppe("Уул уурхай");
              setIsMore(false);
            }}
            color={typpe === "Уул уурхай" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Уул уурхай" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Уул уурхай
          </Box>
          <Box
            onClick={() => {
              setTyppe("Үйлдвэрлэл");
              setIsMore(false);
            }}
            color={typpe === "Үйлдвэрлэл" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Үйлдвэрлэл" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Үйлдвэрлэл
          </Box>
          <Box
            onClick={() => {
              setTyppe("Барилга");
              setIsMore(false);
            }}
            color={typpe === "Барилга" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Барилга" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Барилга
          </Box>
          <Box
            onClick={() => {
              setTyppe("Тээвэр, аялал зууч");
              setIsMore(false);
            }}
            color={typpe === "Тээвэр, аялал зууч" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Тээвэр, аялал зууч" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Тээвэр, аялал зууч
          </Box>
          <Box
            onClick={() => {
              setTyppe("Санхүү");
              setIsMore(false);
            }}
            color={typpe === "Санхүү" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Санхүү" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Санхүү 
          </Box>
          <Box
            onClick={() => {
              setTyppe("Боловсрол");
              setIsMore(false);
            }}
            color={typpe === "Боловсрол" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Боловсрол" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Боловсрол
          </Box>
          <Box
            onClick={() => {
              setTyppe("Эрүүл мэнд");
              setIsMore(false);
            }}
            color={typpe === "Эрүүл мэнд" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Эрүүл мэнд" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Эрүүл мэнд
          </Box>
          <Box
            onClick={() => {
              setTyppe("Үйлчилгээ");
              setIsMore(false);
            }}
            color={typpe === "Үйлчилгээ" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Үйлчилгээ" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Үйлчилгээ
          </Box>
          <Box
            onClick={() => {
              setTyppe("Шатахуун, газрын тос");
              setIsMore(false);
            }}
            color={typpe === "Шатахуун, газрын тос" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Шатахуун, газрын тос" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Шатахуун, газрын тос
          </Box>
          <Box
            onClick={() => {
              setTyppe("Бусад");
              setIsMore(false);
            }}
            color={typpe === "Бусад" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Бусад" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Бусад
          </Box>
        </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={"24px"} width={"100%"}>
        {data.map((e: any, index: any) => {
          if (!isMore) {
            if (index < 6)
              return (
                <GridItem
                  key={e.id}
                  boxShadow={"0px 0px 4px 0px #F1F1F1"}
                  bgGradient="linear(257deg, #F9FAFB 1.28%, #FAFBFB 100%)"
                  borderRadius={"16px"}
                >
                  <Box
                    height={"192px"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    position={"relative"}
                    paddingY={"24px"}
                  >
                    <Box position={"absolute"} left={0} top={0}>
                      <Shadow color={e?.color} />
                    </Box>
                    <Box
                      paddingBottom={"16px"}
                      dangerouslySetInnerHTML={{ __html: e.icon }}
                    />{" "}
                    <Text
                      color={"#3B4856"}
                      lineHeight={"20px"}
                      fontWeight={500}
                      paddingX={"34px"}
                      fontSize={"14px"}
                      textAlign={"center"}
                      className="uppercase"
                      paddingBottom={"24px"}
                    >
                      {e.title}
                    </Text>
                    <Box
                      cursor={"pointer"}
                      onClick={() => pushAbout(e.id)}
                      display={"flex"}
                      alignItems={"center"}
                      gap={"8px"}
                    >
                      <Box>
                        <IconCircleArrow />
                      </Box>
                      <Text
                        fontSize={"14px"}
                        fontWeight={600}
                        color={"#66377B"}
                        display={"flex"}
                        justifyContent={"end"}
                        alignItems={"end"}
                      >
                        Дэлгэрэнгүй
                      </Text>
                    </Box>
                  </Box>
                </GridItem>
              );
          } else {
            return (
              <GridItem
                bgGradient="linear(257deg, #F9FAFB 1.28%, #FAFBFB 100%)"
                w={"100%"}
                key={e?.id}
                boxShadow={"0px 0px 4px 0px #F1F1F1"}
                borderRadius={"16px"}
              >
                <Box
                  height={"192px"}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  position={"relative"}
                  paddingY={"24px"}
                >
                  <Box position={"absolute"} left={0} top={0}>
                    <Shadow color={e.color} />
                  </Box>
                  <Box
                    paddingBottom={"16px"}
                    dangerouslySetInnerHTML={{ __html: e.icon }}
                  />
                  <Text
                    color={"#3B4856"}
                    lineHeight={"20px"}
                    fontWeight={500}
                    fontSize={"14px"}
                    textAlign={"center"}
                    className="uppercase"
                    paddingBottom={'24px'}
                    paddingX={"34px"}

                  >
                    {e?.title}
                  </Text>
                  <Box
                    cursor={"pointer"}
                    onClick={() => pushAbout(e.id)}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"8px"}
                  >
                    <Box>
                      <IconCircleArrow />
                    </Box>
                    <Text
                      fontSize={"14px"}
                      fontWeight={600}
                      color={"#66377B"}
                      display={"flex"}
                      justifyContent={"end"}
                      alignItems={"end"}
                    >
                      Дэлгэрэнгүй
                    </Text>
                  </Box>
                </Box>
              </GridItem>
            );
          }
        })}
      </Grid>
      {!isMore && data.length > 6 ? (
        <Button
          marginTop={"4.8vh"}
          colorScheme="outlineButton"
          variant="outline"
          color={"#66377B"}
          fontSize={"16px"}
          fontWeight={600}
          borderRadius={"64px"}
          display={"flex"}
          gap={"8px"}
          onClick={() => {
            setIsMore(true);
          }}
        >
          <IconArrowDown />
          Бүгдийг харах
        </Button>
      ) : (
        <></>
      )}
    </Box>
  );
};
