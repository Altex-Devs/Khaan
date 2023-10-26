import { Box } from "@chakra-ui/react";
import Youtube from "react-youtube";

type VideoType = {
  hide: boolean;
  setHide: Function;
};

export const Video: React.FC<VideoType> = ({ hide, setHide }) => {
  const opts = {
    height: "490",
    width: "870",
    playerVars: {
      autoplay: 0,
    },
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
          videoId="MKKcJ8qPvF8"
          opts={opts}
          onReady={(e) => e.target.pauseVideo()}
        ></Youtube>
      </Box>
      <Box
        zIndex={11}
        position={"absolute"}
        backgroundColor={"#4b5563"}
        opacity={0.5}
        width={"100vw"}
        height={"100vh"}
        onClick={() => setHide(true)}
      />
    </Box>
  );
};
