import { Text } from "react-native";
import { commonStyles } from "../../common";

interface HomeTitleProps {
  content: string;
}

export const HomeTitle: React.FC<HomeTitleProps> = ({ content }) => {
  return <Text style={commonStyles?.bigText}>{content}</Text>;
};
