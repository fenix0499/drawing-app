import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import menuIcon from "../assets/svg/menu.svg";
import paintIcon from "../assets/svg/paleta-de-pintura.svg";
import leftArrow from '../assets/svg/left-arrow.svg';
import rigthArrow from '../assets/svg/rigth-arrow.svg';

const ToolBar = () => {
  return (
    <View style={style.navContainer}>
      <TouchableOpacity style={style.navButton}>
        <Image source={paintIcon} style={style.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.navButton}>
        <Image source={leftArrow} style={style.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.navButton}>
        <Image source={rigthArrow} style={style.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.navButton}>
        <Image source={paintIcon} style={style.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.navButton}>
        <Image source={leftArrow} style={style.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.navButton}>
        <Image source={rigthArrow} style={style.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.navButton}>
        <Image source={paintIcon} style={style.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.navButton}>
        <Image source={leftArrow} style={style.navIcon} />
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  navContainer: {
    position: 'absolute',
    bottom: 0,
    width: "80%",
    height: 40,
    marginBottom: 10,
    backgroundColor: "#281A44",
    zIndex: 12,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignSelf: 'center',
    justifyContent: 'space-around',
    paddingLeft: 5,
    paddingRight: 5,
  },
  navButton: {
    height: 30,
    width: 30,
    borderRadius: 10,
    marginTop: 5,
    alignItems: "center",
    backgroundColor: '#35225C',
  },
  navIcon: {
    width: 20,
    height: 20,
    marginTop: "auto",
    marginBottom: "auto",
  },
});

export default ToolBar;