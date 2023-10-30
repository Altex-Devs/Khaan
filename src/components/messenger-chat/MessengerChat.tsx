import { FacebookProvider, CustomChat } from "react-facebook";

export const MessengerChat = () => {
  return (
    <FacebookProvider appId="1753927931735524" chatSupport>
      <CustomChat pageId="585954518093463" minimized={true} />
    </FacebookProvider>
  );
};
