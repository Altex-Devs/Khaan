"use client";

import { IconArrowDown, IconCircleArrow, Shadow } from "@/assets";
import { db } from "@/firebase/firebase";

import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Link,
  Text
} from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { default as backGroundo, default as mobileBg } from "../../assets/pics/irgedAndBaiguullaga6.png";
import Loading from "@/app/loading";

export const CitizensPage = () => {

  const [locale, setLocale] = useState("mn");
  if (typeof window !== "undefined") {
    window.onbeforeunload = () => {
      localStorage.setItem("language_local", "mn");
    };
  }
  const intl = useIntl();
  const [dota, setDota] = useState([]);
  const [category, setCategory] = useState("citizens_preview");
  const [isMore, setIsMore] = useState(false);
  const [hoveredId, setHoveredId] = useState<any>();
  const [filterVal, setFilterVal] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (category: any, filterVal: any, limit_: number) => {
    try {
      const filter = filterVal ? where("typeCode", "==", filterVal) : where("all", "==", "1");
      let q = query(collection(db, category), filter);
      const data: any = [];
      await getDocs(q).then(querySnapshot => {
        querySnapshot.forEach(doc => {
          data.push({ ...doc.data(), id: doc.id });
        })
        setDota(data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false)
    }
  };
  useEffect(() => {
    changeLang();
    fetchData(category, filterVal, 8);
  }, [category, filterVal]);

  // const loadMore = () => {
  //   fetchData(category, "", 26);
  // };

  function changeLang() {
    const l = localStorage.getItem("language_local");
    if (l) {
      setLocale(l);
    } else {
      localStorage.setItem("language_local", "mn");
    }
  };
  return (
    <>
      <Box
        position={"relative"}
        width={"100vw"}
        paddingTop={{ xl: "10vh", base: "75px" }}
        paddingBottom={"40px"}
      >
        <Image
          src={backGroundo.src}
          width="100%"
          height={"100%"}
          display={{ xl: "block", base: "none" }}
          alt="backgroundImage"
        />
        <Image
          src={mobileBg.src}
          width="100%"
          display={{ xl: "none", base: "block" }}
          alt="backgroundImage"
          height="330px"
          objectFit="cover"
          objectPosition="center"
        />
        <Box
          position={"absolute"}
          bottom={{ xl: "11vh", base: "80px" }}
          textAlign="center"
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            width={"full"}
          >
            <Box color={"#ffffff"} width={"full"}>
              <Box>
                <Box
                  fontSize={{ xl: "18x", base: "1.2rem" }}
                  fontWeight={700}
                  textTransform="uppercase"
                  fontStyle={"normal"}
                  lineHeight={{ xl: "28px", base: "24px" }}
                  textAlign="center"
                  paddingBottom={{ xl: "8px", base: "0.08rem" }}
                >
                  <FormattedMessage id="citizen_insurance" />
                </Box>
                <Box
                  fontSize={{ xl: "18px", base: "14px" }}
                  fontWeight={400}
                  fontStyle={"normal"}
                  textAlign="center"
                  lineHeight={{ xl: "24px", base: "1rem" }}
                  height={{ xl: "full", base: "90px" }}
                >
                  <Box
                    height={{ xl: "72px" }}
                    paddingX={{ xl: "10.9vw", base: "3.72vw" }}
                  >
                    <FormattedMessage id="citizen_insurance_desc" />
                  </Box>
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
        overflowX={"hidden"}
      >
        <Box
          marginBottom={"24px"}
          fontSize={{ xl: "14px", base: "12px" }}
          fontStyle={"normal"}
          fontWeight={500}
          display={"flex"}
          flexWrap={{ xl: "wrap", base: "nowrap" }}
          justifyContent={{ xl: "center" }}
          gap={{ xl: "16px", base: "8px" }}
          overflowX={"scroll"}
        >
          <Box
            onClick={() => {
              setFilterVal("");
              setIsMore(false);
            }}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            color={filterVal === "" ? "#ffffff" : "#66377B"}
            paddingX={{ xl: "16px", base: "12px" }}
            borderRadius={"23px"}
            paddingY={"13px"}
            width={"max"}
            display={"block"}
            whiteSpace={"nowrap"}
            bg={filterVal === "" ? "#66377B" : "#F0EBF2"}
          >
            <FormattedMessage id="all" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("HEALTH");
              setIsMore(false);
            }}
            color={
              filterVal === "HEALTH" ? "#ffffff" : "#66377B"
            }
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "HEALTH" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            width={"max"}
            whiteSpace={"nowrap"}
            paddingY={"13px"}
          >
            <FormattedMessage id="health" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("ASSET");
              setIsMore(false);
            }}
            color={filterVal === "ASSET" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "ASSET" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
            width={"max"}
            whiteSpace={"nowrap"}
          >
            <FormattedMessage id="asset" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("LBLTY");
              setIsMore(false);
            }}
            color={filterVal === "LBLTY" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "LBLTY" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
            width={"max"}
            whiteSpace={"nowrap"}
          >
            <FormattedMessage id="liability" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("FNNCL");
              setIsMore(false);
            }}
            color={filterVal === "FNNCL" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "FNNCL" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
            width={"max"}
            whiteSpace={"nowrap"}
          >
            <FormattedMessage id="financial" />
          </Box>
        </Box>
        <Grid
          templateColumns={{ xl: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
          gap={{ xl: "24px", base: "16px" }}
          width={"100%"}
          marginBottom={{
            xl: "4.8vh",
            base: isMore ? "50px" : "20px",
          }}
        >
          {loading ? (
            <Loading />
          ) : (
            dota.map((e: any, index: any) => {
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
                          display={{ xl: "block", base: "none" }}
                          className="uppercase"
                          paddingX={{ xl: "34px", base: "12px" }}
                        >
                          {intl.locale === 'mn' ? e?.title : e?.title2}
                        </Text>
                        <Text
                          color={"#3B4856"}
                          lineHeight={{ xl: "20px", base: "10px" }}
                          fontWeight={500}
                          fontSize={{ xl: "14px", base: "10px" }}
                          paddingBottom={{ xl: "24px", base: "0px" }}
                          textAlign={"center"}
                          display={{ xl: "none", base: "block" }}
                          className="uppercase"
                          paddingX={{ xl: "34px", base: "12px" }}
                          dangerouslySetInnerHTML={{ __html: e?.titleCard }}
                        />
                        <Link
                          href={`/retail/${e.id}`}
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
                            <FormattedMessage id="more" />
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
                          display={{ xl: "block", base: "none" }}
                          textAlign={"center"}
                          className="uppercase"
                          paddingX={{ xl: "34px", base: "12px" }}
                        >
                          {e?.title}
                        </Text>
                        <Text
                          color={"#3B4856"}
                          lineHeight={"20px"}
                          fontWeight={500}
                          fontSize={"14px"}
                          paddingBottom={"24px"}
                          display={{ xl: "none", base: "block" }}
                          textAlign={"center"}
                          className="uppercase"
                          paddingX={{ xl: "34px", base: "12px" }}
                          dangerouslySetInnerHTML={{ __html: e?.titleCard }}
                        />

                        <Link
                          href={`/retail/${e.id}`}
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
                            <FormattedMessage id="more" />
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
                        display={{ xl: "block", base: "none" }}
                        className="uppercase"
                        paddingX={{ xl: "34px", base: "12px" }}
                      >
                        {e?.title}
                      </Text>
                      <Text
                        color={"#3B4856"}
                        lineHeight={"20px"}
                        fontWeight={500}
                        fontSize={"14px"}
                        paddingBottom={"24px"}
                        display={{ xl: "none", base: "block" }}
                        textAlign={"center"}
                        className="uppercase"
                        paddingX={{ xl: "34px", base: "12px" }}
                        dangerouslySetInnerHTML={{ __html: e?.titleCard }}
                      />
                      <Link
                        href={`/retail/${e.id}`}
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
                          <FormattedMessage id="more" />
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
                        display={{ xl: "block", base: "none" }}
                        className="uppercase"
                        paddingX={{ xl: "34px", base: "12px" }}
                      >
                        {e?.title}
                      </Text>
                      <Text
                        color={"#3B4856"}
                        lineHeight={"20px"}
                        fontWeight={500}
                        fontSize={"14px"}
                        display={{ xl: "none", base: "block" }}
                        paddingBottom={"24px"}
                        textAlign={"center"}
                        className="uppercase"
                        paddingX={{ xl: "34px", base: "12px" }}
                        dangerouslySetInnerHTML={{ __html: e?.titleCard }}
                      />
                      <Link
                        href={`/retail/${e.id}`}
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
                          <FormattedMessage id="more" />
                        </Text>
                      </Link>
                    </Box>
                  </GridItem>
                );
              }
            })
          )}
        </Grid>
        {!isMore && dota.length > 6 ? (
          <Button
            colorScheme="outlineButton"
            marginBottom={{ xl: "0px", base: "60px" }}
            variant="outline"
            color={"#66377B"}
            fontSize={"16px"}
            fontWeight={600}
            borderRadius={"64px"}
            display={"flex"}
            gap={"8px"}
            onClick={() => {
              // loadMore();
              setIsMore(true);
            }}
          >
            <IconArrowDown />
            <FormattedMessage id="showAll" />
          </Button>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};
