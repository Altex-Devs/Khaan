"use client";
import { IconLogo } from "@/assets";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 2, repeat: Infinity }}
      >
        <IconLogo />
      </motion.div>
    </Box>
  );
}
