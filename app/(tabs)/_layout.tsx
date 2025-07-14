import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="calls"
        options={{
          title: "Chamadas",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="phone" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="UserConfig"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
