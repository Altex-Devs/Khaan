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

export const CompCheck = () => {
  const [value, setValue] = useState("");
  const [datas, setDatas] = useState<any>([]);
  const [isIdCorrect, setIsIdCorrect] = useState<boolean>(false);

  const checkButton = () => {
    axios
      .post("http://202.131.237.91:8081/v1/IndemnityInfo-web", {
        IndemnityNo: value,
      })
      .then(function (response) {
        if (response.data.retData.table) {
          setIsIdCorrect(false);
        } else {
          setIsIdCorrect(true);
        }
        setDatas([...datas, response.data.retData.table[0]]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Box
      paddingTop={"20.52vh"}
      paddingX={"8.33vw"}
      paddingBottom={"13vh"}
      height={"100vh"}
      backgroundColor={"#EBEDEE"}
      overflowY={"scroll"}
    >
      <Box marginBottom={"40px"}>
        <Box
          paddingTop={"40px"}
          color={"#3B4856"}
          fontSize={"18px"}
          fontWeight={400}
        >
          Нөхөн төлбөрийн дугаар оруулах
        </Box>
        <Box display={"flex"} gap={"16px"}>
          <Input
            backgroundColor={"#FFFFFF"}
            width={"19.58vw"}
            borderColor={"#C4C7C8"}
            borderRadius={"30px"}
            borderWidth={"1px"}
            placeholder="I1234567"
            color={"#3B4856"}
            onChange={(e) => setValue(e.target.value)}
            focusBorderColor={"#C4C7C8"}
          />
          <Button padding={0} onClick={checkButton}>
            <Box
              color={"#FFFFFF"}
              bgGradient="linear(to-r, #66377B, #DD005C)"
              paddingX={"24px"}
              height={"100%"}
              borderRadius={"50px"}
              display={"flex"}
              alignItems={"center"}
            >
              Шалгах
            </Box>
          </Button>
        </Box>
        <Text display={isIdCorrect ? "block" : "none"} color={"#DF5F72"}>
          Таны нөхөн төлбөрийн дугаар буруу байна
        </Text>
      </Box>
      <Box display={datas.length === 0 ? "none" : "block"}>
        <TableContainer
          backgroundColor={"#FFFFFF"}
          borderRadius={"8px"}
          borderWidth={"1px"}
          borderColor={"#C4C7C8"}
          overflowX={"hidden"}
          whiteSpace={"normal"}
        >
          <Table variant="unstyled">
            <Thead color={"#3B4856"} fontSize={"16px"} fontWeight={500}>
              <Tr borderBottomWidth={"1px"} borderColor={"#C4C7C8"}>
                <Th
                  borderRightWidth={"1px"}
                  borderColor={"#C4C7C8"}
                  width={"4%"}
                  paddingY={"24px"}
                  paddingX={"16px"}
                ></Th>
                <Th
                  borderRightWidth={"1px"}
                  borderColor={"#C4C7C8"}
                  width={"18%"}
                  paddingY={"24px"}
                  paddingX={"16px"}
                  textAlign={"center"}
                >
                  Бүтээгдэхүүний нэр
                </Th>
                <Th
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
                  borderRightWidth={"1px"}
                  borderColor={"#C4C7C8"}
                  width={"17%"}
                  paddingY={"24px"}
                  paddingX={"16px"}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    textAlign={"left"}
                  >
                    Нөхөн төлбөр хүлээн авагчийн нэр
                  </Box>
                </Th>
                <Th
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
                  paddingY={"24px"}
                  paddingX={"16px"}
                  textAlign={"center"}
                  width={"25.25%"}
                >
                  Төлөв
                </Th>
              </Tr>
            </Thead>
            <Tbody fontSize={"16px"} color={"#3B4856"} fontWeight={400}>
              {datas.map((data: any, index: number) => {
                return (
                  <Tr
                    key={index}
                    borderBottomWidth={datas.length - 1 === index ? "0" : "1px"}
                    borderColor={"#C4C7C8"}
                  >
                    <Td
                      borderRightWidth={"1px"}
                      borderColor={"#C4C7C8"}
                      height={"100%"}
                    >
                      {index + 1}
                    </Td>
                    <Td
                      borderRightWidth={"1px"}
                      borderColor={"#C4C7C8"}
                      textAlign={"left"}
                    >
                      {data.productname}
                    </Td>
                    <Td
                      borderRightWidth={"1px"}
                      borderColor={"#C4C7C8"}
                      textAlign={"center"}
                    >
                      {data.indemnityno}
                    </Td>
                    <Td
                      borderRightWidth={"1px"}
                      borderColor={"#C4C7C8"}
                      textAlign={"left"}
                    >
                      {data.receiverName}
                    </Td>
                    <Td
                      borderRightWidth={"1px"}
                      borderColor={"#C4C7C8"}
                      textAlign={"right"}
                    >
                      {data.requiredamt}
                    </Td>
                    <Td
                      borderRightWidth={"1px"}
                      borderColor={"#C4C7C8"}
                      textAlign={"center"}
                    >
                      {data.bankacctno}
                    </Td>
                    <Td>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"16px"}
                      >
                        <Text
                          color={
                            data.processNo === 6
                              ? "#2D998B"
                              : data.processNo === 7
                              ? "#DF5F72"
                              : "Баримтыг шийдвэрлэж байгаа"
                          }
                          textAlign={"center"}
                        >
                          {data.processNo === 3
                            ? "Баримтыг хүлээн авсан"
                            : data.processNo === 4
                            ? "Баримтыг судалж байгаа"
                            : data.processNo === 5
                            ? "Баримтыг шийдвэрлэж байгаа"
                            : data.processNo === 6
                            ? "Нөхөн төлбөрийг олгосон"
                            : data.processNo === 7
                            ? "Нөхөн төлбөр олгохоос татгалзсан"
                            : ""}
                        </Text>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <IconCheckboxCircle
                            color={data.processNo >= 3 ? "#2D998B" : "#C4C7C8"}
                          />
                          <Box
                            height={"1px"}
                            backgroundColor={"#C4C7C8"}
                            width={"21px"}
                          />
                          <IconCheckboxCircle
                            color={data.processNo >= 4 ? "#2D998B" : "#C4C7C8"}
                          />
                          <Box
                            height={"1px"}
                            backgroundColor={"#C4C7C8"}
                            width={"21px"}
                          />
                          <IconCheckboxCircle
                            color={data.processNo >= 5 ? "#2D998B" : "#C4C7C8"}
                          />
                          <Box
                            height={"1px"}
                            backgroundColor={"#C4C7C8"}
                            width={"21px"}
                          />
                          <IconCheckboxCircle
                            color={
                              data.processNo < 6
                                ? "#C4C7C8"
                                : data.processNo === 7
                                ? "#DF5F72"
                                : "#2D998B"
                            }
                          />
                        </Box>
                      </Box>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
