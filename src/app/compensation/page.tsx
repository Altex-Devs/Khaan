import { AboutHeader, AboutStructure, CompAboutHeader } from "@/subsets";
import React, { Suspense } from "react";
import Loading from "../loading";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <CompAboutHeader />
      </Suspense>
    </>
  );
}
