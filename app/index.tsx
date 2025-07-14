import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { getLoginStatus } from "../hooks/useUser";
import CallsPage from "./(tabs)/calls/calls";
import LoginScreen from "./login/login";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const logged = await getLoginStatus();
      setIsLoggedIn(logged);
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

  return <CallsPage />;
}
