import React from "react";
import { Image, View, Text } from "react-native";

function MainWeather({ temperature, conditions }) {
  return (
    <View className="flex items-center pt-1 pl-1">
      <Image
        className="w-[284px] h-[187px] mb-[-20px]"
        source={require("./../../assets/sun.png")}
      />
      <Text
        className={"text-white text-[64px]"}
        style={{ fontFamily: "ArialRoundedMTBold" }}
      >
        {temperature ? `${temperature}°C` : "Loading..."}
      </Text>
      <Text
        className={"text-white text-[18px]"}
        style={{
          fontFamily: "ArialRoundedMTBold",
        }}
      >
        {conditions}
      </Text>
    </View>
  );
}

export default MainWeather;
