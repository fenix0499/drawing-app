import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ImageGalery from "../assets/jpg/galery-image.jpg";
import ImageAvatar from "../assets/jpg/image-avatar.jpg";

const GaleryView = ({ navigation }) => {
  return (
    <ImageBackground style={styles.image} source={ImageGalery}>
      <View style={styles.imagesContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ImageAvatar} style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ImageAvatar} style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ImageAvatar} style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ImageAvatar} style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ImageAvatar} style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ImageAvatar} style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ImageAvatar} style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ImageAvatar} style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ImageAvatar} style={styles.avatar} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default GaleryView;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  imagesContainer: {
    position: "absolute",
    bottom: 0,
    width: "90%",
    height: 120,
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: 40,
    backgroundColor: "#000",
    zIndex: 1,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "transparent",
    overflow: "scroll",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: "auto",
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 3,
    borderColor: "#B3A3D4",
  },
});
