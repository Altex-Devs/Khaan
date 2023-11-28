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
    height: "490",
    width: "870",
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
      <Box zIndex={12}>
        <Youtube
          videoId="1nSAATn7i4c"
          opts={opts}
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
