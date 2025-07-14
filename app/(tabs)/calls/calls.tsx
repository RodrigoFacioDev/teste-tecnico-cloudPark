import Button from "@/common/Button/Button";
import Input from "@/common/Input/Input";
import Select from "@/common/Select/Select";
import { useCallsStore } from "@/hooks/useCalls";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CallCard from "./components/CallCard/CallCard";
import CallModal from "./components/ModalCall/CallModal";
import { Container, FilterAddContainer, HalfWidth, PageTitle } from "./style";
import { CallStatus } from "./types";

export default function CallsPage() {
  const { calls, loading, error, fetchCalls, addCall } = useCallsStore();
  const [statusFilter, setStatusFilter] = useState<string>("todos");
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchCalls();
  }, [fetchCalls]);

  // Filtro por status
  const filteredCalls =
    statusFilter === "todos"
      ? calls
      : calls.filter((c) => c.status === statusFilter);

  // Filtro por pesquisa no título (case-insensitive)
  const searchedCalls = filteredCalls.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  // Ordenar por data de criação (mais antigos primeiro)
  const sortedCalls = [...searchedCalls].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateA - dateB;
  });

  const handleAddCall = async (data: {
    title: string;
    description: string;
    status: CallStatus;
    category: string;
  }) => {
    await addCall({
      title: data.title,
      description: data.description,
      status: data.status as CallStatus,
      category: data.category,
      createdAt: new Date().toLocaleString("pt-BR"),
    });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff" }}
      edges={["top", "left", "right"]}
    >
      <Container>
        <PageTitle>Meus Chamados</PageTitle>
        <Input
          placeholder="Pesquisar por nome do chamado..."
          value={search}
          onChangeText={setSearch}
          style={{ marginBottom: 12 }}
        />
        <FilterAddContainer>
          <HalfWidth>
            <Select
              value={statusFilter}
              onValueChange={(itemValue) =>
                setStatusFilter(itemValue as string)
              }
              options={[
                { label: "Todos", value: "todos" },
                { label: "Abertos", value: "Aberto" },
                { label: "Em andamento", value: "Em andamento" },
                { label: "Resolvidos", value: "Resolvido" },
              ]}
              placeholder="Filtrar por status"
            />
          </HalfWidth>
          <HalfWidth>
            <Button
              onPress={() => setModalVisible(true)}
              style={{ width: "100%", height: 54 }}
            >
              + Adicionar
            </Button>
          </HalfWidth>
        </FilterAddContainer>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#398ccb"
            style={{ marginTop: 32 }}
          />
        ) : error ? (
          <Text style={{ color: "red", textAlign: "center", marginTop: 32 }}>
            {error}
          </Text>
        ) : (
          <FlatList
            data={sortedCalls}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CallCard call={item} />}
            contentContainerStyle={{ paddingBottom: 16 }}
          />
        )}
        <CallModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSubmit={handleAddCall}
        />
      </Container>
    </SafeAreaView>
  );
}
