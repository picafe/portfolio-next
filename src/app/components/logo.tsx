"use client";
import Link from "next/link";

interface Logo {
  textSize: string;
  animated? : boolean;
}

const sizes = [
  { size: "sm", rem: 0.875 },
  { size: "base", rem: 1 },
  { size: "lg", rem: 1.125 },
  { size: "xl", rem: 1.25 },
  { size: "2xl", rem: 1.5 },
  { size: "3xl", rem: 1.875 },
  { size: "4xl", rem: 2.25 },
  { size: "5xl", rem: 3 },
  { size: "6xl", rem: 3.75 },
  { size: "7xl", rem: 4.5 },
  { size: "8xl", rem: 6 },
  { size: "9xl", rem: 8 },
];

export default function PicafeLogo(props: Logo) {
  const propSizes = props.textSize.split(" ");
  let largestSize = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let largestSizeIndex = -1;

  // gets the largest textsize and its rem value for the icon
  propSizes.forEach((propValue) => {
    sizes.forEach((size, index) => {
      if (propValue.includes(size.size) && size.rem > largestSize) {
        largestSize = size.rem;
        largestSizeIndex = index;
      }
    });
  });

  return (
    <Link href="/">
      <div className="flex sm:flex-row flex-col items-center h-auto duration-500 cursor-default ">
        <svg
          style={{ height: largestSize + "rem" }}
          className={`${props.animated ? "animate-fade-in" : ""} "`}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64.000000 64.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
            stroke="none"
            fill="#fff"
          >
            {/* steam */}
            <path d="M361 556 c-17 -21 -23 -69 -12 -98 16 -44 31 -34 25 16 -4 24 -2 52 5 64 13 24 -1 39 -18 18z" />
            <path d="M294 479 c7 -35 22 -57 31 -47 10 10 -10 71 -24 76 -11 4 -12 -3 -7 -29z" />
            <path d="M260 440 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z" />
            {/* cup outline */}
            <path d="M140 391 c0 -6 5 -13 10 -16 6 -4 10 -57 10 -126 0 -114 1 -121 25 -144 24 -24 28 -25 185 -25 100 0 160 4 160 10 0 6 -16 10 -36 10 -26 0 -33 3 -27 13 4 6 10 34 13 61 5 46 7 50 37 58 64 16 85 97 38 143 -24 25 -25 25 -220 25 -115 0 -195 -4 -195 -9z m208 -27 l74 -7 -4 -113 c-2 -62 -7 -117 -13 -123 -5 -5 -47 -12 -92 -16 -79 -7 -83 -6 -107 19 -25 24 -26 31 -26 134 0 60 3 111 6 115 3 3 25 4 47 2 23 -2 75 -7 115 -11z m187 -9 c32 -31 31 -50 0 -81 -35 -35 -49 -26 -53 31 -5 79 10 94 53 50z" />
            {/* pi  */}
            <path d="M256 263 c8 -69 10 -73 35 -73 16 0 19 8 20 43 2 41 2 42 8 8 7 -38 30 -58 55 -48 17 7 23 47 6 47 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 11 10 25 0 24 -2 25 -71 25 l-70 0 7 -57z m124 37 c0 -5 -5 -10 -11 -10 -8 0 -10 -14 -6 -40 4 -29 1 -40 -8 -40 -15 0 -25 22 -25 56 0 15 -6 24 -15 24 -11 0 -15 -11 -15 -40 0 -22 -4 -40 -10 -40 -5 0 -10 18 -10 40 0 22 -4 40 -10 40 -5 0 -10 5 -10 10 0 6 27 10 60 10 33 0 60 -4 60 -10z" />
            {/* dot */}
            <path
              d="M550 90 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0 -15 -4 -15 -10z"
              fill="#ffffff"
            />
          </g>
        </svg>
        <h1
          className={`${props.textSize} ${
            props.animated ? "text-edge-outline animate-title" : ""
          } mx-4 text-transparent z-10 whitespace-nowrap bg-clip-text bg-white font-[650]
          }`}
        >
          picafe
        </h1>
      </div>
    </Link>
  );
}
