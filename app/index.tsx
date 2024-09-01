import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";

export default function Login() {
  const loggedIn = true;

  if (loggedIn) router.navigate("/books");

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>Edit app/login.tsx to edit this screen.</ThemedText>
    </ThemedView>
  );
}
