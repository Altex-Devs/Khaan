"use client";

import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { Colordata } from "./citizenData";
import { IconArrowDown, IconCircleArrow, Shadow } from "@/assets";
import { useRouter } from "next/navigation";
import backGroundo from "../../assets/pics/irgedAndBaiguullaga.png";

import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { collection, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export const CitizensPage = () => {
  const router = useRouter();
  const [dota, setDota] = useState([]);
  const [category, setCategory] = useState("citizens");
  const [typpe, setTyppe] = useState("");
  const [isMore, setIsMore] = useState(false);
  const [hoveredId, setHoveredId] = useState();

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
      setDota(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData(category, typpe);
  }, [category, typpe]);
  return (
    <>
      <Box
        position={"relative"}
        width={"100vw"}
        paddingTop={"10vh"}
        paddingBottom={"40px"}
      >
        <Image
          src={backGroundo.src}
          w={"100%"}
          height={"100%"}
          alt="backgroundImage"
        />
        <Box position={"absolute"} top={"10vh"} textAlign="center">
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            width={"full"}
          >
            <Box width={"full"} paddingTop={"95px"}>
              <Box
                fontSize={"24px"}
                fontWeight={700}
                textTransform="uppercase"
                fontStyle={"normal"}
                textAlign="center"
                paddingBottom={"16px"}
              >
                иргэдийн даатгал
              </Box>
              <Box
                fontSize={"24px"}
                fontWeight={400}
                fontStyle={"normal"}
                textAlign="center"
              >
                <Box paddingX={"15.69vw"}>
                  Иргэдэд зориулсан даатгалын бүтээгдэхүүн үйлчилгээ нь тэдний
                  эд хөрөнгө, амь нас эрүүл мэндэд учрах эрсдэл, бусдын өмнө
                  хүлээх хариуцлага ашиг сонирхолыг бүрэн хамгаалан, сэтгэлзүйн
                  болон санхүүгийн хувьд итгэлтэй байх нөхцөлийг бүрдүүлэн
                  ажиллаж байна.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        paddingBottom={"11.75vh"}
        paddingX={"8.3vw"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
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
              setTyppe("Эрүүл мэнд , гэнэтийн осол");
              setIsMore(false);
            }}
            color={
              typpe === "Эрүүл мэнд , гэнэтийн осол" ? "#ffffff" : "#66377B"
            }
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Эрүүл мэнд , гэнэтийн осол" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Эрүүл мэнд, гэнэтийн осол
          </Box>
          <Box
            onClick={() => {
              setTyppe("Хөрөнгийн даатгал");
              setIsMore(false);
            }}
            color={typpe === "Хөрөнгийн даатгал" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Хөрөнгийн даатгал" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Хөрөнгийн даатгал
          </Box>
          <Box
            onClick={() => {
              setTyppe("Хариуцлагын даатгал");
              setIsMore(false);
            }}
            color={typpe === "Хариуцлагын даатгал" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Хариуцлагын даатгал" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Хариуцлагын даатгал
          </Box>
          <Box
            onClick={() => {
              setTyppe("Санхүүгийн даатгал");
              setIsMore(false);
            }}
            color={typpe === "Санхүүгийн даатгал" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Санхүүгийн даатгал" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Санхүүгийн даатгал
          </Box>
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={"24px"} width={"100%"}>
          {dota.map((e: any, index: any) => {
            if (!isMore) {
              if (index < 6)
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
                      <Box
                        position={"absolute"}
                        left={0}
                        top={0}
                        borderRadius={"16px"}
                      >
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
                        paddingBottom={"24px"}
                        textAlign={"center"}
                        className="uppercase"
                        paddingX={"34px"}
                      >
                        {e?.title}
                      </Text>
                      <Link
                        href={`/citizens/${e.id}`}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"8px"}
                        onMouseOver={() => {
                          setHoveredId(index);
                        }}
                        onMouseOut={() => {
                          setHoveredId(null);
                        }}
                      >
                        <Box>
                          <IconCircleArrow
                            color={hoveredId === index ? "#DD005C" : "#66377B"}
                          />
                        </Box>
                        <Text
                          fontSize={"14px"}
                          fontWeight={600}
                          color={hoveredId === index ? "#DD005C" : "#66377B"}
                          display={"flex"}
                          justifyContent={"end"}
                          alignItems={"end"}
                        >
                          Дэлгэрэнгүй
                        </Text>
                      </Link>
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
                    paddingY={"24px"}
                    position={"relative"}
                  >
                    <Box
                      position={"absolute"}
                      left={0}
                      top={0}
                      borderRadius={"16px"}
                    >
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
                      paddingBottom={"24px"}
                      textAlign={"center"}
                      className="uppercase"
                      paddingX={"34px"}
                    >
                      {e?.title}
                    </Text>
                    <Link
                      href={`/citizens/${e.id}`}
                      display={"flex"}
                      alignItems={"center"}
                      gap={"8px"}
                    >
                      <Box>
                        <IconCircleArrow
                          color={hoveredId === index ? "#DD005C" : "#66377B"}
                        />
                      </Box>
                      <Text
                        fontSize={"14px"}
                        fontWeight={600}
                        color={hoveredId === index ? "#DD005C" : "#66377B"}
                        display={"flex"}
                        justifyContent={"end"}
                        alignItems={"end"}
                      >
                        Дэлгэрэнгүй
                      </Text>
                    </Link>
                  </Box>
                </GridItem>
              );
            }
          })}
        </Grid>
        {!isMore && dota.length > 6 ? (
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
    </>
  );
};
