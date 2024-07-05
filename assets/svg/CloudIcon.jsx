import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CloudIcon(props) {
  return (
    <Svg
      width={35}
      height={23}
      viewBox="0 0 35 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_ii_401_226)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.878 22.275H7.53a7.522 7.522 0 110-15.043h.413c1.458 0 2.824.393 3.998 1.08C13.468 3.79 17.744.533 22.782.533h.566c6.004 0 10.87 4.867 10.87 10.87 0 6.004-4.866 10.871-10.87 10.871h-7.47z"
          fill="#91DEFF"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default CloudIcon;
