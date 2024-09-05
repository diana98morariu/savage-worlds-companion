// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export function TabBarIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>["name"]>) {
  return <Ionicons size={28} style={[styles.iconContainer, style]} {...rest} />;
}

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 0,
    // Apply styles based on platform
    // ...(Platform.OS === "ios" && {
    //   marginRight: 5,
    // }),
    // Apply styles based on screen width
    ...(width > 500 && {
      marginLeft: -2,
    }),
  },
});
