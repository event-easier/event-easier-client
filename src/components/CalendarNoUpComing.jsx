import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function CalendarNoUpComing() {
  return (
    <Box>
      <Box
        m={"10px auto"}
        mb={"0px"}
        w={"300px"}
        h={"300px"}
        transform={"scale:2"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 420 380"
          style={{
            width: "300px",
            height: "300px",
          }}
        >
          <g filter="url(#CalendarDark_svg__a)">
            <rect
              width="236"
              height="236"
              x="80"
              y="33"
              fill="url(#CalendarDark_svg__b)"
              rx="32"
            />
          </g>
          <path
            fill="url(#CalendarDark_svg__c)"
            fill-rule="evenodd"
            d="M115 57c-6.075 0-11 4.925-11 11s4.925 11 11 11h166c6.075 0 11-4.925 11-11s-4.925-11-11-11H115Zm-10.232 62.58c-.768 1.624-.768 3.722-.768 7.92s0 6.296.768 7.92a7.992 7.992 0 0 0 3.812 3.812c1.624.768 3.722.768 7.92.768h33c4.198 0 6.296 0 7.92-.768a7.992 7.992 0 0 0 3.812-3.812c.768-1.624.768-3.722.768-7.92s0-6.296-.768-7.92a7.992 7.992 0 0 0-3.812-3.812c-1.624-.768-3.722-.768-7.92-.768h-33c-4.198 0-6.296 0-7.92.768a7.992 7.992 0 0 0-3.812 3.812ZM104 198.8c0-4.48 0-6.721.872-8.432a8.003 8.003 0 0 1 3.496-3.496c1.711-.872 3.952-.872 8.432-.872h32.4c4.48 0 6.721 0 8.432.872a8.003 8.003 0 0 1 3.496 3.496c.872 1.711.872 3.952.872 8.432v33.4c0 4.48 0 6.721-.872 8.432a8.003 8.003 0 0 1-3.496 3.496c-1.711.872-3.952.872-8.432.872h-32.4c-4.48 0-6.721 0-8.432-.872a8.003 8.003 0 0 1-3.496-3.496C104 238.921 104 236.68 104 232.2v-33.4Zm68.872-100.432C172 100.08 172 102.32 172 106.8v34.4c0 4.48 0 6.721.872 8.432a8.003 8.003 0 0 0 3.496 3.496c1.711.872 3.952.872 8.432.872h32.4c4.48 0 6.721 0 8.432-.872a8.003 8.003 0 0 0 3.496-3.496c.872-1.711.872-3.952.872-8.432v-34.4c0-4.48 0-6.721-.872-8.432a8.002 8.002 0 0 0-3.496-3.496C223.921 94 221.68 94 217.2 94h-32.4c-4.48 0-6.721 0-8.432.872a8.002 8.002 0 0 0-3.496 3.496ZM172 232.5c0-4.198 0-6.296.768-7.92a7.992 7.992 0 0 1 3.812-3.812c1.624-.768 3.722-.768 7.92-.768h33c4.198 0 6.296 0 7.92.768a7.992 7.992 0 0 1 3.812 3.812c.768 1.624.768 3.722.768 7.92s0 6.296-.768 7.92a7.992 7.992 0 0 1-3.812 3.812c-1.624.768-3.722.768-7.92.768h-33c-4.198 0-6.296 0-7.92-.768a7.992 7.992 0 0 1-3.812-3.812c-.768-1.624-.768-3.722-.768-7.92Zm68.872-74.132C240 160.079 240 162.32 240 166.8v29.4c0 4.48 0 6.721.872 8.432a8.003 8.003 0 0 0 3.496 3.496c1.711.872 3.952.872 8.432.872h32.4c4.48 0 6.721 0 8.432-.872a8.003 8.003 0 0 0 3.496-3.496c.872-1.711.872-3.952.872-8.432v-29.4c0-4.48 0-6.721-.872-8.432a8.003 8.003 0 0 0-3.496-3.496C291.921 154 289.68 154 285.2 154h-32.4c-4.48 0-6.721 0-8.432.872a8.003 8.003 0 0 0-3.496 3.496Z"
            clip-rule="evenodd"
          />
          <g filter="url(#CalendarDark_svg__d)">
            <rect
              width="100"
              height="100"
              x="258"
              fill="url(#CalendarDark_svg__e)"
              rx="32"
            />
            <rect
              width="100"
              height="100"
              x="258"
              fill="url(#CalendarDark_svg__f)"
              rx="32"
            />
          </g>
          <path
            fill="#E0E0E0"
            d="M308.11 82.398c-5.222-.02-9.716-1.305-13.481-3.856-3.745-2.55-6.629-6.244-8.653-11.082-2.004-4.838-2.996-10.657-2.976-17.458 0-6.781 1.002-12.56 3.006-17.337 2.024-4.777 4.909-8.41 8.653-10.9 3.765-2.51 8.249-3.765 13.451-3.765s9.675 1.255 13.42 3.765c3.765 2.51 6.659 6.153 8.684 10.93 2.024 4.757 3.026 10.526 3.005 17.307 0 6.821-1.012 12.65-3.036 17.488-2.004 4.838-4.878 8.532-8.623 11.083-3.744 2.55-8.228 3.825-13.45 3.825Zm0-10.9c3.562 0 6.406-1.791 8.532-5.374 2.125-3.583 3.178-8.957 3.157-16.122 0-4.717-.485-8.643-1.457-11.78-.951-3.138-2.308-5.496-4.069-7.075-1.74-1.579-3.795-2.368-6.163-2.368-3.542 0-6.376 1.77-8.502 5.313-2.125 3.542-3.198 8.846-3.218 15.91 0 4.777.476 8.764 1.427 11.962.972 3.178 2.338 5.567 4.099 7.166 1.761 1.579 3.826 2.368 6.194 2.368Z"
          />
          <path
            fill="url(#CalendarDark_svg__g)"
            d="M308.11 82.398c-5.222-.02-9.716-1.305-13.481-3.856-3.745-2.55-6.629-6.244-8.653-11.082-2.004-4.838-2.996-10.657-2.976-17.458 0-6.781 1.002-12.56 3.006-17.337 2.024-4.777 4.909-8.41 8.653-10.9 3.765-2.51 8.249-3.765 13.451-3.765s9.675 1.255 13.42 3.765c3.765 2.51 6.659 6.153 8.684 10.93 2.024 4.757 3.026 10.526 3.005 17.307 0 6.821-1.012 12.65-3.036 17.488-2.004 4.838-4.878 8.532-8.623 11.083-3.744 2.55-8.228 3.825-13.45 3.825Zm0-10.9c3.562 0 6.406-1.791 8.532-5.374 2.125-3.583 3.178-8.957 3.157-16.122 0-4.717-.485-8.643-1.457-11.78-.951-3.138-2.308-5.496-4.069-7.075-1.74-1.579-3.795-2.368-6.163-2.368-3.542 0-6.376 1.77-8.502 5.313-2.125 3.542-3.198 8.846-3.218 15.91 0 4.777.476 8.764 1.427 11.962.972 3.178 2.338 5.567 4.099 7.166 1.761 1.579 3.826 2.368 6.194 2.368Z"
          />
          <defs>
            <linearGradient
              id="CalendarDark_svg__b"
              x1="198"
              x2="198"
              y1="33"
              y2="269"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A4A4A" />
              <stop offset="1" stop-color="#313131" />
            </linearGradient>
            <linearGradient
              id="CalendarDark_svg__c"
              x1="201"
              x2="201"
              y1="57"
              y2="245"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#111" />
              <stop offset="1" stop-color="#1F1F1F" />
            </linearGradient>
            <linearGradient
              id="CalendarDark_svg__e"
              x1="308"
              x2="308"
              y1="0"
              y2="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F7F7F7" />
              <stop offset="1" stop-color="#fff" />
            </linearGradient>
            <linearGradient
              id="CalendarDark_svg__f"
              x1="308"
              x2="308"
              y1="0"
              y2="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A4A4A" />
              <stop offset="1" stop-color="#313131" />
            </linearGradient>
            <linearGradient
              id="CalendarDark_svg__g"
              x1="308.11"
              x2="308.11"
              y1="18"
              y2="82.398"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#111" />
              <stop offset="1" stop-color="#1F1F1F" />
            </linearGradient>
            <filter
              id="CalendarDark_svg__a"
              width="396"
              height="444"
              x="0"
              y="5"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="14" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1534_31596"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2.767" />
              <feGaussianBlur stdDeviation="1.107" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
              <feBlend
                in2="effect1_backgroundBlur_1534_31596"
                result="effect2_dropShadow_1534_31596"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="6.65" />
              <feGaussianBlur stdDeviation="2.66" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0503198 0" />
              <feBlend
                in2="effect2_dropShadow_1534_31596"
                result="effect3_dropShadow_1534_31596"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="12.522" />
              <feGaussianBlur stdDeviation="5.009" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0417275 0" />
              <feBlend
                in2="effect3_dropShadow_1534_31596"
                result="effect4_dropShadow_1534_31596"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="22.336" />
              <feGaussianBlur stdDeviation="8.935" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.035 0" />
              <feBlend
                in2="effect4_dropShadow_1534_31596"
                result="effect5_dropShadow_1534_31596"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="41.778" />
              <feGaussianBlur stdDeviation="16.711" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0282725 0" />
              <feBlend
                in2="effect5_dropShadow_1534_31596"
                result="effect6_dropShadow_1534_31596"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="100" />
              <feGaussianBlur stdDeviation="40" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0196802 0" />
              <feBlend
                in2="effect6_dropShadow_1534_31596"
                result="effect7_dropShadow_1534_31596"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect7_dropShadow_1534_31596"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
              <feBlend in2="shape" result="effect8_innerShadow_1534_31596" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology
                in="SourceAlpha"
                radius="1"
                result="effect9_innerShadow_1534_31596"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
              <feBlend
                in2="effect8_innerShadow_1534_31596"
                result="effect9_innerShadow_1534_31596"
              />
            </filter>
            <filter
              id="CalendarDark_svg__d"
              width="260"
              height="308"
              x="178"
              y="-28"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="14" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1534_31596"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2.767" />
              <feGaussianBlur stdDeviation="1.107" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
              <feBlend
                in2="effect1_backgroundBlur_1534_31596"
                result="effect2_dropShadow_1534_31596"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="6.65" />
              <feGaussianBlur stdDeviation="2.66" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0503198 0" />
              <feBlend
                in2="effect2_dropShadow_1534_31596"
                result="effect3_dropShadow_1534_31596"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="12.522" />
              <feGaussianBlur stdDeviation="5.009" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0417275 0" />
              <feBlend
                in2="effect3_dropShadow_1534_31596"
                result="effect4_dropShadow_1534_31596"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="22.336" />
              <feGaussianBlur stdDeviation="8.935" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.035 0" />
              <feBlend
                in2="effect4_dropShadow_1534_31596"
                result="effect5_dropShadow_1534_31596"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="41.778" />
              <feGaussianBlur stdDeviation="16.711" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0282725 0" />
              <feBlend
                in2="effect5_dropShadow_1534_31596"
                result="effect6_dropShadow_1534_31596"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="100" />
              <feGaussianBlur stdDeviation="40" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0196802 0" />
              <feBlend
                in2="effect6_dropShadow_1534_31596"
                result="effect7_dropShadow_1534_31596"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect7_dropShadow_1534_31596"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology
                in="SourceAlpha"
                radius="1"
                result="effect8_innerShadow_1534_31596"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
              <feBlend in2="shape" result="effect8_innerShadow_1534_31596" />
            </filter>
          </defs>
        </svg>
      </Box>
      <Box>
        <Heading as="h4" align={"center"} fontSize={"24px"}>
          No Events
        </Heading>
        <Heading as="h4" align={"center"} fontSize={"16px"} mt={"10px"}>
          The calendar is empty. Why not add a new event now?
        </Heading>
      </Box>
    </Box>
  );
}