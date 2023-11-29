"use client";

import { IconNuhunOne } from "@/assets";
import { Box, Center, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

export const SectionThree = ({}: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true,
  });
  return (
    <Box
      ref={ref}
      backgroundColor={"#EBEDEE"}
      paddingX={"8.3vw"}
      paddingTop={"24px"}
      width={"100vw"}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }} // Initial state of the animation
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animation that will play when the component mounts
        transition={{ duration: 2 }} // Duration of the animation
      >
        <Box color={"#3B4856"} display="flex" gap="1.667vw">
          <Box width={"26.67vw"}>
            <Box
              marginBottom={"15px"}
              border="1px solid #66377B"
              paddingY="24px"
              width="100%"
            >
              <Center
                fontSize="18px"
                fontWeight={700}
                fontStyle="normal"
                color="#66377B"
              >
                Зам тээврийн ослын үед:
              </Center>
            </Box>
            <Box
              bg="#ffffff"
              paddingX={"16px"}
              paddingTop={"16px"}
              paddingBottom={"65px"}
              height={"300px"}
            >
              <Box
                color={"#3B4856"}
                fontSize={"16px"}
                fontWeight={400}
                fontStyle={"normal"}
                lineHeight={"24px"}
              >
                <UnorderedList>
                  <ListItem>Ослын газраас хөдлөхгүй байх,</ListItem>
                  <ListItem>
                    Хүн гэмтсэн тохиолдолд яаралтай түргэн тусламж (103) дуудах,
                  </ListItem>
                  <ListItem>Замын цагдаа (102)-д дуудлага өгөх,</ListItem>
                  <ListItem>
                    Осол Улаанбаатар хотод бол Шуурхай дуудлагын 7777-3000
                    дугаарт, хөдөө, орон нутагт бол Хаан даатгал ХХК-н 7570-0808
                    дугаарт тус тус мэдэгдэх,
                  </ListItem>
                  <ListItem>Зураг бичлэг хийн, баримтжуулах</ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
          <Box width={"26.67vw"} paddingBottom={"156px"}>
            <Box
              marginBottom={"15px"}
              border="1px solid #DF5F72"
              paddingY="24px"
              width="100%"
            >
              <Center
                fontSize="18px"
                fontWeight={700}
                fontStyle="normal"
                color="#DF5F72"
              >
                Галын ослын үед:
              </Center>
            </Box>
            <Box
              bg="#ffffff"
              paddingX={"16px"}
              paddingTop={"16px"}
              paddingBottom={"65px"}
              height={"300px"}
            >
              <Box
                color={"#3B4856"}
                fontSize={"16px"}
                fontWeight={400}
                fontStyle={"normal"}
                lineHeight={"24px"}
              >
                <UnorderedList>
                  <ListItem>
                    Аюулгүй байдлыг ханган, хохирлыг ихэсгэхгүй байх боломжит
                    арга хэмжээг авах,
                  </ListItem>
                  <ListItem>
                    Хүн гэмтсэн тохиолдолд яаралтай түргэн тусламж (103) дуудах,
                  </ListItem>
                  <ListItem>
                    ОБЕГ (105) болон Гал унтраах анги (101)-д дуудлага өгөх
                  </ListItem>
                  <ListItem>
                    Хаан даатгал ХХК-ийн 7570-0808 дугаарт мэдэгдэх,
                  </ListItem>
                  <ListItem>Зураг бичлэг хийн, баримтжуулах</ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
          <Box width={"26.67vw"}>
            <Box
              marginBottom={"15px"}
              border="1px solid #0091CF"
              paddingY="24px"
              width="100%"
            >
              <Center
                fontSize="18px"
                fontWeight={700}
                fontStyle="normal"
                color="#0091CF"
              >
                Усны ослын үед:
              </Center>
            </Box>
            <Box
              bg="#ffffff"
              paddingX={"16px"}
              paddingTop={"16px"}
              paddingBottom={"65px"}
              height={"300px"}
            >
              <Box
                color={"#3B4856"}
                fontSize={"16px"}
                fontWeight={400}
                fontStyle={"normal"}
                lineHeight={"24px"}
              >
                <UnorderedList>
                  <ListItem>
                    Аюулгүй байдлыг ханган, хохирлыг ихэсгэхгүй байх боломжит
                    арга хэмжээг авах,
                  </ListItem>
                  <ListItem>
                    Хүн гэмтсэн тохиолдолд яаралтай түргэн тусламж (103) дуудах,
                  </ListItem>
                  <ListItem>
                    Харьяалагдах СӨХ, контор (ОСНАА)-т мэдэгдэх, шаардлагатай
                    тохиолдолд ОБЕГ (105)-д дуудлага өгөх
                  </ListItem>
                  <ListItem>
                    Хаан даатгал ХХК-ийн 7570-0808 дугаарт мэдэгдэх,
                  </ListItem>
                  <ListItem>Зураг бичлэг хийн, баримтжуулах</ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};
