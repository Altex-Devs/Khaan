"use client";

import { FacebookProvider, CustomChat } from "react-facebook";

const messengerChatProps = {
  minimized: false,
  chatPluginProps: {
    themeColor: "#66377B",
    loggedInGreeting: "Welcome!",
    loggedOutGreeting: "Please log in to chat"
  },
};

export const MessengerChat = () => {
  return (
   
      <FacebookProvider appId="362291486363532" chatSupport>
        <CustomChat pageId="147156608487773" {...messengerChatProps} />
      </FacebookProvider>
  );
};
