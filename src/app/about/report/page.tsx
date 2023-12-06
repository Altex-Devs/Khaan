"use client";

import Loading from "@/app/loading";
import { AboutHeader, ReportPage } from "@/subsets";
import { Box } from "@chakra-ui/react";
import { Suspense } from "react";

const Report = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Box backgroundColor={"#EBEDEE"} height={"100%"} paddingBottom={"15vh"}>
        <AboutHeader />
        <ReportPage />
      </Box>
    </Suspense>
  );
};

export default Report;
