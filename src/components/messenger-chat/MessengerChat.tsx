"use client";


import { Box } from "@chakra-ui/react";
import { FacebookProvider, CustomChat } from "react-facebook";

export const MessengerChat = () => {
  return (
    <Box width={100} height={100} bg={'#000'}>
      <FacebookProvider appId="362291486363532" chatSupport>
      <CustomChat pageId="147156608487773" minimized={false}/>
    </FacebookProvider>
    </Box>
  );
};
