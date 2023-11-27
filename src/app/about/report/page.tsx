"use client";

import { AboutHeader, ReportPage } from "@/subsets";
import { Box } from "@chakra-ui/react";

const Report = () => {
  return (
    <Box backgroundColor={"#EBEDEE"} height={"100%"} paddingBottom={"15vh"}>
      <AboutHeader />
      <ReportPage />
    </Box>
  );
};

export default Report;
