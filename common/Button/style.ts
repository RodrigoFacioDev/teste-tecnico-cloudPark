import styled, { css } from "styled-components/native";

export const StyledButton = styled.TouchableOpacity<{
  variant?: "container" | "ghost";
  color?: string;
}>`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  ${({ variant, color }) =>
    variant === "ghost"
      ? css`
          background-color: transparent;
          border-width: 0;
        `
      : css`
          background-color: ${color || "#398ccb"};
        `}
`;

export const ButtonText = styled.Text<{
  variant?: "container" | "ghost";
  color?: string;
}>`
  font-size: 18px;
  font-weight: bold;
  ${({ variant, color }) =>
    variant === "ghost"
      ? css`
          color: ${color || "#398ccb"};
        `
      : css`
          color: #fff;
        `}
`;
