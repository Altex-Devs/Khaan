"use client";

import { CompaniesPage } from "@/subsets";
import { Box } from "@chakra-ui/react";
import { Suspense } from "react";
import Loading from "../loading";

const Companies = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Box backgroundColor={"#EBEDEE"} minHeight={"100vh"}>
        <CompaniesPage />
      </Box>
    </Suspense>
  );
};

export default Companies;
