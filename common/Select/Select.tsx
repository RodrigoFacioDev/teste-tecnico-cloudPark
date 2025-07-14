import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { Container, Label, PickerWrapper } from "./style";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  pickerStyle?: object;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function Select({
  value,
  onValueChange,
  options,
  placeholder = "Select an option",
  style,
  pickerStyle,
  label,
  labelStyle,
  containerStyle,
  ...props
}: SelectProps) {
  return (
    <Container style={containerStyle}>
      {label && <Label style={labelStyle}>{label}</Label>}
      <PickerWrapper style={style}>
        <Picker
          selectedValue={value}
          onValueChange={onValueChange}
          style={[
            {
              color: value ? "#222" : "#888",
              fontSize: 16,
              minHeight: 48,
              width: "100%",
              backgroundColor: "transparent",
            },
            pickerStyle,
          ]}
          dropdownIconColor="#2563eb"
          {...props}
        >
          <Picker.Item label={placeholder} value="" color="#888" />
          {options.map((opt) => (
            <Picker.Item key={opt.value} label={opt.label} value={opt.value} />
          ))}
        </Picker>
      </PickerWrapper>
    </Container>
  );
}
