import React from "react";
import { AboutGreeting } from "./AboutGreeting";
import { AboutShareholders } from "./AboutShareholders";
import { AboutBoardOfDirectors } from "./AboutBoardOfDirectors";
import { AboutStructure } from "./AboutStructure";

type Props = {};

export const AboutTwo = ({}: Props) => {
  return (
    <>
    <AboutStructure/>
    <AboutGreeting/>
    <AboutShareholders/>
    <AboutBoardOfDirectors/>
    </>
  );
};
