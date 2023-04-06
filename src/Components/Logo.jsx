export function Logo({ color = "black", ...props }) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 800 800"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect x="280" y="560" width="240" height="240" fill="inherit" />
        <rect x="280" y="280" width="240" height="240" fill="inherit" />
        <rect y="280" width="240" height="240" fill="inherit" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M560 0H280V240H560V520H800V0H560Z"
          fill="inherit"
        />
      </svg>
    );
  }
  