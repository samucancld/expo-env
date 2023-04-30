import { Text, StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { commonStyles } from "../../common";

interface LoginButtonProps {
  onTap: CallableFunction;
  text?: string;
  color?: string;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  onTap,
  text = "Login",
  color = "lightblue",
}) => {
  return (
    <View
      style={{
        ...styles.button,
        backgroundColor: color,
      }}
    >
      <TouchableNativeFeedback onPress={() => onTap()}>
        <View>
          <Text style={commonStyles?.bigText}>{text}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "lightblue",
  },
});
