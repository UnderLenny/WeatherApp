import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import GeoIcon from "../../assets/svg/GeoIcon";
import OptIcon from "../../assets/svg/OptIcon";

const Header = ({ currentCity }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity>
      <View className={"flex-row gap-2 pt-4 pl-4 items-center"}>
        <GeoIcon />
        <Text className={"text-white text-lg font-semibold	"}>
          {currentCity}
        </Text>
        <OptIcon />
      </View>
    </TouchableOpacity>
  );
};

export default Header;
