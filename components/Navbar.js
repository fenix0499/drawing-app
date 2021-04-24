import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import menuIcon from "../assets/svg/menu.svg";
import paintIcon from "../assets/svg/paleta-de-pintura.svg";
import leftArrow from '../assets/svg/left-arrow.svg';
import rigthArrow from '../assets/svg/rigth-arrow.svg';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Navbar = ({ navigation }) => {
  return (
    <View style={style.navContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Galery')} style={style.menuButton}>
        <Image source={menuIcon} style={style.menuIcon} />
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
    </View>
  );
};
const style = StyleSheet.create({
  navContainer: {
    position: "absolute",
    top: 0,
    width: "90%",
    height: 50,
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 20,
    backgroundColor: "#281A44",
    zIndex: 1,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
  },
  menuButton: {
    height: 40,
    width: 40,
    borderWidth: 3,
    borderColor: "#B3A3D4",
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 5,
    alignItems: "center",
    marginRight: 13,
    backgroundColor: '#35225C',
  },
  menuIcon: {
    width: 13,
    height: 13,
    marginTop: "auto",
    marginBottom: "auto",
  },
  navButton: {
    height: 40,
    width: 40,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 5,
    alignItems: "center",
    marginRight: 13,
    backgroundColor: '#35225C',
  },
  navIcon: {
    width: 30,
    height: 30,
    marginTop: "auto",
    marginBottom: "auto",
  },
});

export default Navbar;
