import React from "react";
import { Text, View, FlatList } from "react-native";
import { format } from "date-fns";
import { en } from "date-fns/locale";

const TodayInfo = ({ currentData, weatherInSixAm }) => {
  const date = new Date(currentData);
  const formattedMonth = format(date, "LLLL", { locale: en });
  const formattedDate = format(date, "dd");

  return (
    <View className="bg-[#104084]/30 rounded-[20px] mx-10">
      <View className="flex-row items-center px-4 py-2">
        <Text className="text-white text-[20px] font-semibold">Today</Text>
        <View className="flex-1" />
        <Text className="text-white text-[20px] font-semibold">
          {formattedMonth}, {formattedDate}
        </Text>
      </View>
      <View>
        <View>
          <Text>{currentData}</Text>
          <Text>{weatherInSixAm}</Text>
        </View>
        <View>
          <Text>{currentData}</Text>
          <Text>{weatherInSixAm}</Text>
        </View>
        <View>
          <Text>{currentData}</Text>
          <Text>{weatherInSixAm}</Text>
        </View>
      </View>
    </View>
  );
};

export default TodayInfo;
