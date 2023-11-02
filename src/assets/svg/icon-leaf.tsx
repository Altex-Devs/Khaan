export const IconLeaf = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
  >
    <g filter="url(#a)">
      <path
        fill="#DD005C"
        d="M7.963 28.037a13.547 13.547 0 0 0 19.15 0c5.288-5.289 4.88-24.03 4.88-24.03S13.252 3.6 7.963 8.887a13.546 13.546 0 0 0 0 19.15Zm1.867-3.2 4.4-4.399v-4.616a.943.943 0 0 1 1.885 0v2.731l5.568-5.58a.95.95 0 0 1 1.345 1.344l-2.913 2.913h2.759a.943.943 0 0 1 0 1.886h-4.657l-2.379 2.378-1.075 1.075h2.76a.943.943 0 1 1 0 1.885h-4.645l-1.716 1.716a.943.943 0 0 1-1.332-1.332Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={36}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_265_331" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_265_331"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)