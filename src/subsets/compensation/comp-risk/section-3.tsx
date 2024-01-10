"use client";

import { IconNuhunOne } from "@/assets";
import { Box, Center, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FormattedMessage } from "react-intl";

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
      paddingX={{ xl: "8.3vw", base: "3.72vw" }}
      paddingTop={"24px"}
      width={"100vw"}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }} // Initial state of the animation
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animation that will play when the component mounts
        transition={{ duration: 2 }} // Duration of the animation
      >
        <Box
          color={"#3B4856"}
          display={{ xl: "flex", base: "none" }}
          gap="1.667vw"
        >
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
                <FormattedMessage id="traffic_accident" />
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
                    <FormattedMessage id="traffic_accident_1" />
                  </ListItem>
                  <ListItem>
                    <FormattedMessage id="traffic_accident_2" />
                  </ListItem>
                  <ListItem>
                    <FormattedMessage id="traffic_accident_3" />
                  </ListItem>
                  <ListItem>
                    <FormattedMessage id="traffic_accident_4" />
                  </ListItem>
                  <ListItem>
                    <FormattedMessage id="traffic_accident_5" />
                  </ListItem>
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
                <FormattedMessage id="in_case_of_fire" />
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
                    <FormattedMessage id="in_case_of_fire_1" />
                  </ListItem>
                  <ListItem>
                    <FormattedMessage id="in_case_of_fire_2" />
                  </ListItem>
                  <ListItem>
                    <FormattedMessage id="in_case_of_fire_3" />
                  </ListItem>
                  <ListItem>
                    <FormattedMessage id="in_case_of_fire_4" />
                  </ListItem>
                  <ListItem>
                    <FormattedMessage id="in_case_of_fire_5" />
                  </ListItem>
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
                <FormattedMessage id="in_case_of_water" />
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
                    <FormattedMessage id="in_case_of_water_1" />
                  </ListItem>
                  <ListItem>
                    <FormattedMessage id="in_case_of_water_2" />
                  </ListItem>
                  <ListItem>
                    <FormattedMessage id="in_case_of_water_3" />
                  </ListItem>
                  <ListItem>
                    <FormattedMessage id="in_case_of_water_4" />
                  </ListItem>
                  <ListItem>
                    <FormattedMessage id="in_case_of_water_5" />
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
      <Box
        color={"#3B4856"}
        display={{ base: "block", xl: "none" }}
        gap="1.667vw"
      >
        <Box width={{ xl: "26.67vw" }} paddingBottom={"20px"}>
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
              <FormattedMessage id="traffic_accident" />
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
                  <FormattedMessage id="traffic_accident_1" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="traffic_accident_2" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="traffic_accident_3" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="traffic_accident_4" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="traffic_accident_5" />
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
        <Box width={{ xl: "26.67vw" }} paddingBottom={"20px"}>
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
              <FormattedMessage id="in_case_of_fire" />
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
                  <FormattedMessage id="in_case_of_fire_1" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="in_case_of_fire_2" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="in_case_of_fire_3" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="in_case_of_fire_4" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="in_case_of_fire_5" />
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
        <Box width={{ xl: "26.67vw" }} paddingBottom={"140px"}>
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
              <FormattedMessage id="in_case_of_water" />
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
                  <FormattedMessage id="in_case_of_water_1" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="in_case_of_water_2" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="in_case_of_water_3" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="in_case_of_water_4" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="in_case_of_water_5" />
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
