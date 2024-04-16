"use client";

import { IconPDF } from "@/assets";
import { db } from "@/firebase/firebase";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr
} from "@chakra-ui/react";
import { collection, getDocs, query } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

export const ReportPage = () => {
  const intl = useIntl();
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
          fontSize={{ xl: "18px", base: "1.2rem" }}
          lineHeight={"28px"}
          color={"#3B4856"}
        >
          <FormattedMessage id="financial_report" />
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
                      fontSize={{ xl: "18px", base: "18px" }}
                      fontWeight={700}
                      lineHeight={"28px"}
                    >
                      {intl.locale === "mn" ? (
                        <div>
                          <span>{selected}</span>
                          &nbsp;
                          <span>оны</span>
                          &nbsp;
                          <span>{season.split("_")[1]}</span>
                          <span>-р улирал</span>
                        </div>
                      ) : (
                        <div>
                          <span>{season.split("_")[1]}</span>
                          <span>
                            {season.split("_")[1] === "1"
                              ? "st"
                              : season.split("_")[1] === "2"
                                ? "nd"
                                : season.split("_")[1] === "3"
                                  ? "rd"
                                  : "th"}
                          </span>
                          &nbsp;
                          <span>quarter</span>
                          &nbsp;
                          <span>{selected}</span>
                        </div>
                      )}
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
                          <FormattedMessage id="show" />
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
        // marginTop={{ xl: "4.8vh", base: "20px" }}
        >
          <Text
            className="uppercase"
            fontWeight={700}
            fontSize={{ xl: "18px", base: "1.2rem" }}
            lineHeight={"28px"}
            color={"#3B4856"}
            textAlign={"center"}
          >
            <FormattedMessage id="code_of_corporate_governance" />
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
            fontSize={{ xl: "18px", base: "18px" }}
            fontWeight={700}
            lineHeight={"28px"}
          >
            <FormattedMessage id="ethical_procedures" />
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
                <FormattedMessage id="show" />
              </Text>
            </Box>
          </a>
        </Box>
        <Box
          color={"black"}
          display={"flex"}
          justifyContent={"center"}
          marginTop={{ xl: "4.8vh", base: "20px" }}
        >
          <Text
            className="uppercase"
            fontWeight={700}
            fontSize={{ xl: "18px", base: "1.2rem" }}
            lineHeight={"28px"}
            color={"#3B4856"}
            textAlign={"center"}
          >
            <FormattedMessage id="action_report" />
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
            fontSize={{ xl: "18px", base: "18px" }}
            fontWeight={700}
            lineHeight={"28px"}
          >
            <FormattedMessage id="season_4" />
          </Text>
          <a
            href={
              "https://firebasestorage.googleapis.com/v0/b/khaan-e3b0c.appspot.com/o/report%2F%D2%AE%D0%B8%CC%86%D0%BB_%D0%B0%D0%B6%D0%B8%D0%BB%D0%BB%D0%B0%D0%B3%D0%B0%D0%B0%D0%BD%D1%8B_%D1%82%D0%B0%D0%B8%CC%86%D0%BB%D0%B0%D0%BD.pdf?alt=media&token=38080ebd-378e-428b-a695-0a1e0942c4eb"
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
                <FormattedMessage id="show" />
              </Text>
            </Box>
          </a>
        </Box>
        <Box
          color={"black"}
          display={"flex"}
          justifyContent={"center"}
          marginTop={{ xl: "4.8vh", base: "20px" }}
        >
          <Text
            className="uppercase"
            fontWeight={700}
            fontSize={{ xl: "18px", base: "1.2rem" }}
            lineHeight={"28px"}
            color={"#3B4856"}
            textAlign={"center"}
          >
            <FormattedMessage id="audit_report" />
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
            fontSize={{ xl: "18px", base: "18px" }}
            fontWeight={700}
            lineHeight={"28px"}
          >
            <FormattedMessage id="year_2023" />
          </Text>
          <a
            href={
              "https://firebasestorage.googleapis.com/v0/b/khaan-e3b0c.appspot.com/o/report%2F%D0%B0%D1%83%D0%B4%D0%B8%D1%82%D0%BB%D0%B0%D0%B3%D0%B4%D1%81%D0%B0%D0%BD%20%D1%82%D0%B0%D0%B8%CC%86%D0%BB%D0%B0%D0%BD%20-2023%20%D0%BE%D0%BD.pdf?alt=media&token=0d128521-46d7-4a9b-ae2d-1205778ba29a"
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
                <FormattedMessage id="show" />
              </Text>
            </Box>
          </a>
        </Box>
        <Box
          color={"black"}
          display={"flex"}
          justifyContent={"center"}
          marginTop={{ xl: "4.8vh", base: "20px" }}
        >
          <Text
            className="uppercase"
            fontWeight={700}
            fontSize={{ xl: "18px", base: "1.2rem" }}
            lineHeight={"28px"}
            color={"#3B4856"}
            textAlign={"center"}
          >
            <FormattedMessage id="adeq_solv_ratio" />
          </Text>
        </Box>
        <Box
          color={"black"}
          display={"flex"}
          justifyContent={"right"}
        >
          <Text
            fontWeight={400}
            fontSize={{ xl: "18px", base: "1.2rem" }}
            lineHeight={"28px"}
            color={"#3B4856"}
            textAlign={"right"}
          >
            <FormattedMessage id="report_date" />
          </Text>
        </Box>
        <Box
          display={"block"}

        >
          <TableContainer
            backgroundColor={"#FFFFFF"}
            borderRadius={"15px"}
            borderWidth={"1px"}
            borderColor={"#C4C7C8"}
            overflowX={"auto"}
            whiteSpace={"normal"}
            border={"0px"}
          // textTransform={}
          >
            <Table
              variant={"unstyled"}
            >
              <Thead fontSize={"18px"} color={"#3B4856"}>
                <Tr
                  borderBottomWidth={"1px"}
                  borderColor={"#C4C7C8"}>
                  <Td
                    fontWeight={700}
                    borderRightWidth={"1px"}
                    borderColor={"#C4C7C8"}
                    width={{ xl: "30%", base: "full" }}
                    paddingY={"24px"}
                    paddingX={"18px"}
                    textAlign={"center"}
                    whiteSpace={"nowrap"}
                    fontSize={{ xl: "18px", base: "1.2rem" }}
                    textTransform={"capitalize"}
                  >
                    <FormattedMessage id="idicator" />
                  </Td>
                  <Td
                    fontWeight={700}
                    borderRightWidth={"1px"}
                    borderColor={"#C4C7C8"}
                    width={{ xl: "18%", base: "full" }}
                    paddingY={"24px"}
                    paddingX={"18px"}
                    textAlign={"center"}
                    whiteSpace={"nowrap"}
                    fontSize={{ xl: "18px", base: "1.2rem" }}
                  >
                    <FormattedMessage id="min_size" />
                  </Td>
                  <Td
                    fontWeight={700}
                    width={{ xl: "18%", base: "full" }}
                    paddingY={"24px"}
                    paddingX={"18px"}
                    textAlign={"center"}
                    whiteSpace={"nowrap"}
                    fontSize={{ xl: "18px", base: "1.2rem" }}
                    textTransform={"capitalize"}
                  >
                    <FormattedMessage id="amount" />
                  </Td>
                </Tr>
              </Thead>
              <Tbody fontSize={"18px"} color={"#3B4856"} fontWeight={400}>
                <Tr borderBottomWidth={"1px"} borderColor={"#C4C7C8"}>
                  <Td
                    borderRightWidth={"1px"}
                    borderColor={"#C4C7C8"}
                    textAlign={"center"}
                  >
                    <FormattedMessage id="capital_ratio" />
                  </Td>
                  <Td
                    borderRightWidth={"1px"}
                    borderColor={"#C4C7C8"}
                    textAlign={"center"}
                  >
                    144%
                  </Td>
                  <Td
                    textAlign={"center"}
                  >
                    145%
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    borderRightWidth={"1px"}
                    borderColor={"#C4C7C8"}
                    textAlign={"center"}
                  >
                    <FormattedMessage id="unauthorized_ration" />
                  </Td>
                  <Td
                    borderRightWidth={"1px"}
                    borderColor={"#C4C7C8"}
                    textAlign={"center"}
                  >
                    10%
                  </Td>
                  <Td
                    textAlign={"center"}
                  >
                    9%
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box >
  );
};
