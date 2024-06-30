import React from "react";
import { Image, View, Text } from "react-native";

function MainWeather({ temperature }) {
  return (
    <View className="flex items-center ">
      <Image source={require("./../../assets/sun.png")} />
      <Text
        className={"text-white"}
        style={{ fontFamily: "ArialRoundedMTBold", fontSize: 64 }}
      >
        {temperature ? `${temperature}°C` : "Loading..."}
      </Text>
    </View>
  );
}

export default MainWeather;
