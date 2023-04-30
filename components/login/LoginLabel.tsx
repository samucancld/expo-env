import { commonStyles } from "../../common";
import { Text } from "react-native";

interface LoginLabelProps {
  content: string;
}

export const LoginLabel: React.FC<LoginLabelProps> = ({ content }) => {
  return <Text style={commonStyles.bigText}>{content}</Text>;
};
