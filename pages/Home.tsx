import { View } from "react-native";
import { HomePeepo, HomeTitle } from "../components/home";
import { commonStyles } from "../common";
import { useDispatch, useSelector } from "react-redux";
import {
  userIdSelector,
  usernameSelector,
} from "../redux/selectors/authSelectors";
import { LoginButton } from "../components/login";
import { clearCredentials } from "../redux/slices/authSlice";
import { useGetUserByIdQuery } from "../redux/services/apiUsersService";
import { Text } from "react-native";
import { HomeUserData } from "../components/home/HomeUserData";
import { useState } from "react";
import { usersApiService as api } from "../redux/services/apiUsersService";

const Home: React.FC = () => {
  const username = useSelector(usernameSelector);
  const userId = useSelector(userIdSelector);
  const { data: user, error, isLoading } = useGetUserByIdQuery(userId);
  const [trigger, lastArg] =
    api.endpoints.getUserById.useLazyQuerySubscription();

  const [_, render] = useState("");
  const dispatch = useDispatch();
  return (
    <View style={commonStyles.container}>
      <HomeTitle content={`hi @${username}`} />
      <HomeTitle content={`you're logged in!`} />
      <HomePeepo />
      <LoginButton
        onTap={() => dispatch(clearCredentials())}
        text="Logout"
        color="#ffcccb"
      />
      {!isLoading && <HomeUserData user={user} />}
      <LoginButton
        onTap={() => trigger(userId)}
        text="refresh data"
        color="green"
      />
    </View>
  );
};

export default Home;
