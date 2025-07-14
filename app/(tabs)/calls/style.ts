import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";

export const PageTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #398ccb;
  margin: 24px 0 12px 0;
  text-align: center;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 0 16px;
`;

export const ToggleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
  gap: 8px;
`;

export const KanbanTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #398ccb;
  margin-bottom: 8px;
  text-align: center;
`;

export const FilterAddContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  gap: 8px;
`;

export const HalfWidth = styled.View`
  flex: 1;
`;

export const StyledPicker = styled(Picker)`
  background-color: #f5f5f5;
  border-radius: 8px;
  height: 48px;
`;
