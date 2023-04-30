import {
  LoginButton,
  LoginFooter,
  LoginInput,
  LoginLabel,
  LoginPeepo,
} from "../components/login";
import { useEffect, useState } from "react";
import { commonStyles } from "../common";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { LoginData, useLoginMutation } from "../redux/services/apiAuthService";
import { setCredentials } from "../redux/slices/authSlice";
import { ParamListBase } from "@react-navigation/native";

const Login: React.FC<ParamListBase> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginData: LoginData = { email, password };
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleTap = () => {
    login(loginData)
      .unwrap()
      .then((credentials) => {
        dispatch(setCredentials(credentials));
      });
  };

  return (
    <View style={commonStyles.container}>
      <LoginPeepo />
      <LoginLabel content="email" />
      <LoginInput
        placeholder="Enter your email"
        value={email}
        onChange={setEmail}
      />
      <LoginLabel content="password" />
      <LoginInput
        placeholder="Enter your password"
        value={password}
        secret={true}
        onChange={setPassword}
      />
      <LoginButton onTap={handleTap} />
      <LoginFooter content="by:samucancld" />
    </View>
  );
};

export default Login;
