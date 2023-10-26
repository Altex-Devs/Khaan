import React from "react";
import { AboutCompanyDesc } from "./AboutCompanyDesc";
import { AboutVision } from "./AboutVision";
import { AboutQuality } from "./AboutQuality";

type Props = {};

export const AboutCompany = ({}: Props) => {
  return (
    <>
      <AboutCompanyDesc />
      <AboutVision />
      <AboutQuality />
    </>
  );
};
