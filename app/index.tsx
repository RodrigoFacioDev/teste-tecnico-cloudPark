import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { getLoginStatus, useUserStore } from "../hooks/useUser";
import Calls from "./(tabs)/calls";
import LoginScreen from "./login/login";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  useEffect(() => {
    (async () => {
      await getLoginStatus();
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#398ccb" />
      </View>
    );
  }

  if (!isLoggedIn) {
    return <LoginScreen />;
  }

  return <Calls />;
}
