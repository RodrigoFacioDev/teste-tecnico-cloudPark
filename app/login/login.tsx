import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { saveLoginStatus } from "../../hooks/useUser";
import {
  Container,
  ErrorText,
  FormWrapper,
  LogoWrapper,
  Subtitle,
  Title,
} from "./style";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Por favor, preencha email e senha.");
      return;
    }
    if (email === "admin@admin.com" && password === "admin@admin") {
      setError("");
      await saveLoginStatus(true);
      router.replace("/calls/calls");
    } else {
      setError("Email ou senha inválidos.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={40}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <FormWrapper>
            <LogoWrapper>
              <Image
                source={require("../../assets/images/logo-cloudpark.png")}
                style={{ width: 180, height: 60, resizeMode: "contain" }}
              />
            </LogoWrapper>
            <Title>Bem-vindo!</Title>
            <Subtitle>Faça login para continuar.</Subtitle>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            {error ? <ErrorText>{error}</ErrorText> : null}
            <Button onPress={handleLogin}>Entrar</Button>
          </FormWrapper>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
