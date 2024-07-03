import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function GeoIcon(props) {
  return (
    <Svg width={27} height={27} viewBox="0 0 27 27" {...props}>
      <G filter="url(#filter0_ii_401_186)">
        <G filter="url(#filter1_dii_401_186)" clipPath="url(#clip0_401_186)">
          <Path
            d="M13.5 26.694l-7.16-7.16a10.125 10.125 0 1114.32 0l-7.16 7.16zm5.569-8.75a7.875 7.875 0 10-11.138 0l5.569 5.568 5.569-5.568zm-5.569-3.32a2.25 2.25 0 110-4.499 2.25 2.25 0 010 4.5z"
            fill="#fff"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_401_186">
          <Path fill="#fff" d="M0 0H27V27H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default GeoIcon;
