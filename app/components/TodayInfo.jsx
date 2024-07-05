import React from "react";
import { Text, View } from "react-native";
import { format } from "date-fns";
import { en } from "date-fns/locale";
import SunAndCloud from "../../assets/svg/SunAndCloud";
import CloudIcon from "../../assets/svg/CloudIcon";

const TodayInfo = ({
  currentData,
  weatherInSixAm,
  weatherInTwelvePm,
  weatherInSixPm,
  weatherInMidnight,
}) => {
  const date = new Date(currentData);
  const formattedMonth = format(date, "LLLL", { locale: en });
  const formattedDate = format(date, "dd");

  return (
    <View className="flex-1">
      <View className="bg-[#104084]/30 rounded-[20px] mx-10">
        <View className="flex-row items-center text-center px-5 py-4">
          <Text className="text-white text-[20px] font-semibold">Today</Text>
          <View className="flex-1" />
          <Text className="text-white text-[20px] font-semibold">
            {formattedMonth}, {formattedDate}
          </Text>
        </View>
        <View className={"flex-row items-center justify-between p-[15px]"}>
          <View className={"items-center"}>
            <Text className={"text-white font-semibold text-[18px]"}>
              {weatherInSixAm} °C
            </Text>
            <SunAndCloud className={"py-[30px]"} />
            <Text className={"text-white font-semibold text-[18px]"}>6:00</Text>
          </View>
          <View className={"items-center"}>
            <Text className={"text-white font-semibold text-[18px]"}>
              {weatherInTwelvePm} °C
            </Text>
            <SunAndCloud className={"py-[30px]"} />
            <Text className={"text-white font-semibold text-[18px]"}>
              12:00
            </Text>
          </View>
          <View className={"items-center"}>
            <Text className={"text-white font-semibold text-[18px]"}>
              {weatherInSixPm} °C
            </Text>
            <CloudIcon className={"py-[30px]"} />
            <Text className={"text-white font-semibold text-[18px]"}>
              18:00
            </Text>
          </View>
          <View className={"items-center"}>
            <Text className={"text-white font-semibold text-[18px]"}>
              {weatherInMidnight} °C
            </Text>
            <SunAndCloud className={"py-[30px]"} />
            <Text className={"text-white font-semibold text-[18px]"}>
              00:00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TodayInfo;
