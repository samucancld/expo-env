import React from "react";
import { View, Text } from "react-native";
import { commonStyles } from "../../common";
import { User } from "../../redux/slices/usersSlice";

interface HomeUserDataProps {
  user: User | undefined;
}

export const HomeUserData: React.FC<HomeUserDataProps> = ({ user }) => {
  return user ? (
    <View style={{ flex: 0, alignSelf: "center", marginTop: 20 }}>
      <Text style={commonStyles.mediumText}>
        Email:{" "}
        <Text
          style={{
            color: "blue",
            textDecorationLine: "underline",
          }}
        >
          {user.email}
        </Text>
      </Text>
      <Text style={commonStyles.mediumText}>
        Name: {user.first_name} {user.last_name}
      </Text>
      <Text
        style={{
          ...commonStyles.mediumText,
        }}
      >
        Verified:{" "}
        <Text style={{ color: "green", fontWeight: "bold" }}>
          {user.is_verified ? "✅" : "❌"}
        </Text>
      </Text>
    </View>
  ) : (
    <View></View>
  );
};
