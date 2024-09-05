import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Book } from "./../../components/Book";
import { StyleSheet, Image, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Books() {
  return (
    <ThemedView style={styles.container}>
      {/* <ThemedText>Edit app/books.tsx to edit this screen.</ThemedText> */}
      <ThemedView style={styles.booksList}>
        <Book imagePath="book1" title="Savage Worlds Adventure Edition" />
        <Book
          imagePath="book2"
          title="Savage Worlds Adventure Edition Fantasy Companion"
        />
      </ThemedView>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the whole screen
    justifyContent: "flex-start", // Align items to the top
    alignItems: "flex-start", // Align items to the left (horizontally)
    paddingTop: 20,
  },
  booksList: {
    width: "100%",
  },
});
