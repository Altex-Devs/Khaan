"use client";

import { AboutHeader, ReportPage } from "@/subsets";
import { Box } from "@chakra-ui/react";

const Report = () => {
  return (
    <Box backgroundColor={"#F6F6F6"} height={"100%"} paddingBottom={"15vh"}>
      <AboutHeader />
      <ReportPage />
    </Box>
  );
};

export default Report;
