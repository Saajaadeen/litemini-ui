const SpinningIcon = () => (
  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  className="animate-spin"
>
  <style>
    {`
      .spinner_icon {
        transform-origin: center;
        animation: spinner_ico 0.75s infinite linear;
      }
      @keyframes spinner_ico {
        100% {
          transform: rotate(360deg);
        }
      }
    `}
  </style>
  <path
    d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
    className="spinner_icon"
    fill="white"
  />
</svg>
);

export default SpinningIcon;
