export default ({
  fill = "#000000",
  className,
}: {
  fill?: string;
  className?: string;
}) => (
  <svg
    fill={fill}
    className={className}
    width="20px"
    height="20px"
    style={{
      top: "-1px",
      position: "relative",
    }}
    viewBox="0 0 1920 1920"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M960 0c529.468 0 960 430.645 960 960s-430.532 960-960 960C430.645 1920 0 1489.355 0 960S430.645 0 960 0Zm508.235 903.53H451.765v112.94h1016.47V903.53Z" />
  </svg>
);
