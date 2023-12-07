"use client";

import Loading from "@/app/loading";
import { ServiceDetail } from "@/subsets";
import { Suspense } from "react";

const CompaniesDetails = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ServiceDetail />
    </Suspense>
  );
};

export default CompaniesDetails;
