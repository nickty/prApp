import React from "react";
import { Text, View } from "react-native";

const Product = ({ ourname }) => {
  //   console.log(props);

  return (
    <View>
      {/* <Text>{ourname[0]}</Text>
      <Text>{ourname[1]}</Text>
      <Text>{ourname[2]}</Text> */}
      {ourname.map((nnn) => (
        <Text key={nnn}>{nnn}</Text>
      ))}
    </View>
  );
};

export default Product;
