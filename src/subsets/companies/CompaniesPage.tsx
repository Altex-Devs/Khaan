/* eslint-disable jsx-a11y/alt-text */
"use client";

import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Link,
  LinkBox,
  Text,
  Wrap,
  WrapItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BaiguullgaBG, IconArrowDown, IconCircleArrow, Shadow } from "@/assets";
import backGroundo from "../../assets/pics/irgedAndBaiguullaga.png";
import { useRouter } from "next/navigation";
import { getDocs } from "firebase/firestore";
import { collection, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import mobileBg from "../../assets/pics/mobileBg.png";

export const CompaniesPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("companies");
  const [typpe, setTyppe] = useState("");
  const [isMore, setIsMore] = useState(false);
  const [hoveredId, setHoveredId] = useState<any>();
  const imageSrc = useBreakpointValue({
    md: backGroundo.src,
    base: mobileBg.src,
  });
  const fetchData = async (category: any, typpe: any) => {
    try {
      const q = query(collection(db, category));
      const querySnapshot = await getDocs(q);
      const data: any = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("data:", data);
      const filteredData = typpe
        ? data.filter((item: any) => item.type.includes(typpe))
        : data;

      setData(filteredData);
      console.log("filter", filteredData);
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
        <Image src={imageSrc} w={"100%"} height={"100%"} />
        <Box position={"absolute"} top={"10vh"} textAlign="center">
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            width={"full"}
          >
            <Box color={"#ffffff"} width={"full"} paddingTop={"95px"}>
              <Box
                fontSize={"24px"}
                fontWeight={700}
                textTransform="uppercase"
                fontStyle={"normal"}
                textAlign="center"
                paddingBottom={{ xl: "16px", base: "8px" }}
              >
                байгууллагын даатгал
              </Box>
              <Box
                fontSize={{ xl: "24px", base: "14px" }}
                fontWeight={400}
                fontStyle={"normal"}
                textAlign="center"
              >
                <Box paddingX={{ xl: "15.69vw", base: "3.72vw" }}>
                  Байгууллагад зориулсан бүтээгдэхүүн үйлчилгээ нь байгууллагын
                  бизнесийн үйл ажиллагааны явцад гэнэтийн аюул осол,
                  давагдашгүй хүчин зүйлсийн улмаас ирээдүйд үүсэх санхүүгийн
                  эрсдэлээс хамгаална.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        paddingBottom={"11.75vh"}
        paddingX={{ xl: "8.3vw", base: "3.72vw" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        backgroundColor={"#EBEDEE"}
      >
        <Wrap
          marginBottom={"24px"}
          fontSize={{ xl: "12px", base: "11px" }}
          fontStyle={"normal"}
          fontWeight={500}
          display={"flex"}
          gap={{ xl: "16px", base: "8px" }}
          w={{ xl: "900px" }}
          justify="center"
        >
          <WrapItem
            onClick={() => {
              setTyppe("");
              setIsMore(false);
            }}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            color={typpe === "" ? "#ffffff" : "#66377B"}
            paddingX={{ xl: "16px", base: "12px" }}
            borderRadius={"23px"}
            paddingY={"13px"}
            bg={typpe === "" ? "#66377B" : "#F0EBF2"}
          >
            Бүгд
          </WrapItem>
          <WrapItem
            onClick={() => {
              setTyppe("Хөдөө аж ахуй");
              setIsMore(false);
            }}
            color={typpe === "Хөдөө аж ахуй" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={typpe === "Хөдөө аж ахуй" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
          >
            Хөдөө аж ахуй
          </WrapItem>
          <WrapItem
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
          </WrapItem>
          <WrapItem
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
          </WrapItem>
          <WrapItem
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
          </WrapItem>
          <WrapItem
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
          </WrapItem>
          <WrapItem
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
          </WrapItem>
          <WrapItem
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
          </WrapItem>
          <WrapItem
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
          </WrapItem>
          <WrapItem
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
          </WrapItem>
          <WrapItem
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
          </WrapItem>
          <WrapItem
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
          </WrapItem>
        </Wrap>
        <Grid
          borderRadius={"16px"}
          templateColumns={{ xl: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }}
          gap={{ xl: "24px", base: "16px" }}
          width={"100%"}
          marginBottom={"4.8vh"}
        >
          {data.map((e: any, index: any) => {
            if (!isMore) {
              if (index < 6)
                return (
                  <GridItem
                    key={e.id}
                    boxShadow={"0px 0px 8px 0px #F1F1F1"}
                    bgGradient="linear(257deg, #F9FAFB 1.28%, #FAFBFB 100%)"
                    borderRadius={"16px"}
                  >
                    <Box
                      height={{ xl: "192px" }}
                      display={{ xl: "flex", base: "none" }}
                      flexDirection={"column"}
                      alignItems={"center"}
                      position={"relative"}
                      paddingY={{ xl: "24px", base: "12px" }}
                    >
                      <Box
                        position={"absolute"}
                        left={0}
                        top={0}
                        borderRadius={"16px"}
                      >
                        <Shadow color={e?.color} />
                      </Box>
                      <Box
                        paddingBottom={{ xl: "16px", base: "8px" }}
                        borderRadius={"16px"}
                        dangerouslySetInnerHTML={{ __html: e.icon }}
                      />{" "}
                      <Text
                        color={"#3B4856"}
                        lineHeight={{ xl: "20px", base: "10px" }}
                        fontWeight={500}
                        paddingX={"34px"}
                        fontSize={{ xl: "14px", base: "10px" }}
                        textAlign={"center"}
                        className="uppercase"
                        paddingBottom={{ xl: "24px", base: "0px" }}
                      >
                        {e.title}
                      </Text>
                      <Link
                        href={`/companies/${e.id}`}
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
                    <Link href={`/citizens/${e.id}`}>
                      <Box
                        height={{ xl: "192px" }}
                        display={{ xl: "none", base: "flex" }}
                        flexDirection={"column"}
                        alignItems={"center"}
                        position={"relative"}
                        paddingY={{ xl: "24px", base: "12px" }}
                      >
                        <Box
                          position={"absolute"}
                          left={0}
                          top={0}
                          borderRadius={"16px"}
                        >
                          <Shadow color={e?.color} />
                        </Box>
                        <Box
                          paddingBottom={{ xl: "16px", base: "8px" }}
                          borderRadius={"16px"}
                          dangerouslySetInnerHTML={{ __html: e.icon }}
                        />{" "}
                        <Text
                          color={"#3B4856"}
                          lineHeight={{ xl: "20px", base: "10px" }}
                          fontWeight={500}
                          paddingX={{ xl: "34px", base: "12px" }}
                          fontSize={{ xl: "14px", base: "10px" }}
                          textAlign={"center"}
                          className="uppercase"
                          paddingBottom={{ xl: "24px", base: "0px" }}
                        >
                          {e.title}
                        </Text>
                      </Box>
                    </Link>
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
                    height={{ xl: "192px" }}
                    display={{ xl: "flex", base: "none" }}
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
                      textAlign={"center"}
                      className="uppercase"
                      paddingBottom={"24px"}
                      paddingX={"34px"}
                    >
                      {e?.title}
                    </Text>
                    <Link
                      href={`/companies/${e.id}`}
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
                  <Link href={`/citizens/${e.id}`}>
                    <Box
                      height={{ xl: "192px" }}
                      display={{ xl: "none", base: "flex" }}
                      flexDirection={"column"}
                      alignItems={"center"}
                      position={"relative"}
                      paddingY={{ xl: "24px", base: "12px" }}
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
                        paddingBottom={{ xl: "16px", base: "8px" }}
                        dangerouslySetInnerHTML={{ __html: e.icon }}
                      />
                      <Text
                        color={"#3B4856"}
                        lineHeight={{ xl: "20px", base: "10px" }}
                        fontWeight={500}
                        fontSize={{ xl: "14px", base: "10px" }}
                        textAlign={"center"}
                        className="uppercase"
                        paddingBottom={{ xl: "24px", base: "0px" }}
                        paddingX={{ xl: "34px", base: "12px" }}
                      >
                        {e?.title}
                      </Text>
                    </Box>
                  </Link>
                </GridItem>
              );
            }
          })}
        </Grid>
        {!isMore && data.length > 6 ? (
          <Button
            marginBottom={{ xl: "0px", base: "12px" }}
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
