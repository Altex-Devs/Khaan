export const IconHouse = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={45}
    fill="none"
  >
    <g fill="#DD005C" fillRule="evenodd" clipRule="evenodd" filter="url(#a)">
      <path d="M38.424 36.65V24.28l-13-10.197L12.422 24.28v12.37h10.175v-8.715h5.652v8.715h10.175Z" />
      <path d="m9.826 24.875 15.597-12.232L41.115 24.95 43 22.572l-4.643-3.642V9.723h-5.98v4.516l-6.878-5.393L8 22.572l1.826 2.303Z" />
    </g>
    <defs>
      <filter
        id="a"
        width={51}
        height={43.804}
        x={0}
        y={0.846}
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
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.866667 0 0 0 0 0 0 0 0 0 0.360784 0 0 0 0.24 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_265_270" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_265_270"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)