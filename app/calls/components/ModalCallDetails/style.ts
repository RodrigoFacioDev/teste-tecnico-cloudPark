import styled from "styled-components/native";

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
  font-size: 22px;
  font-weight: bold;
  color: #398ccb;
  margin-bottom: 12px;
  text-align: center;
`;
export const ModalLabel = styled.Text`
  margin-bottom: 4px;
  color: #333;
  font-weight: 600;
`;
export const ModalDescription = styled.Text`
  margin-bottom: 16px;
  color: #444;
  font-size: 16px;
`;
export const ModalPicker = styled.View`
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 16px;
`;
export const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
export const CategoryBadge = styled.View`
  background-color: #e0f2fe;
  padding: 4px 12px;
  border-radius: 16px;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;
export const CategoryText = styled.Text`
  color: #2563eb;
  font-weight: bold;
  font-size: 15px;
  margin-left: 4px;
`;
