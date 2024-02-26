import React from "react";
import { View } from "react-native";
import Header from "./Header";
import DigitalCard from "./DigitalCard";
import IconRow from "./IconRow";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Header></Header>
      <DigitalCard></DigitalCard>
      <IconRow></IconRow>
    </View>
  );
};

export default HomeScreen;
