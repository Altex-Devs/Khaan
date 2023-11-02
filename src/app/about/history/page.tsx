import { AboutHeader, AboutHistory } from "@/subsets";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <AboutHeader />
      <AboutHistory />
    </>
  );
}
