import React from "react";
import { Svg, Rect, G, Circle } from "react-native-svg/src/ReactNativeSVG.web";

const App = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="275"
      height="200"
      viewBox="0 0 275 200"
    >
      <G fill="none" strokeWidth="10">
        <Rect
          width="300"
          height="100"
          style={{
            fill: "rgb(0,0,255)",
            strokeWidth: 3,
            stroke: "rgb(0,0,0)"
          }}
          onPress={() => {
            alert("hooray it works");
          }}
        />
      </G>
    </Svg>
  );
};

export default App;
