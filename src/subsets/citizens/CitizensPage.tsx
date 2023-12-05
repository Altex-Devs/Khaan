"use client";

import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Colordata } from "./citizenData";
import { IconArrowDown, IconCircleArrow, Shadow } from "@/assets";
import { useRouter } from "next/navigation";
import backGroundo from "../../assets/pics/irgedAndBaiguullaga.png";
import mobileBg from "../../assets/pics/mobileBg.png";

import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { collection, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export const CitizensPage = () => {
  const router = useRouter();
  const imageSrc = useBreakpointValue({
    md: backGroundo.src,
    base: mobileBg.src,
  });

  const [dota, setDota] = useState([]);
  const [category, setCategory] = useState("citizens");
  const [typpe, setTyppe] = useState("");
  const [isMore, setIsMore] = useState(false);
  const [hoveredId, setHoveredId] = useState<any>();

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
          src={imageSrc}
          width="100%"
          height="100%"
          alt="backgroundImage"
        />
        <Box position={"absolute"} top={"10vh"} textAlign="center">
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            width={"full"}
          >
            <Box
              color={"#ffffff"}
              width={"full"}
              paddingTop={{ xl: "95px", base: "8.94vh" }}
            >
              <Box
                fontSize={"24px"}
                fontWeight={500}
                textTransform="uppercase"
                fontStyle={"normal"}
                textAlign="center"
                paddingBottom={{ xl: "16px", base: "8px" }}
              >
                иргэдийн даатгал
              </Box>
              <Box
                fontSize={{ xl: "24px", base: "14px" }}
                fontWeight={300}
                fontStyle={"normal"}
                textAlign="center"
                lineHeight={{ xl: "32px", base: "18px" }}
              >
                <Box paddingX={{ xl: "15.69vw", base: "3.72vw" }}>
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
        paddingX={{ xl: "8.3vw", base: "3.72vw" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={{ xl: "space-between" }}
        alignItems={{ xl: "center" }}
        width={"full"}
      >
        <Box
          marginBottom={"24px"}
          fontSize={{ xl: "12px", base: "11px" }}
          fontStyle={"normal"}
          fontWeight={500}
          display={"flex"}
          flexWrap={{ xl: "wrap", base: "nowrap" }} // Allow items to break onto a new line
          justifyContent={{ xl: "center" }}
          gap={{ xl: "16px", base: "8px" }}
          overflow={"scroll"}
          width={{ xl: "max", base: "1200px" }}
        >
          <Box
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
            width={"max"}
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
            width={"max"}
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
        <Grid
          templateColumns={{ xl: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
          gap={{ xl: "24px", base: "16px" }}
          width={"100%"}
          marginBottom={{ xl: "4.8vh", base: "40px" }}
        >
          {dota.map((e: any, index: any) => {
            if (!isMore) {
              if (index < 6)
                return (
                  <GridItem
                    bgGradient="linear(257deg, #F9FAFB 1.28%, #FAFBFB 100%)"
                    w={"100%"}
                    key={e?.id}
                    boxShadow={"0px 0px 8px 0px #b6b6b647"}
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
                        paddingBottom={{ xl: "24px", base: "0px" }}
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
                    <Box
                      height={{ xl: "192px" }}
                      display={{ xl: "none", base: "flex" }}
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
                        paddingX={{ xl: "34px", base: "12px" }}
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
                  boxShadow={"0px 0px 8px 0px #b6b6b647"}
                  borderRadius={"16px"}
                >
                  <Box
                    height={{ xl: "192px" }}
                    display={{ xl: "flex", base: "none" }}
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
                      paddingX={{ xl: "34px", base: "12px" }}
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
                  <Box
                    height={{ xl: "192px" }}
                    display={{ xl: "none", base: "flex" }}
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
                      paddingX={{ xl: "34px", base: "12px" }}
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
            }
          })}
        </Grid>
        {!isMore && dota.length > 6 ? (
          <Button
            colorScheme="outlineButton"
            marginBottom={{ xl: "0px", base: "40px" }}
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
