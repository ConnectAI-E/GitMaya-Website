import type { FC } from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const LogoDark: FC<LogoProps> = (props) => {
  const { width, height } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 635 605"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M629.985 103.144C621.061 75.7753 600.039 45.2339 586.355 21.7328C596.767 89.3603 466.867 437.017 376.234 520.411C352.336 541.631 296.509 509.999 237.112 457.345C229.278 450.404 217.379 450.403 209.644 457.543C162.047 501.669 95.8082 569.594 35.7169 516.643C54.0616 535.781 84.603 567.71 85.198 568.305C149.95 635.933 210.636 586.253 267.157 537.764C312.375 498.992 375.341 643.766 431.764 593.591C490.863 541.135 529.437 448.42 560.177 376.926C579.017 333.097 595.081 288.078 608.269 242.266C620.169 201.61 643.67 144.989 629.985 103.144Z"
        fill="#ECA600"
      />
      <path
        d="M580.305 10.8254C568.307 -33.8959 147.767 69.0326 50.1935 153.418C25.9984 174.936 51.7801 235.225 98.088 301.366C104.137 309.992 102.649 321.693 94.7165 328.535C42.3598 373.653 -39.9433 426.704 22.3294 502.661C85.8913 580.205 158.675 505.14 209.743 457.642C217.477 450.503 229.277 450.404 237.21 457.444C296.607 509.999 352.435 541.73 376.332 520.51C474.799 429.778 619.771 26.5919 580.305 10.8254Z"
        fill="#F9DC4E"
      />
      <path
        d="M149.949 576.734C157.013 576.734 162.74 571.007 162.74 563.942C162.74 556.877 157.013 551.15 149.949 551.15C142.884 551.15 137.157 556.877 137.157 563.942C137.157 571.007 142.884 576.734 149.949 576.734Z"
        fill="#ECA600"
      />
      <path
        d="M406.875 240.283C387.638 241.176 368.401 242.068 349.163 243.06C344.205 243.258 340.239 239.193 340.636 234.235C342.52 211.527 344.305 188.918 346.189 166.211C348.073 146.577 328.241 129.918 301.864 128.926C275.487 127.836 255.556 143.106 257.539 163.236C259.522 188.423 261.605 213.51 263.588 238.697C263.985 243.258 260.415 247.324 255.853 247.522C235.228 248.514 214.504 249.505 193.878 250.497C173.649 251.588 162.147 259.223 162.643 267.652C163.138 276.18 175.236 283.815 194.969 285.104C216.784 286.294 238.699 287.484 260.514 288.773C264.58 288.971 267.852 292.244 268.149 296.309C270.331 322.983 272.413 349.657 274.595 376.332C276.479 396.56 288.477 408.063 301.864 407.468C315.251 406.873 327.249 394.875 329.133 375.142C331.116 350.451 333.199 325.661 335.182 300.97C335.578 296.607 339.347 293.235 343.809 293.533C363.74 294.623 383.671 295.714 403.702 296.805C423.335 298.094 440.094 285.501 441.085 268.743C442.275 251.786 427.004 239.094 406.875 240.283Z"
        fill="white"
      />
    </svg>
  );
};

export const LogoLight: FC<LogoProps> = (props) => {
  const { width, height } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 635 605"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M629.985 103.144C621.061 75.7753 600.039 45.2339 586.355 21.7328C596.767 89.3603 466.867 437.017 376.234 520.411C352.336 541.631 296.509 509.999 237.112 457.345C229.278 450.404 217.379 450.403 209.644 457.543C162.047 501.669 95.8082 569.594 35.7169 516.643C54.0616 535.781 84.603 567.71 85.198 568.305C149.95 635.933 210.636 586.253 267.157 537.764C312.375 498.992 375.341 643.766 431.764 593.591C490.863 541.135 529.437 448.42 560.177 376.926C579.017 333.097 595.081 288.078 608.269 242.266C620.169 201.61 643.67 144.989 629.985 103.144Z"
        fill="#282828"
      />
      <path
        d="M580.305 10.8254C568.307 -33.8959 147.767 69.0326 50.1935 153.418C25.9984 174.936 51.7801 235.225 98.088 301.366C104.137 309.992 102.649 321.693 94.7165 328.535C42.3598 373.653 -39.9433 426.704 22.3294 502.661C85.8913 580.205 158.675 505.14 209.743 457.642C217.477 450.503 229.277 450.404 237.21 457.444C296.607 509.999 352.435 541.73 376.332 520.51C474.799 429.778 619.771 26.5919 580.305 10.8254Z"
        fill="#6A6A6A"
      />
      <path
        d="M149.949 576.734C157.013 576.734 162.74 571.007 162.74 563.942C162.74 556.877 157.013 551.15 149.949 551.15C142.884 551.15 137.157 556.877 137.157 563.942C137.157 571.007 142.884 576.734 149.949 576.734Z"
        fill="#282828"
      />
      <path
        d="M406.875 240.283C387.638 241.176 368.401 242.068 349.163 243.06C344.205 243.258 340.239 239.193 340.636 234.235C342.52 211.527 344.305 188.918 346.189 166.211C348.073 146.577 328.241 129.918 301.864 128.926C275.487 127.836 255.556 143.106 257.539 163.236C259.522 188.423 261.605 213.51 263.588 238.697C263.985 243.258 260.415 247.324 255.853 247.522C235.228 248.514 214.504 249.505 193.878 250.497C173.649 251.588 162.147 259.223 162.643 267.652C163.138 276.18 175.236 283.815 194.969 285.104C216.784 286.294 238.699 287.484 260.514 288.773C264.58 288.971 267.852 292.244 268.149 296.309C270.331 322.983 272.413 349.657 274.595 376.332C276.479 396.56 288.477 408.063 301.864 407.468C315.251 406.873 327.249 394.875 329.133 375.142C331.116 350.451 333.199 325.661 335.182 300.97C335.578 296.607 339.347 293.235 343.809 293.533C363.74 294.623 383.671 295.714 403.702 296.805C423.335 298.094 440.094 285.501 441.085 268.743C442.275 251.786 427.004 239.094 406.875 240.283Z"
        fill="black"
      />
    </svg>
  );
};


export default LogoDark;
