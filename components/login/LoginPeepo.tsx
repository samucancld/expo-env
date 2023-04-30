import { Image, StyleSheet } from "react-native";
const peepoPolice = require("../../assets/peepo-police.png");

export const LoginPeepo: React.FC = () => {
  return <Image style={styles.image} source={peepoPolice}></Image>;
};

const styles = StyleSheet.create({
  image: {
    marginBottom: 12,
  },
});
