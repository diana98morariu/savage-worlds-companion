import { View, type ViewProps } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Image, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export type BookCardProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  imagePath?: string;
  title?: string;
};

const imageMap: { [key: string]: any } = {
  book1: require("./../assets/images/swade-book-cover.jpg"),
  book2: require("./../assets/images/swade-fc-book-cover.jpg"),
  // Add more mappings here
};
export function BookCard({
  style,
  lightColor,
  darkColor,
  imagePath,
  title,
  ...otherProps
}: BookCardProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const localImageSource = imagePath ? imageMap[imagePath] : null;

  return (
    <ThemedView style={styles.bookContainer}>
      <Image source={localImageSource} style={styles.bookImage} />
      <ThemedView style={styles.textContainer}>
        <ThemedText
          type="defaultSemiBold"
          style={[styles.title, style]}
          {...otherProps}
        >
          {title}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  bookContainer: {
    flexDirection: "row", // Stack children vertically (default)
    justifyContent: "flex-start",
    alignItems: "stretch",
    width: width,
    padding: 20,
    borderBottomWidth: 2, // 1px border
    borderBottomColor: "#242829",
  },
  textContainer: {
    width: 500, // Match the width of the image
    height: 200 * (2 / 3), // Match the height of the image (same aspect ratio)
  },
  title: {
    // textAlign: "left",
  },
  bookImage: {
    width: 200,
    aspectRatio: 2 / 3, // Adjust this ratio according to your image (example: 2:3 ratio for a typical book cover)
    resizeMode: "contain",
    borderBlockColor: "green",
  },
});
