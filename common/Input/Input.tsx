import React from "react";
import { TextInputProps } from "react-native";
import { StyledInput } from "./style";

export default function Input(props: TextInputProps) {
  return <StyledInput placeholderTextColor="#999" {...props} />;
}
