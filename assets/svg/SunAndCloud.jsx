import * as React from "react";
import Svg, {
  Circle,
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SunAndCloud(props) {
  return (
    <Svg
      width={35}
      height={25}
      viewBox="0 0 35 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={9.00899}
        cy={6.85555}
        r={6.34676}
        fill="url(#paint0_radial_401_202)"
      />
      <G filter="url(#filter0_ii_401_202)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.878 24.275H7.53a7.522 7.522 0 110-15.043h.413c1.458 0 2.824.393 3.998 1.08 1.526-4.522 5.802-7.778 10.84-7.778h.566c6.004 0 10.87 4.867 10.87 10.87 0 6.004-4.866 10.871-10.87 10.871h-7.47z"
          fill="#fff"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_401_202"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(132.136 5.014 4.257) scale(13.2241)"
        >
          <Stop stopColor="#FFF72C" />
          <Stop offset={1} stopColor="#DF7800" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default SunAndCloud;
