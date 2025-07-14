import { logoutUser } from "@/hooks/useUser";
import { useRouter } from "expo-router";
import React from "react";
import { Button, ButtonText, Container, Title } from "./style";

export default function UserConfig() {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser();
    router.replace("/login/login");
  };

  return (
    <Container>
      <Title>Configurações</Title>
      <Button onPress={handleLogout}>
        <ButtonText>Sair</ButtonText>
      </Button>
    </Container>
  );
}
