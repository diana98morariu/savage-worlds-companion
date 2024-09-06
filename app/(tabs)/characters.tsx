import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { CharacterCard } from "../../components/CharacterCard";
import {
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  Animated,
} from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";

const { width, height } = Dimensions.get("window");

const charactersObj = [
  {
    imagePath: "character1",
    characterName: "Sarah",
    level: 3,
    concept: "Mage",
  },
  {
    imagePath: "character2",
    characterName: "Helen",
    level: 5,
    concept: "Fighter",
  },
  {
    imagePath: "character1",
    characterName: "Sarah",
    level: 3,
    concept: "Mage",
  },
  {
    imagePath: "character2",
    characterName: "Helen",
    level: 5,
    concept: "Fighter",
  },
  {
    imagePath: "character1",
    characterName: "Sarah",
    level: 3,
    concept: "Mage",
  },
  {
    imagePath: "character2",
    characterName: "Helen",
    level: 5,
    concept: "Fighter",
  },
];

export default function Characters() {
  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView>
        <ThemedView style={styles.charactersList}>
          {charactersObj.map((character, index) => (
            <CharacterCard
              key={index}
              imagePath={character.imagePath}
              name={character.characterName}
              level={character.level}
              concept={character.concept}
            />
          ))}
        </ThemedView>
      </Animated.ScrollView>
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
