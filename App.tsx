import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch, SafeAreaView } from "react-native";

import { ThemeContext } from "./src/context/ThemeContext";
import { Colors } from "./src/styles/Colors";
import Button from "./src/components/Button";
import Keyboard from "./src/components/Keyboard";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "#000" }]
        }
      >
        <StatusBar style={theme === "light" ? "auto" : "light"} />
        <Switch
          value={theme === "light"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <Keyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
