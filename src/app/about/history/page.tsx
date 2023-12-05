import Loading from "@/app/loading";
import { AboutHeader, AboutHistory } from "@/subsets";
import React, { Suspense } from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <AboutHeader />
        <AboutHistory />
      </Suspense>
    </>
  );
}
