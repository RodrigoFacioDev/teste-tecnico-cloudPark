import Button from "@/common/Button/Button";
import Select from "@/common/Select/Select";
import { useCallsStore } from "@/hooks/useCalls";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import { Modal, ScrollView, TouchableOpacity, View } from "react-native";
import { Call, CallStatus } from "../../types";
import {
  CategoryBadge,
  CategoryText,
  InfoRow,
  ModalContainer,
  ModalDescription,
  ModalLabel,
  ModalOverlay,
  ModalPicker,
  ModalTitle,
} from "./style";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

interface ModalCallDetailsProps {
  visible: boolean;
  call: Call;
  onClose: () => void;
}

const statusOptions: CallStatus[] = ["Aberto", "Em andamento", "Resolvido"];

export default function ModalCallDetails({
  visible,
  call,
  onClose,
}: ModalCallDetailsProps) {
  const [status, setStatus] = useState<CallStatus>(call.status);
  const [statusChanged, setStatusChanged] = useState(false);
  const { updateCallStatus } = useCallsStore();

  const handleStatusChange = (itemValue: string) => {
    setStatus(itemValue as CallStatus);
    setStatusChanged(itemValue !== call.status);
  };

  const handleCancel = () => {
    setStatus(call.status);
    setStatusChanged(false);
  };

  const handleSave = async () => {
    try {
      await updateCallStatus(call.id, status);
      setStatusChanged(false);
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  };

  const handleClose = () => {
    if (statusChanged) {
      return;
    }
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <ModalOverlay>
        <ModalContainer>
          <TouchableOpacity
            onPress={handleClose}
            style={{ position: "absolute", top: 12, right: 12, zIndex: 10 }}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <FontAwesome name="close" size={24} color="#d32f2f" />
          </TouchableOpacity>
          <ScrollView
            style={{ maxHeight: 480 }}
            contentContainerStyle={{ paddingTop: 8, paddingBottom: 32 }}
            showsVerticalScrollIndicator={true}
          >
            <ModalTitle>{call.title}</ModalTitle>

            <CategoryBadge>
              <FontAwesome name="tag" size={16} color="#2563eb" />
              <CategoryText>{call.category}</CategoryText>
            </CategoryBadge>

            <InfoRow>
              <FontAwesome
                name="info-circle"
                size={16}
                color="#2563eb"
                style={{ marginRight: 4 }}
              />
              <ModalLabel>Descrição:</ModalLabel>
            </InfoRow>
            <ModalDescription>{call.description}</ModalDescription>

            <InfoRow>
              <FontAwesome
                name="flag"
                size={16}
                color="#eab308"
                style={{ marginRight: 4 }}
              />
              <ModalLabel>Status:</ModalLabel>
            </InfoRow>
            <ModalPicker>
              <Select
                value={status}
                onValueChange={handleStatusChange}
                options={statusOptions.map((opt) => ({
                  label: opt,
                  value: opt,
                }))}
                placeholder="Selecione o status"
              />
            </ModalPicker>

            <InfoRow>
              <FontAwesome
                name="calendar"
                size={16}
                color="#2563eb"
                style={{ marginRight: 4 }}
              />
              <ModalLabel>Criado em:</ModalLabel>
            </InfoRow>
            <ModalDescription>{formatDate(call.createdAt)}</ModalDescription>

            {statusChanged && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <Button onPress={handleSave} style={{ flex: 1 }}>
                  Salvar
                </Button>
                <Button
                  onPress={handleCancel}
                  style={{ backgroundColor: "#d32f2f", flex: 1 }}
                  variant="container"
                >
                  Cancelar
                </Button>
              </View>
            )}
          </ScrollView>
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  );
}
