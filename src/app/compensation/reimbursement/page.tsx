import { CompAboutHeader, CompReimbursement } from "@/subsets";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <CompAboutHeader />
      <CompReimbursement />
    </>
  );
}