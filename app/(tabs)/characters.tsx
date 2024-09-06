import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Character } from "./../../components/Character";
import { StyleSheet, Image, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const charactersObj = [
  {
    imagePath: "book1",
    characterName: "Sarah",
    level: 3,
    concept: "Mage",
  },
  {
    imagePath: "book2",
    characterName: "Helen",
    level: 5,
    concept: "Fighter",
  },
];

export default function Characters() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.charactersList}>
        {charactersObj.map((character, index) => (
          <Character
            key={index}
            imagePath={character.imagePath}
            name={character.characterName}
            level={character.level}
            concept={character.concept}
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
  charactersList: {
    width: "100%",
  },
});
