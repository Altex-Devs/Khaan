import React from "react";
import { AboutGreeting } from "./AboutGreeting";
import { AboutShareholders } from "./AboutShareholders";
import { AboutBoardOfDirectors } from "./AboutBoardOfDirectors";
import { AboutStructureGraph } from "./AboutStructureGraph";

type Props = {};

export const AboutStructure = ({}: Props) => {
  return (
    <>
    <AboutStructureGraph/>
    <AboutGreeting/>
    <AboutShareholders/>
    <AboutBoardOfDirectors/>
    </>
  );
};
