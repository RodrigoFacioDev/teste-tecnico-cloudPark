import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "#398ccb", headerShown: false }}
    >
      <Tabs.Screen
        name="calls/index"
        options={{
          title: "Chamados",
          tabBarIcon: ({ color }) => (
            <AntDesign name="notification" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="UserConfig/UserConfig"
        options={{
          title: "Chamados",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gear" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
