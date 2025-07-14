import Button from "@/common/Button/Button";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import { Call } from "../../types";
import ModalCallDetails from "../ModalCallDetails/ModalCallDetails";
import {
  CardContainer,
  CategoryBadge,
  CategoryText,
  DateText,
  Status,
  StatusRow,
  Title,
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

interface CallCardProps {
  call: Call;
}

export default function CallCard({ call }: CallCardProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <CardContainer status={call.status}>
        <Title>{call.title}</Title>
        <CategoryBadge>
          <FontAwesome name="tag" size={14} color="#2563eb" />
          <CategoryText>{call.category}</CategoryText>
        </CategoryBadge>
        <StatusRow>
          <FontAwesome
            name={
              call.status === "Aberto"
                ? "flag"
                : call.status === "Em andamento"
                ? "hourglass-half"
                : "check-circle"
            }
            size={14}
            color={
              call.status === "Aberto"
                ? "#eab308"
                : call.status === "Em andamento"
                ? "#2563eb"
                : "#22c55e"
            }
            style={{ marginRight: 2 }}
          />
          <Status status={call.status}>{call.status}</Status>
        </StatusRow>
        <DateText>{formatDate(call.createdAt)}</DateText>
        <Button
          variant="ghost"
          onPress={() => setModalVisible(true)}
          style={{ marginTop: 8 }}
        >
          Ver detalhes
        </Button>
      </CardContainer>
      <ModalCallDetails
        visible={modalVisible}
        call={call}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}
