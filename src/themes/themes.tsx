import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  button: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  outlineButton: {
    50: "#FFFFFF",
    100: "#d1c3d7",
    500: "#66377B",
  },
};

export const theme = extendTheme({ colors });
