export const IconChess = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={36}
    fill="none"
  >
    <g filter="url(#a)">
      <path
        fill="#DD005C"
        d="M26 30.525v.935c0 .143-.058.28-.161.382a.557.557 0 0 1-.39.158H4.55a.557.557 0 0 1-.39-.158A.534.534 0 0 1 4 31.46v-.935c0-1.33 1.234-2.413 2.752-2.413h16.496c1.517 0 2.752 1.082 2.752 2.413ZM6.752 27.032H23.398a2.667 2.667 0 0 0-.965-1.06 2.745 2.745 0 0 0-1.386-.418H8.953a2.616 2.616 0 0 0-1.102.256 2.563 2.563 0 0 0-.882.694 3.193 3.193 0 0 0-.368.554l.15-.026ZM5.194 14.615a.531.531 0 0 1 .033-.644l5.364-6.309V4.54a.53.53 0 0 1 .203-.418.556.556 0 0 1 .458-.111c.118.021 2.679.543 3.123 2.18 1.69.194 7.216 1.439 7.216 9.205v9.108a3.484 3.484 0 0 0-.55-.047H8.952c-.14.001-.278.01-.416.025.687-4.075 3.807-6.968 4.755-7.766l-.368-1.799-2.314.317v.694a.53.53 0 0 1-.22.432l-2.205 1.615a.556.556 0 0 1-.632.02.546.546 0 0 1-.158-.153l-2.2-3.227Zm13.847 6.662a.534.534 0 0 0-.161-.382.557.557 0 0 0-.78 0 .534.534 0 0 0-.16.382v.77c0 .143.057.28.16.381a.557.557 0 0 0 .78 0 .534.534 0 0 0 .161-.381v-.77Zm-2.96-10.791c1.219.917 1.858 2.564 1.858 4.91v3.503c0 .143.058.28.162.382a.557.557 0 0 0 .779 0 .534.534 0 0 0 .161-.382v-3.503c0-2.702-.771-4.64-2.296-5.756a.561.561 0 0 0-.773.106.532.532 0 0 0 .108.758v-.018Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={30}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_265_329" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_265_329"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)