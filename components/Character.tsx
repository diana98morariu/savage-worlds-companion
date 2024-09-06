import { View, type ViewProps } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Image, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export type CharacterProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  imagePath: string;
  name: string;
  level: number;
  concept: string;
  player?: string;
};

const imageMap: { [key: string]: any } = {
  book1: require("./../assets/images/swade-book-cover.jpg"),
  book2: require("./../assets/images/swade-fc-book-cover.jpg"),
};
export function Character({
  style,
  lightColor,
  darkColor,
  imagePath,
  name,
  level,
  concept,
  ...otherProps
}: CharacterProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const localImageSource = imagePath ? imageMap[imagePath] : null;

  return (
    <ThemedView style={styles.characterContainer}>
      <Image source={localImageSource} style={styles.characterImage} />
      <View style={styles.textContainer}>
        <ThemedText
          type="subtitle"
          style={[styles.title, style]}
          {...otherProps}
        >
          {name}
        </ThemedText>
        <View style={styles.innerTextContainer}>
          <ThemedText style={[styles.text, style]} {...otherProps}>
            Level {level}
          </ThemedText>
          <ThemedText style={[styles.text, style]} {...otherProps}>
            {concept}
          </ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  characterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    width: width,
    padding: 20,
    borderBottomWidth: 2, // 1px border
    borderBottomColor: "#242829", // Light grey color for the border
  },
  textContainer: {
    width: 500,
    height: 200 * (2 / 3),
  },
  innerTextContainer: {
    flexDirection: "row",
  },
  title: {
    // textAlign: "left",
  },
  text: {
    marginRight: 20,
  },
  characterImage: {
    width: 200,
    aspectRatio: 1,
    resizeMode: "cover",
    borderBlockColor: "green",
  },
});
