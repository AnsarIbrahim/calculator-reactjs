import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calculator from "../components/Calculator";

describe("Calculator", () => {
  test("renders calculator", () => {
    render(<Calculator />);
    const linkElement = screen.getByText(/Ready to Crunch Some Numbers?/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("input number", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    const display = screen.getByTestId("display");
    expect(display.textContent).toBe("1");
  });

  test("input operator", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("+"));
    const display = screen.getByTestId("display");
    expect(display.textContent).toBe("0");
  });

  test("calculate", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    const display = screen.getByTestId("display");
    expect(display.textContent).toBe("3");
  });

  test("clear display", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("C"));
    const display = screen.getByTestId("display");
    expect(display.textContent).toBe("0");
  });
});
