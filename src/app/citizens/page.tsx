"use client";

import { CitizensPage } from "@/subsets";
import { Box } from "@chakra-ui/react";
import { Suspense } from "react";
import Loading from "../loading";

const Citizens = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Box backgroundColor={"#EBEDEE"} minHeight={"100vh"}>
        <CitizensPage />
      </Box>
    </Suspense>
  );
};

export default Citizens;
