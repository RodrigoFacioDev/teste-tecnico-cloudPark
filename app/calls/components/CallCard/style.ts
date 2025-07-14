import styled from "styled-components/native";

export const CardContainer = styled.View<{ status: string }>`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  border-width: 2px;
  border-color: ${({ status }) =>
    status === "Aberto"
      ? "#eab308"
      : status === "Em andamento"
      ? "#2563eb"
      : "#22c55e"};
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #222;
`;
export const StatusRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
`;
export const Status = styled.Text<{ status: string }>`
  color: ${({ status }) =>
    status === "Aberto"
      ? "#eab308"
      : status === "Em andamento"
        ? "#2563eb"
        : "#22c55e"};
  font-weight: bold;
  font-size: 15px;
`;
export const DateText = styled.Text`
  color: #666;
  font-size: 14px;
`;
export const CategoryBadge = styled.View`
  background-color: #e0f2fe;
  padding: 2px 10px;
  border-radius: 14px;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;
export const CategoryText = styled.Text`
  color: #2563eb;
  font-weight: bold;
  font-size: 14px;
  margin-left: 4px;
`;

export const DetailsButton = styled.TouchableOpacity`
  align-self: flex-end;
  background-color: #e5e7eb;
  border-radius: 20px;
  padding: 6px 10px;
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
`;
export const DetailsText = styled.Text`
  color: #398ccb;
  font-size: 14px;
  margin-left: 4px;
`;

export const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
`;
export const ModalContainer = styled.View`
  width: 90%;
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
`;
export const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #398ccb;
  margin-bottom: 12px;
  text-align: center;
`;
export const ModalLabel = styled.Text`
  margin-bottom: 4px;
  color: #333;
`;
export const ModalDescription = styled.Text`
  margin-bottom: 16px;
`;
export const ModalPicker = styled.View`
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 16px;
`;
