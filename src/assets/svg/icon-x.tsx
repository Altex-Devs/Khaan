import * as React from "react";

export const XIcon = ({ color = "#66377B" }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <rect width="16" height="16" rx="2" fill={color} />
      <path
        d="M3.02601 3L7.14429 8.41713L3 12.8215H3.93271L7.56103 8.96541L10.4926 12.8215H13.6667L9.31667 7.09965L13.1741 3H12.2414L8.89993 6.55137L6.20006 3H3.02601ZM4.39763 3.67588H5.8558L12.2948 12.1455H10.8367L4.39763 3.67588Z"
        fill="white"
      />
    </svg>
  );
};
