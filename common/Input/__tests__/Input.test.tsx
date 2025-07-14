import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import Input from "../Input";

describe("<Input />", () => {
  it("should render the placeholder when provided", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Type something..." value="" onChangeText={() => {}} />
    );
    expect(getByPlaceholderText("Type something...")).toBeTruthy();
  });

  it("should call onChangeText when the text changes", () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Test" value="" onChangeText={onChangeTextMock} />
    );
    fireEvent.changeText(getByPlaceholderText("Test"), "new text");
    expect(onChangeTextMock).toHaveBeenCalledWith("new text");
  });

  it("should match the component snapshot when rendered", () => {
    const tree = render(
      <Input placeholder="Snapshot" value="" onChangeText={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
