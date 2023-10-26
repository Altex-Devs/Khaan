import { AboutCompany, AboutHeader } from "@/subsets";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <AboutHeader />
      <AboutCompany/>
    </>
  );
}
