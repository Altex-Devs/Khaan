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
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

type TableType = {
  data: any;
};

export const Table: React.FC<TableType> = ({ data }) => {
  const length = data[0].items.length;
  const [isSmallScreen] = useMediaQuery("(max-width: 600px)");
  const [scrollCount, setScrollCount] = useState(0);
  const tableRef = useRef<HTMLDivElement>(null); // Use type assertion for the ref
  useEffect(() => {
    const handleScroll = () => {
      if (tableRef.current) {
        const scrollX = tableRef.current.scrollLeft;
        setScrollCount(scrollX);
      }
    };

    // Add scroll event listener
    if (tableRef.current) {
      tableRef.current.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener on component unmount
    return () => {
      if (tableRef.current) {
        tableRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <Box position={"relative"}>
      <Box
        position={"absolute"}
        display={{ xl: "none", base: scrollCount > 100 ? "none" : "block" }}
        right={-1}
        w="12%"
        h="100%" // Adjust the height as needed
        bgGradient="linear(to-l, #FFF 25.25%, rgba(255, 255, 255, 0.00) 100%)"
      ></Box>
      <TableContainer ref={tableRef} overflowX="auto">
        <ChakraTable
          variant="simple"
          layout="fixed"
          borderWidth={"1px"}
          width={"full"}
        >
          {data.map((el: any, index: number) => {
            if (el.type === "header") {
              return (
                <Thead backgroundColor={"#66377B"} key={index}>
                  <Tr width={"full"}>
                    {el.items.map((head: string, headIndex: number) => (
                      <Th
                        flex={1}
                        key={headIndex}
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
                        width={{ xl: "full", base: "300px" }}
                        whiteSpace={"nowrap"}
                      >
                        {head}
                      </Th>
                    ))}
                  </Tr>
                </Thead>
              );
            } else {
              return (
                <Tbody width={"full"} color={"black"} key={index}>
                  <Tr width={"full"} backgroundColor={"white"}>
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
    </Box>
  );
};
