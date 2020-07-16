import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Sender } from "./Sender";

afterEach(cleanup);

describe("Sender", () => {
  it("Should render itself properly", () => {
    render(<Sender sendMessage={() => {}} />);
    expect(screen.getByText("Sender")).toBeInTheDocument();
    expect(screen.queryAllByRole("textbox")).toHaveLength(3);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Should update its value after change", () => {
    render(<Sender sendMessage={() => {}} />);

    const inputValues = {
      "Enter name": "send-name",
      "Enter email": "send-email",
      "Enter message": "send-message",
    };

    for (const inputLabel in inputValues) {
      const inputValue: String = inputValues[inputLabel];
      const input = screen.getByLabelText(inputLabel);
      fireEvent.change(input, { target: { value: inputValue } });
      expect(input.value).toEqual(inputValue);
    }
  });

  it("Should submit form data", () => {
    const submitHandler = jest.fn();
    render(<Sender sendMessage={submitHandler} />);

    fireEvent.click(screen.getByRole("button"));
    expect(submitHandler).toHaveBeenCalled();
  });
});
