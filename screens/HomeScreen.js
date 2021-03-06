import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Product from "./Product";

const HomeScreen = (props) => {
  const name = ["mizan", "arif", "razib", "mizan"];

  console.log(props);

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={{ height: 100, width: 100 }}
        source={{
          uri: "data:image/png;base64,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",
        }}
      />

      <Button
        title="About"
        onPress={() => props.navigation.navigate("About")}
      />
      <Button
        title="Contact"
        onPress={() => props.navigation.navigate("Contact")}
      />

      <Product ourname={name} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
