import { IconCheckCircle, IconCloseCircle } from "@/assets";
import {
  TableContainer,
  Table as ChakraTable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
} from "@chakra-ui/react";

type TableType = {
  data: any;
};

export const Table: React.FC<TableType> = ({ data }) => {
  console.log(data);
  const length = data[0].items.length;

  return (
    <TableContainer>
      <ChakraTable variant="simple" layout="fixed" borderWidth={"1px"}>
        {data.map((el: any) => {
          if (el.type === "header") {
            return (
              <Thead backgroundColor={"#66377B"}>
                <Tr width={"100%"}>
                  {el.items.map((head: string, headIndex: number) => (
                    <Th
                      flex={1}
                      key={headIndex}
                      //   width={
                      //     headIndex === el.items.length - 1 ? "100%" : "100%"
                      //   }
                      colSpan={
                        el.items.length - 1 === headIndex &&
                        length - 1 !== headIndex
                          ? length - el.items.length + 1
                          : 1
                      }
                      textAlign={
                        el.items.length - 1 === headIndex &&
                        length - 1 !== headIndex
                          ? "center"
                          : "left"
                      }
                      color={"white"}
                      borderWidth={"1px"}
                      wordBreak={"break-word"}
                      whiteSpace={"break-spaces"}
                    >
                      {head}
                    </Th>
                  ))}
                </Tr>
              </Thead>
            );
          } else {
            return (
              <Tbody color={"black"}>
                <Tr backgroundColor={"white"}>
                  {el.items.map((body: any, bodyIndex: any) => (
                    <Td
                      borderWidth={"1px"}
                      flex={1}
                      height={"auto"}
                      key={bodyIndex}
                      wordBreak={"break-word"}
                      whiteSpace={"break-spaces"}
                      textAlign={bodyIndex === 0 ? "left" : "center"}
                    >
                      {body === "icon-correct" ? (
                        <Box
                          width={"100%"}
                          display={"flex"}
                          justifyContent={"center"}
                        >
                          <IconCheckCircle />
                        </Box>
                      ) : body === "icon-wrong" ? (
                        <Box
                          width={"100%"}
                          display={"flex"}
                          justifyContent={"center"}
                        >
                          <IconCloseCircle />
                        </Box>
                      ) : (
                        body
                      )}
                    </Td>
                  ))}
                </Tr>
              </Tbody>
            );
          }
        })}
      </ChakraTable>
    </TableContainer>
  );
};
