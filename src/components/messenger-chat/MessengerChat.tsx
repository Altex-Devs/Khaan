"use client";

import { Box } from "@chakra-ui/react";
import { FacebookProvider, CustomChat } from "react-facebook";

const messengerChatProps = {
  minimized: false,
  chatPluginProps: {
    themeColor: '#66377B', // Change the theme color
    loggedInGreeting: 'Welcome!', // Change the logged-in greeting
    loggedOutGreeting: 'Please log in to chat', // Change the logged-out greeting
    // Add other chat plugin props here
  },
};

export const MessengerChat = () => {
  return (
      <FacebookProvider appId="362291486363532" chatSupport>
        <CustomChat pageId="147156608487773" {...messengerChatProps} />
      </FacebookProvider>
  );
};
