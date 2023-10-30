import { FacebookProvider, CustomChat } from "react-facebook";

export const MessengerChat = () => {
  return (
    <FacebookProvider appId="300848802800662" chatSupport>
      <CustomChat pageId="585954518093463" minimized={true} />
    </FacebookProvider>
  );
};
