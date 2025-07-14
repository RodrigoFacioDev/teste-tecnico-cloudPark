import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 32px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #e74c3c;
  padding-vertical: 12px;
  padding-horizontal: 32px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
