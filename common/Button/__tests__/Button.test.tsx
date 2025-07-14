import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import Button from "../Button";

describe("<Button />", () => {
  it("should render the text when children is provided", () => {
    const { getByText } = render(<Button>Save</Button>);
    expect(getByText("Save")).toBeTruthy();
  });

  it("should call onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button onPress={onPressMock}>Click</Button>);
    fireEvent.press(getByText("Click"));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("should match the component snapshot when rendered", () => {
    const tree = render(<Button>Snapshot</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
