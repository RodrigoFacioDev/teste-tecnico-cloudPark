import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

const LOGIN_KEY = "isLoggedIn";

// Zustand store para o estado global de login
export const useUserStore = create<{
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}>((set) => ({
  isLoggedIn: false,
  setLoggedIn: (value: boolean) => set({ isLoggedIn: value }),
}));

export async function saveLoginStatus(isLoggedIn: boolean) {
  try {
    await AsyncStorage.setItem(LOGIN_KEY, isLoggedIn ? "true" : "false");
    useUserStore.getState().setLoggedIn(isLoggedIn);
  } catch (e) {
    // Tratar erro se necessário
  }
}

export async function getLoginStatus(): Promise<boolean> {
  try {
    const value = await AsyncStorage.getItem(LOGIN_KEY);
    const logged = value === "true";
    useUserStore.getState().setLoggedIn(logged);
    return logged;
  } catch (e) {
    return false;
  }
}

export async function removeLoginStatus() {
  try {
    await AsyncStorage.removeItem(LOGIN_KEY);
    useUserStore.getState().setLoggedIn(false);
  } catch (e) {
    // Tratar erro se necessário
  }
}
