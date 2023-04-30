import { Image, StyleSheet } from "react-native";
const peepoStare = require("../../assets/peepo-stare.png");

export const HomePeepo: React.FC = () => {
  return <Image style={styles.image} source={peepoStare}></Image>;
};

const styles = StyleSheet.create({
  image: {
    marginBottom: 12,
  },
});
