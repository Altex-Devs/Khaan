"use client";
import {
  Box,
  Button,
  Input,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { IconCheckboxCircle } from "@/assets";

// const testData = [
//   {
//     productname: "testProduct",
//     indemnityno: "testIndemnity",
//     receiverName: "testReceiverName",
//     requiredamt: "test",
//     bankacctno: "testBank",
//     processNo: 7,
//   },
//   {
//     productname: "testProduct1",
//     indemnityno: "testIndemnity1",
//     receiverName: "testReceiverName1",
//     requiredamt: "test1",
//     bankacctno: "testBank1",
//     processNo: 6,
//   },
//   {
//     productname: "testProduct2",
//     indemnityno: "testIndemnity2",
//     receiverName: "testReceiverName2",
//     requiredamt: "test2",
//     bankacctno: "testBank2",
//     processNo: 4,
//   },
//   {
//     productname: "testProduct3",
//     indemnityno: "testIndemnity3",
//     receiverName: "testReceiverName3",
//     requiredamt: "test3",
//     bankacctno: "testBank3",
//     processNo: 3,
//   },
// ];

export const CompCheck = () => {
  const [value, setValue] = useState("");
  const [datas, setDatas] = useState<any>();
  const [isIdCorrect, setIsIdCorrect] = useState<boolean>(false);

  const checkButton = () => {
    let withI = value;
    if (!value.includes("I")) withI = "I".concat(value);
    axios
      .post(
        "https://khd-xyp.crmc.mn:8087/api/xyp/IndemnityInfo-web",
        {
          IndemnityNo: withI,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then(function (response) {
        console.log(response.data?.retData.table);
        if (response.data?.retData?.table.length === 0) {
          setIsIdCorrect(true);
        } else {
          setIsIdCorrect(false);
          setDatas(response.data?.retData?.table[0]);
        }
        console.log(response.data?.retData?.table[0]);
      })
      .catch(function (error) {
        setIsIdCorrect(true);
        console.log(error);
      });
  };

  return (
    <Box
      paddingTop={"20.52vh"}
      paddingX={{ xl: "8.3vw", base: "3.72vw" }}
      paddingBottom={{ xl: "13vh", base: "140px" }}
      height={"100vh"}
      backgroundColor={"#EBEDEE"}
      overflowY={"scroll"}
      justifyItems={"center"}
    >
      <Box
        marginBottom={"40px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"4px"}
        paddingX={{ xl: "0px", base: "4.3vw" }}
      >
        <Box
          paddingTop={"40px"}
          color={"#3B4856"}
          fontSize={"18px"}
          fontWeight={400}
          paddingLeft={"4px"}
          whiteSpace={"nowrap"}
        >
          Нөхөн төлбөрийн дугаар оруулах
        </Box>
        <Box display={"flex"} gap={{ xl: "16px", base: "24px" }}>
          <Input
            backgroundColor={"#FFFFFF"}
            width={{ xl: "19.58vw", base: "full" }}
            borderColor={"#C4C7C8"}
            borderRadius={"30px"}
            borderWidth={"1px"}
            paddingY={"12px"}
            fontSize={"18px"}
            height={"48px"}
            placeholder="I1234567"
            color={"#3B4856"}
            onChange={(e) => setValue(e.target.value)}
            focusBorderColor={"#C4C7C8"}
          />
          <Button height={"full"} padding={0} onClick={checkButton}>
            <Box
              color={"#FFFFFF"}
              bgGradient="linear(to-r, #66377B, #DD005C)"
              paddingX={"24px"}
              borderWidth={"1px"}
              height={"50px"}
              fontSize={"16px"}
              borderRadius={"50px"}
              display={"flex"}
              alignItems={"center"}
            >
              Шалгах
            </Box>
          </Button>
        </Box>
        <Text
          display={isIdCorrect ? "block" : "none"}
          color={"#DF5F72"}
          paddingLeft={"4px"}
        >
          Таны нөхөн төлбөрийн дугаар буруу байна
        </Text>
      </Box>
      <Box display={datas?.length === 0 ? "block" : "block"}>
        <TableContainer
          backgroundColor={"#FFFFFF"}
          borderRadius={"8px"}
          borderWidth={"1px"}
          borderColor={"#C4C7C8"}
          overflowX={"auto"}
          whiteSpace={"normal"}
        >
          <Table variant={"unstyled"}>
            <Thead color={"#3B4856"} fontSize={"16px"}>
              <Tr borderBottomWidth={"1px"} borderColor={"#C4C7C8"}>
                <Th
                  fontWeight={600}
                  borderRightWidth={"1px"}
                  borderColor={"#C4C7C8"}
                  width={{ xl: "18%", base: "full" }}
                  paddingY={"24px"}
                  paddingX={"16px"}
                  textAlign={"left"}
                  whiteSpace={"nowrap"}
                >
                  Бүтээгдэхүүний нэр
                </Th>
                <Th
                  fontWeight={600}
                  borderRightWidth={"1px"}
                  borderColor={"#C4C7C8"}
                  width={"12.25%"}
                  paddingY={"24px"}
                  paddingX={"16px"}
                  textAlign={"center"}
                >
                  НТ-ийн дугаар
                </Th>
                <Th
                  fontWeight={600}
                  borderRightWidth={"1px"}
                  borderColor={"#C4C7C8"}
                  width={"17%"}
                  paddingY={"24px"}
                  paddingX={"16px"}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    textAlign={"center"}
                  >
                    Нөхөн төлбөр хүлээн авагчийн нэр
                  </Box>
                </Th>
                <Th
                  fontWeight={600}
                  borderRightWidth={"1px"}
                  borderColor={"#C4C7C8"}
                  width={"15%"}
                  paddingY={"24px"}
                  paddingX={"16px"}
                  textAlign={"center"}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    textAlign={"right"}
                  >
                    Нэхэмжилсэн дүн (MNT)
                  </Box>
                </Th>
                <Th
                  fontWeight={600}
                  borderRightWidth={"1px"}
                  borderColor={"#C4C7C8"}
                  width={"13%"}
                  paddingY={"24px"}
                  paddingX={"16px"}
                  textAlign={"center"}
                >
                  Дансны дугаар
                </Th>
                <Th
                  fontWeight={600}
                  borderRightWidth={"1px"}
                  borderColor={"#C4C7C8"}
                  paddingY={"24px"}
                  paddingX={"16px"}
                  textAlign={"center"}
                  width={"25.25%"}
                >
                  Төлөв
                </Th>
                <Th
                  fontWeight={600}
                  paddingY={"24px"}
                  paddingX={"16px"}
                  textAlign={"center"}
                  display={datas?.processNo === 6 ? "block" : "none"}
                >
                  Олгосон дүн
                </Th>
              </Tr>
            </Thead>
            <Tbody fontSize={"16px"} color={"#3B4856"} fontWeight={400}>
              {datas ? (
                <Tr borderBottomWidth={"1px"} borderColor={"#C4C7C8"}>
                  <Td
                    borderRightWidth={"1px"}
                    borderColor={"#C4C7C8"}
                    textAlign={"left"}
                  >
                    {datas?.productname}
                  </Td>
                  <Td
                    borderRightWidth={"1px"}
                    borderColor={"#C4C7C8"}
                    textAlign={"center"}
                  >
                    {datas?.indemnityno}
                  </Td>
                  <Td
                    borderRightWidth={"1px"}
                    borderColor={"#C4C7C8"}
                    textAlign={"center"}
                  >
                    {datas?.receiverName}
                  </Td>
                  <Td
                    borderRightWidth={"1px"}
                    borderColor={"#C4C7C8"}
                    textAlign={"right"}
                  >
                    {new Intl.NumberFormat().format(datas?.requiredamt)}
                  </Td>
                  <Td
                    borderRightWidth={"1px"}
                    borderColor={"#C4C7C8"}
                    textAlign={"center"}
                  >
                    {datas?.bankacctno}
                  </Td>
                  <Td borderRightWidth={"1px"} borderColor={"#C4C7C8"}>
                    <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
                      <Text
                        color={
                          datas?.processNo === 6
                            ? "#2D998B"
                            : datas?.processNo === 7
                            ? "#DF5F72"
                            : "Баримтыг шийдвэрлэж байгаа"
                        }
                        textAlign={"center"}
                      >
                        {datas?.processNo === 3
                          ? "Баримтыг хүлээн авсан"
                          : datas?.processNo === 4
                          ? "Баримтыг судалж байгаа"
                          : datas?.processNo === 5
                          ? "Баримтыг шийдвэрлэж байгаа"
                          : datas?.processNo === 6
                          ? "Нөхөн төлбөрийг олгосон"
                          : datas?.processNo === 7
                          ? "Нөхөн төлбөр олгохоос татгалзсан"
                          : ""}
                      </Text>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <IconCheckboxCircle
                          color={datas?.processNo >= 3 ? "#2D998B" : "#C4C7C8"}
                        />
                        <Box
                          height={"1px"}
                          backgroundColor={"#C4C7C8"}
                          width={"21px"}
                        />
                        <IconCheckboxCircle
                          color={datas?.processNo >= 4 ? "#2D998B" : "#C4C7C8"}
                        />
                        <Box
                          height={"1px"}
                          backgroundColor={"#C4C7C8"}
                          width={"21px"}
                        />
                        <IconCheckboxCircle
                          color={datas?.processNo >= 5 ? "#2D998B" : "#C4C7C8"}
                        />
                        <Box
                          height={"1px"}
                          backgroundColor={"#C4C7C8"}
                          width={"21px"}
                        />
                        <IconCheckboxCircle
                          color={
                            datas?.processNo < 6
                              ? "#C4C7C8"
                              : datas?.processNo === 7
                              ? "#DF5F72"
                              : "#2D998B"
                          }
                        />
                      </Box>
                    </Box>
                  </Td>
                  <Td
                    borderRightWidth={"1px"}
                    borderColor={"#C4C7C8"}
                    textAlign={"center"}
                    display={datas?.processNo === 6 ? "static" : "none"}
                  >
                    {new Intl.NumberFormat().format(datas?.solvedamt)}
                  </Td>
                </Tr>
              ) : (
                <></>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
