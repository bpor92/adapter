import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App.js", () => {
  it("Should change display based on form submit", () => {
    render(<App />);

    const inputValues = [
      {
        labelName: "Enter name",
        value: "sample name",
      },
      {
        labelName: "Enter email",
        value: "sample-email@example.com",
      },
      {
        labelName: "Enter message",
        value: "sample message",
      },
    ];
    for (const el of inputValues) {
      const { labelName, value } = el;
      const input = screen.getByLabelText(labelName);
      fireEvent.change(input, { target: { value: value } });
    }
    fireEvent.click(screen.getByRole("button"));

    const status = screen.getByText("sample message");
    console.log(screen);

    for (const inputLabel in inputValues) {
      const inputValue: String = inputValues[inputLabel];
      const input = screen.getByLabelText(inputLabel);
      fireEvent.change(input, { target: { value: inputValue } });
      expect(input.value).toEqual(inputValue);
    }
  });
});
