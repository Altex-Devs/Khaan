"use client";

import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { data } from "./citizenData";
import { IconArrowDown, IconCircleArrow, Shadow } from "@/assets";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { collection, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export const CitizensPage = () => {
  const router = useRouter();
  const [dota, setDota] = useState([]);
  const [category, setCategory] = useState("citizens");
  const [typpe, setTyppe] = useState("")
  console.log('typpe:',typpe)
  console.log('dota:', dota)
  const pushAbout = () => {
    router.push("/companies/companiesDetails");
  };

  const fetchData = async (category:any, typpe:any) => {
    try {
      const q = query(collection(db, category));
      const querySnapshot = await getDocs(q);
      const data: any = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const filteredData = typpe ? data.filter(item => item.type === typpe) : data;
  
      console.log(data);
      setDota(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData(category,typpe);
  }, [category,typpe]);
  return (
    <>
    <Box
      backgroundColor={"#F6F6F6"}
      paddingBottom={"18vh"}
      paddingTop={"20vh"}
      paddingX={"8.3vw"}
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box marginBottom={'24px'} fontSize={'12px'} fontStyle={'normal'} fontWeight={500} display={'flex'} gap={'16px'} >
        <Box onClick={() => setTyppe("")} cursor={'pointer'} border={'1px solid #D1C3D7'} color={typpe === "" ? '#ffffff' : "#66377B"} paddingX={'16px'} borderRadius={'23px'} paddingY={'13px'}   bg={typpe === "" ? '#66377B' : '#F0EBF2'}>Бүгд</Box>
        <Box onClick={() => setTyppe("Эрүүл мэнд , гэнэтийн осол")} color={typpe === "Эрүүл мэнд , гэнэтийн осол" ? '#ffffff' : "#66377B"} cursor={'pointer'} border={'1px solid #D1C3D7'} bg={typpe === "Эрүүл мэнд , гэнэтийн осол" ? "#66377B" : "#F0EBF2"} paddingX={'16px'} borderRadius={'23px'} paddingY={'13px'}>Эрүүл мэнд, гэнэтийн осол</Box>
        <Box onClick={() => setTyppe("Хөрөнгийн даатгал")} color={typpe === "Хөрөнгийн даатгал" ? '#ffffff' : "#66377B"} cursor={'pointer'} border={'1px solid #D1C3D7'} bg={typpe === "Хөрөнгийн даатгал" ? '#66377B' : '#F0EBF2'} paddingX={'16px'} borderRadius={'23px'} paddingY={'13px'}>Хөрөнгийн даатгал</Box>
        <Box onClick={() => setTyppe("Хариуцлагын даатгал")} color={typpe === "Хариуцлагын даатгал" ? '#ffffff' : "#66377B"} cursor={'pointer'} border={'1px solid #D1C3D7'} bg={typpe === "Хариуцлагын даатгал" ? '#66377B' : '#F0EBF2'} paddingX={'16px'} borderRadius={'23px'} paddingY={'13px'}>Хариуцлагын даатгал</Box>
        <Box onClick={() => setTyppe("Санхүүгийн даатгал")} color={typpe === "Санхүүгийн даатгал" ? '#ffffff' : "#66377B"} cursor={'pointer'} border={'1px solid #D1C3D7'} bg={typpe === "Санхүүгийн даатгал" ? '#66377B' : '#F0EBF2'} paddingX={'16px'} borderRadius={'23px'} paddingY={'13px'}>Санхүүгийн даатгал</Box>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={"24px"} width={"100%"}>
        {dota.map((e: any) => {
          return (
            <GridItem
              bgGradient="linear(257deg, #F9FAFB 1.28%, #FAFBFB 100%)"
              w={"100%"}
              key={e?.id}
              boxShadow={"0px 0px 4px 0px #F1F1F1"}
              borderRadius={"16px"}
            >
              <Box
                height={"23vh"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                paddingX={"34px"}
                paddingY={"24px"}
                position={"relative"}
              >
                {/* <Box position={"absolute"} left={0} top={0}>
                  <Shadow color={e.color} />
                </Box> */}
                <Image src={e?.icon} paddingBottom={"16px"} alt="icon" />
                <Text
                  color={"#3B4856"}
                  lineHeight={"20px"}
                  fontWeight={500}
                  fontSize={"14px"}
                  textAlign={"center"}
                  paddingBottom={"44px"}
                  className="uppercase"
                >
                  {e?.title}
                </Text>
                <Box
                  cursor={"pointer"}
                  onClick={pushAbout}
                  display={"flex"}
                  alignItems={"center"}
                  gap={"8px"}
                >
                  <Box>
                    <IconCircleArrow />
                  </Box>
                  <Text fontSize={"14px"} fontWeight={600} color={"#66377B"}>
                    Дэлгэрэнгүй
                  </Text>
                </Box>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
      <Button
        colorScheme="outlineButton"
        variant="outline"
        color={"#66377B"}
        fontSize={"16px"}
        fontWeight={600}
        borderRadius={"64px"}
        display={"flex"}
        gap={"8px"}
      >
        <IconArrowDown />
        Бүгдийг харах
      </Button>
    </Box>
    </>
  );
};
