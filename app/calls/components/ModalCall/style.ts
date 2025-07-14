import { Text } from "react-native";
import styled from "styled-components/native";

export const Overlay = styled.View`
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
  elevation: 4;
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #398ccb;
  text-align: center;
`;

export const ErrorText = styled(Text)`
  color: #d32f2f;
  font-size: 12px;
  margin-top: 4px;
`;

export const ErrorTextDescription = styled(Text)`
  color: #d32f2f;
  font-size: 12px;
  margin-top: -12px;
  margin-bottom: 16px;
`;

export const PickerContainer = styled.View`
  margin-bottom: 16px;
`;

export const PickerLabel = styled(Text)`
  margin-bottom: 4px;
  color: #333;
`;

export const StyledPicker = styled.Pressable`
  background-color: #f5f5f5;
  border-radius: 8px;
  height: 50px;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
`;
