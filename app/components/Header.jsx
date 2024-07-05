import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import GeoIcon from "../../assets/svg/GeoIcon";
import OptIcon from "../../assets/svg/OptIcon";

const Header = ({ currentCity, onCitySelect }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cities] = useState([
    "Miami",
    "Novosibirsk",
    "Yekaterinburg",
    "Kemerovo",
  ]);

  const handleCitySelect = (city) => {
    onCitySelect(city);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <View className="flex-row gap-2 pt-4 pl-4 items-center">
          <GeoIcon />
          <Text className="text-white text-lg font-semibold">
            {currentCity}
          </Text>
          <OptIcon />
        </View>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View className="flex-1  bg-opacity-50">
            <TouchableWithoutFeedback>
              <View className="absolute top-[110px] left-4 bg-[#104084]/30 rounded-lg p-1 w-[180]">
                <FlatList
                  data={cities}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => handleCitySelect(item)}
                      className="p-2  border-gray-200"
                    >
                      <Text className="text-white font-semibold text-lg">
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default Header;
