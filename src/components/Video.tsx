"use client";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Youtube from "react-youtube";

type VideoType = {
  hide: boolean;
  setHide: Function;
  setVideo: Function;
};

export const Video: React.FC<VideoType> = ({ hide, setHide, setVideo }) => {
  const [state, setState] = useState<any>();

  const opts = {
    height: "100%",
    width: "100%", // 100% width
  };

  const modalClose = () => {
    setHide(true);
    state.pauseVideo();
  };

  return (
    <Box
      zIndex={11}
      top={0}
      position={"fixed"}
      width={"100vw"}
      height={"100vh"}
      display={hide ? "none" : "flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        paddingY={{ xl: "0px", base: "40px" }}
        zIndex={12}
        style={{
          width: "100%",
          maxWidth: "870px",
          height: "100%",
          maxHeight: "490px",
        }}
      >
        <Youtube
          videoId="FGnlAz_YzA8"
          opts={opts}
          style={{ width: "100%", height: "100%" }}
          onReady={(e) => {
            setState(e.target);
            setVideo(e.target);
          }}
        ></Youtube>
      </Box>
      <Box
        zIndex={11}
        position={"absolute"}
        backgroundColor={"#4b5563"}
        opacity={0.5}
        width={"100vw"}
        height={"100vh"}
        onClick={modalClose}
      />
    </Box>
  );
};
