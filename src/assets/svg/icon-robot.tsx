export const IconRobot = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={33} height={36} fill="none">
    <g filter="url(#a)">
      <path
        fill="#DD005C"
        d="M27.612 16.445h-.65v-2.27a2.833 2.833 0 0 0-2.833-2.832h-6.67v-2.33a2.602 2.602 0 0 0 1.653-2.418A2.581 2.581 0 0 0 16.514 4a2.581 2.581 0 0 0-2.597 2.595c0 1.091.679 2.035 1.653 2.419v2.33H8.9a2.833 2.833 0 0 0-2.834 2.83v2.271h-.65c-.767 0-1.416.65-1.416 1.416v3.332c0 .767.65 1.416 1.417 1.416h.649v7.992c0 1.239 1.476 1.858 2.361 1.003l3.749-3.657H24.1a2.833 2.833 0 0 0 2.833-2.831v-2.477h.65c.767 0 1.416-.65 1.416-1.416V17.89a1.399 1.399 0 0 0-1.387-1.445Zm-16.351.413c0-.973.767-1.74 1.741-1.74.974 0 1.741.767 1.741 1.74s-.767 1.74-1.741 1.74c-.945.03-1.741-.767-1.741-1.74Zm5.253 7.58a3.52 3.52 0 0 1-3.512-3.51c0-.265.236-.501.502-.501h6.02c.266 0 .502.236.502.501a3.52 3.52 0 0 1-3.512 3.51Zm3.512-5.81a1.725 1.725 0 0 1-1.74-1.74c0-.974.766-1.74 1.74-1.74s1.742.767 1.742 1.74c0 .943-.797 1.74-1.742 1.74Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={33}
        height={36}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.866667 0 0 0 0 0 0 0 0 0 0.360784 0 0 0 0.24 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_265_324" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_265_324"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
