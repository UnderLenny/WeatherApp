import React from "react";
import { View, Text } from "react-native";
import PrecipitationIcon from "../../assets/svg/PrecipitationIcon";
import HumidityIcon from "../../assets/svg/HumidityIcon";
import WindSpeedIcon from "../../assets/svg/WindSpeedIcon";

const WeatherInfo = ({ precipitation, humidity, windSpeed }) => {
  return (
    <View className="bg-[#104084]/30 rounded-[20px] items-center mx-10 mt-10 mb-5 ">
      <View className={"flex-row gap-10 items-center p-1.5 "}>
        <View className={"flex-row gap-0.5 items-center "}>
          <PrecipitationIcon />
          <Text className="text-white text-[14px] font-semibold">
            {precipitation}%
          </Text>
        </View>
        <View className={"flex-row gap-0.5 items-center"}>
          <HumidityIcon />
          <Text className="text-white text-[14px] font-semibold">
            {humidity}%
          </Text>
        </View>
        <View className={"flex-row gap-0.5 items-center"}>
          <WindSpeedIcon />
          <Text className="text-white text-[14px] font-semibold">
            {windSpeed} km/h
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherInfo;
