import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonText, StyledButton } from "./style";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: "container" | "ghost";
  color?: string;
}

export default function Button({
  children,
  variant = "container",
  color,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton variant={variant} color={color} {...rest}>
      <ButtonText variant={variant} color={color}>
        {children}
      </ButtonText>
    </StyledButton>
  );
}
