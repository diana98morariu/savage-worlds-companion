import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { BookCard } from "../../components/BookCard";
import { StyleSheet, Image, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const bookssObj = [
  {
    imagePath: "book1",
    bookTitle: "Savage Worlds Adventure Edition",
  },
  {
    imagePath: "book2",
    bookTitle: "Savage Worlds Adventure Edition Fantasy Companion",
  },
];

export default function Books() {
  return (
    <ThemedView style={styles.container}>
      {/* <ThemedText>Edit app/books.tsx to edit this screen.</ThemedText> */}
      <ThemedView style={styles.booksList}>
        {bookssObj.map((book, index) => (
          <BookCard
            key={index}
            imagePath={book.imagePath}
            title={book.bookTitle}
          />
        ))}
      </ThemedView>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the whole screen
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  booksList: {
    width: "100%",
  },
});
