import { SVGProps } from 'react';

export function Telegram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4"
      ></path>
    </svg>
  );
}
