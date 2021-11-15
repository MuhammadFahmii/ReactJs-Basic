import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pendaftaran from "./Pendaftaran";

describe("Pendaftaran", () => {
  test("renders Form component", () => {
    render(<Pendaftaran />);
    expect(screen.getByText(/Username/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
  });

  test("input text for username and email with false value", () => {
    render(<Pendaftaran />);
    fireEvent.input(screen.getByRole("textbox", { name: /username/i }), {
      target: { value: "Jaj4t" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "Dr Hahaha" },
    });
    expect(screen.getByLabelText(/Username/)).toHaveValue("Jaj4t");
    expect(screen.getByLabelText(/Email/)).toHaveValue("dr hahaha");
    expect(screen.getByText("Format email tidak sesuai")).toBeInTheDocument();
  });

  test("input text for ideal value", () => {
    render(<Pendaftaran />);
    fireEvent.input(screen.getByRole("textbox", { name: /username/i }), {
      target: { value: "Jajat" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "jajat@mail.com" },
    });
    expect(screen.getByLabelText(/Username/)).toHaveValue("Jajat");
    expect(screen.getByLabelText(/Email/)).toHaveValue("jajat@mail.com");
  });

  test("submit button with error", () => {
    render(<Pendaftaran />);
    jest.spyOn(window, "alert").mockImplementation(() => {});
    fireEvent.input(screen.getByRole("textbox", { name: /username/i }), {
      target: { value: "Buku Hebat" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "emailmail.com" },
    });
    fireEvent.submit(screen.getByText("Submit"));
    expect(window.alert).toBeCalledWith("Username atau Password tidak sesuai");
    expect(screen.getByLabelText(/Username/)).toHaveValue("Buku Hebat");
    expect(screen.getByLabelText(/Email/)).toHaveValue("emailmail.com");
  });
});
