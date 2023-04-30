import { TextInput } from "react-native";
import { Dispatch, SetStateAction } from "react";

interface LoginInputProps {
  placeholder: string;
  value: string;
  secret?: boolean;
  onChange: Dispatch<SetStateAction<string>>;
}

export const LoginInput: React.FC<LoginInputProps> = ({
  placeholder,
  value,
  secret = false,
  onChange,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      secureTextEntry={secret}
    />
  );
};
