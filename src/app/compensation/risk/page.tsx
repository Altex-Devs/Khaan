import { CompAboutHeader, CompRisk } from "@/subsets";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <CompAboutHeader />
      <CompRisk />
    </>
  );
}
