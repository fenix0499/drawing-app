import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Canvas, Navbar, ToolBar } from "../components";


const DrawingView = ({ navigation }) => {
  return (
    <>
      <Navbar navigation={navigation} />
      <Canvas />
      <ToolBar />
    </>
  );
};

export default DrawingView;
