import Loading from "@/app/loading";
import { CompAboutHeader, CompRisk } from "@/subsets";
import React, { Suspense } from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <CompAboutHeader />
        <CompRisk />
      </Suspense>
    </>
  );
}
