import React from "react";
import { Image, View, Text } from "react-native";

function MainWeather({ temperature, conditions }) {
  return (
    <View
      className="flex items-center"
      style={{ paddingTop: 79, paddingLeft: 7 }}
    >
      <Image source={require("./../../assets/sun.png")} />
      <Text
        className={"text-white"}
        style={{ fontFamily: "ArialRoundedMTBold", fontSize: 64 }}
      >
        {temperature ? `${temperature}°C` : "Loading..."}
      </Text>
      <Text
        className={"text-white"}
        style={{
          fontFamily: "ArialRoundedMTBold",
          fontSize: 18,
        }}
      >
        {conditions}
      </Text>
    </View>
  );
}

export default MainWeather;
