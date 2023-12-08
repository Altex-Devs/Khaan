import Loading from "@/app/loading";
import { CompAboutHeader, CompCheck } from "@/subsets";
import React, { Suspense } from "react";

type Props = {};

export default function Check({}: Props) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <CompAboutHeader />
        <CompCheck />
      </Suspense>
    </>
  );
}