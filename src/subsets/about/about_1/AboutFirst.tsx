import React from "react";
import { AboutCompany } from "./AboutCompany";
import { AboutVision } from "./AboutVision";
import { AboutQuality } from "./AboutQuality";

type Props = {};

export const AboutFirst = ({}: Props) => {
  return (
    <>
      <AboutCompany />
      <AboutVision />
      <AboutQuality />
    </>
  );
};
