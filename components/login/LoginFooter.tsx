import { Text, StyleSheet } from "react-native";
import { commonStyles } from "../../common";

interface LoginFooterProps {
  content: string;
}

export const LoginFooter: React.FC<LoginFooterProps> = ({ content }) => {
  return <Text style={styles.text}>{content}</Text>;
};

const styles = StyleSheet.create({
  text: {
    ...commonStyles?.smallText,
    marginTop: 100,
    textAlign: "right",
  },
});
