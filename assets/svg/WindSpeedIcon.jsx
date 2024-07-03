import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function WindSpeedIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        filter="url(#filter0_d_401_265)"
        fill="#fff"
        clipPath="url(#clip0_401_265)"
      >
        <Path d="M3.933 10.376h7.677a3.769 3.769 0 003.77-3.334 3.656 3.656 0 00-.943-2.835A3.697 3.697 0 0011.71 3H9.638a.933.933 0 000 1.865h2.072a1.825 1.825 0 011.806 2.063 1.864 1.864 0 01-1.88 1.581H3.933a.933.933 0 100 1.866zM20.983 16.53a3.769 3.769 0 00-3.77-3.334H10.8a.932.932 0 100 1.865h6.439a1.865 1.865 0 011.88 1.581 1.824 1.824 0 01-1.807 2.063H15.24a.933.933 0 100 1.866h2.071a3.696 3.696 0 002.729-1.207 3.655 3.655 0 00.943-2.835zM8.745 14.13a.934.934 0 00-.933-.934h-3.88a.933.933 0 100 1.865h3.88a.934.934 0 00.933-.932zM15.705 10.978a.3.3 0 00.212-.088l.632-.632a2.56 2.56 0 002.97-3.18.3.3 0 00-.212-.213 2.561 2.561 0 00-3.18 2.97l-.634.63a.3.3 0 00.212.513z" />
        <Path d="M9.231 16.324l-.632-.632a.3.3 0 00-.424.424l.632.633c-.163.836.099 1.699.699 2.304.624.618 2.018 1.142 2.694.45a2.56 2.56 0 00-2.969-3.18v.001z" />
      </G>
      <Defs>
        <ClipPath id="clip0_401_265">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default WindSpeedIcon;
