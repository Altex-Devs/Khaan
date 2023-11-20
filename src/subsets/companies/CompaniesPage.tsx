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
  console.log("isMore:", isMore);
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
      const filteredData = typpe
        ? data.filter((item: any) => item.type === typpe)
        : data;

      console.log(data);
      setData(filteredData);
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
