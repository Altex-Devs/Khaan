import { Box } from "@chakra-ui/react";

type PopUpType = {
  hide: boolean;
  setHide: Function;
  children: any;
};

export const PopUp: React.FC<PopUpType> = ({ hide, setHide, children }) => {
  const closeModal = () => {
    setHide(true);
  };

  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      width={"100vw"}
      height={"100vh"}
      display={hide ? "none" : "flex"}
      alignItems={"center"}
      justifyContent={"center"}
      zIndex={3}
    >
      <Box zIndex={4}>{children}</Box>
      <Box
        position={"absolute"}
        width={"100vw"}
        height={"100vh"}
        backgroundColor={"#4b5563"}
        opacity={0.5}
        onClick={closeModal}
      ></Box>
    </Box>
  );
};
