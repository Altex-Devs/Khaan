export const Shadow = ({ color = "#2D998B" }: { color?: string }) => (
  <svg
    width="128"
    height="168"
    viewBox="0 0 128 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_175_608)">
      <circle cx="16" cy="56" r="16" fill={color} />
    </g>
    <defs>
      <filter
        id="filter0_f_175_608"
        x="-96"
        y="-56"
        width="224"
        height="224"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="48"
          result="effect1_foregroundBlur_175_608"
        />
      </filter>
    </defs>
  </svg>
);
