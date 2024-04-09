/* eslint-disable jsx-a11y/alt-text */
"use client";

import Loading from "@/app/loading";
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
import { default as backGroundo, default as mobileBg } from "../../assets/pics/baiguullagaBG6.png";

export const CompaniesPage = () => {
  const intl = useIntl();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("companies_preview");
  const [isMore, setIsMore] = useState(false);
  const [hoveredId, setHoveredId] = useState<any>();
  const [filterVal, setFilterVal] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (category: any, filterVal: any) => {
    try {
      const filter = filterVal ? where("typeCode", "array-contains", filterVal) : where("all", "==", "1");
      const q = query(collection(db, category), filter);
      const data: any = [];
      await getDocs(q).then(querySnapshot => {
        querySnapshot.forEach(doc => {
          data.push({ ...doc.data(), id: doc.id });
        })
        setData(data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchData(category, filterVal);
  }, [category, filterVal]);
  return (
    <>
      <Box
        position={"relative"}
        width={"100vw"}
        paddingTop={{ xl: "10vh", base: "75px" }}
        paddingBottom={"40px"}
      >
        <Image
          display={{ xl: "block", base: "none" }}
          src={backGroundo.src}
          w={"100%"}
          height={"100%"}
        />
        <Image
          display={{ xl: "none", base: "block" }}
          src={mobileBg.src}
          alt={"Company background Image"}
          w="100%"
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
            <Box color={"#ffffff"} w={"full"}>
              <Box width={{ xl: "83.3vw", base: "full" }} mx={{ xl: "8.33vw" }}>
                <Box
                  fontSize={{ xl: "18px", base: "1.2rem" }}
                  fontWeight={700}
                  textTransform="uppercase"
                  fontStyle={"normal"}
                  textAlign="center"
                  paddingBottom={{ xl: "8px", base: "0.08rem" }}
                  lineHeight={{ xl: "28px", base: "24px" }}
                >
                  <FormattedMessage id="corporate_insurance" />
                </Box>
                <Box
                  fontSize={{ xl: "18px", base: "14px" }}
                  fontWeight={400}
                  fontStyle={"normal"}
                  textAlign="center"
                  lineHeight={{ xl: "24px", base: "1rem" }}
                  height={{ xl: "full", base: "64px" }}
                >
                  <Box
                    height={{ xl: "72px" }}
                    paddingX={{ xl: "106px", base: "3.72vw" }}
                  >
                    <FormattedMessage id="corporate_ins_desc" />
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
        justifyContent={"space-between"}
        alignItems={{ xl: "center" }}
        backgroundColor={"#EBEDEE"}
      >
        <Box
          marginBottom={"24px"}
          fontSize={{ xl: "14px", base: "12px" }}
          fontStyle={"normal"}
          fontWeight={500}
          display={{ xl: "flex", base: "inline-flex" }}
          gap={{ xl: "16px", base: "8px" }}
          maxW={{ xl: "900px", base: "full" }}
          flexWrap={{ xl: "wrap" }}
          overflowX={"auto"}
          justifyContent={{ xl: "center" }}
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
            whiteSpace={"nowrap"}
            bg={filterVal === "" ? "#66377B" : "#F0EBF2"}
          >
            <FormattedMessage id="all" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("AGTR");
              setIsMore(false);
            }}
            color={filterVal === "AGTR" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "AGTR" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
            whiteSpace={"nowrap"}
          >
            <FormattedMessage id="agriculture" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("MNNG");
              setIsMore(false);
            }}
            color={filterVal === "MNNG" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "MNNG" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
            whiteSpace={"nowrap"}
          >
            <FormattedMessage id="mining" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("MFTRG");
              setIsMore(false);
            }}
            color={filterVal === "MFTRG" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "MFTRG" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
            whiteSpace={"nowrap"}
          >
            <FormattedMessage id="production" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("CNSTN");
              setIsMore(false);
            }}
            color={filterVal === "CNSTN" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "CNSTN" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
            whiteSpace={"nowrap"}
          >
            <FormattedMessage id="building" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("TTA");
              setIsMore(false);
            }}
            color={filterVal === "TTA" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "TTA" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
            whiteSpace={"nowrap"}
          >
            <FormattedMessage id="travel_trans_agency" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("FNNC");
              setIsMore(false);
            }}
            color={filterVal === "FNNC" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "FNNC" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
            whiteSpace={"nowrap"}
          >
            <FormattedMessage id="finance" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("EDCTN");
              setIsMore(false);
            }}
            color={filterVal === "EDCTN" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "EDCTN" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            whiteSpace={"nowrap"}
            paddingY={"13px"}
          >
            <FormattedMessage id="education" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("HEALTH");
              setIsMore(false);
            }}
            color={filterVal === "HEALTH" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "HEALTH" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
            whiteSpace={"nowrap"}
          >
            <FormattedMessage id="health_only" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("SRVC");
              setIsMore(false);
            }}
            color={filterVal === "SRVC" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "SRVC" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
            whiteSpace={"nowrap"}
          >
            <FormattedMessage id="service" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("FO");
              setIsMore(false);
            }}
            color={filterVal === "FO" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "FO" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            paddingY={"13px"}
            whiteSpace={"nowrap"}
          >
            <FormattedMessage id="fuel_and_oil" />
          </Box>
          <Box
            onClick={() => {
              setFilterVal("OTHR");
              setIsMore(false);
            }}
            color={filterVal === "OTHR" ? "#ffffff" : "#66377B"}
            cursor={"pointer"}
            border={"1px solid #D1C3D7"}
            bg={filterVal === "OTHR" ? "#66377B" : "#F0EBF2"}
            paddingX={"16px"}
            borderRadius={"23px"}
            whiteSpace={"nowrap"}
            paddingY={"13px"}
          >
            <FormattedMessage id="other" />
          </Box>
        </Box>
        <Grid
          borderRadius={"16px"}
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
            data.map((e: any, index: any) => {
              if (!isMore) {
                if (index < 6)
                  return (
                    <GridItem
                      key={e.id}
                      boxShadow={"0px 0px 8px 0px #b6b6b647"}
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
                          display={{ xl: "block", base: "none" }}
                          className="uppercase"
                          paddingBottom={{ xl: "24px", base: "0px" }}
                        >
                          {intl.locale === 'mn' ? e.title : e.title2}
                        </Text>
                        <Text
                          color={"#3B4856"}
                          lineHeight={{ xl: "20px", base: "10px" }}
                          fontWeight={500}
                          paddingX={"34px"}
                          fontSize={{ xl: "14px", base: "10px" }}
                          textAlign={"center"}
                          display={{ xl: "none", base: "block" }}
                          className="uppercase"
                          paddingBottom={{ xl: "24px", base: "0px" }}
                          dangerouslySetInnerHTML={{ __html: e?.titleCard }}
                        />
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
                          <Shadow color={e?.color} />
                        </Box>
                        <Box
                          paddingBottom={"16px"}
                          borderRadius={"16px"}
                          dangerouslySetInnerHTML={{ __html: e.icon }}
                        />{" "}
                        <Text
                          color={"#3B4856"}
                          lineHeight={"20px"}
                          fontWeight={500}
                          paddingX={{ xl: "34px", base: "12px" }}
                          fontSize={"14px"}
                          textAlign={"center"}
                          display={{ xl: "block", base: "none" }}
                          className="uppercase"
                          paddingBottom={"24px"}
                        >
                          {e.title}
                        </Text>
                        <Text
                          color={"#3B4856"}
                          lineHeight={"20px"}
                          fontWeight={500}
                          paddingX={{ xl: "34px", base: "12px" }}
                          fontSize={"14px"}
                          display={{ xl: "none", base: "block" }}
                          textAlign={"center"}
                          className="uppercase"
                          paddingBottom={"24px"}
                          dangerouslySetInnerHTML={{ __html: e?.titleCard }}
                        />
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
                        display={{ xl: "block", base: "none" }}
                        paddingX={"34px"}
                      >
                        {e?.title}
                      </Text>
                      <Text
                        color={"#3B4856"}
                        lineHeight={"20px"}
                        fontWeight={500}
                        fontSize={"14px"}
                        display={{ xl: "none", base: "block" }}
                        textAlign={"center"}
                        className="uppercase"
                        paddingBottom={"24px"}
                        paddingX={"34px"}
                        dangerouslySetInnerHTML={{ __html: e?.titleCard }}
                      />
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
                        textAlign={"center"}
                        display={{ xl: "block", base: "none" }}
                        className="uppercase"
                        paddingBottom={"24px"}
                        paddingX={{ xl: "34px", base: "12px" }}
                      >
                        {e?.title}
                      </Text>
                      <Text
                        color={"#3B4856"}
                        lineHeight={"20px"}
                        fontWeight={500}
                        fontSize={"14px"}
                        textAlign={"center"}
                        className="uppercase"
                        paddingBottom={"24px"}
                        display={{ xl: "none", base: "block" }}
                        paddingX={{ xl: "34px", base: "12px" }}
                        dangerouslySetInnerHTML={{ __html: e?.titleCard }}
                      />
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
        {!isMore && data.length > 6 ? (
          <Button
            marginBottom={{ xl: "0px", base: "60px" }}
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
            <FormattedMessage id="showAll" />
          </Button>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};
