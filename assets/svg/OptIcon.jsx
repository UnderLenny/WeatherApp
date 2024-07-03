import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function OptIcon(props) {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_401_191)">
        <Path
          d="M13.5 16.875L8.729 12.1l1.591-1.59 3.182 3.182 3.181-3.182 1.592 1.59-4.773 4.774z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_401_191">
          <Path fill="#fff" d="M0 0H27V27H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default OptIcon;
