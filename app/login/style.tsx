import { TextInputProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 24px;
`;

export const FormWrapper = styled.View`
  width: 100%;
  max-width: 350px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #398ccb;
  margin-bottom: 16px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  color: #666;
  font-size: 16px;
  text-align: center;
  margin-bottom: 32px;
`;

export const Input = styled.TextInput<
  Pick<TextInputProps, "placeholderTextColor">
>`
  width: 100%;
  padding: 12px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 16px;
`;

export const ErrorText = styled.Text`
  color: red;
  margin-bottom: 16px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #398ccb;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const LogoWrapper = styled.View`
  align-items: center;
  margin-bottom: 32px;
`;
