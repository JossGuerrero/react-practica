import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoanPayment } from "../practica react/LoanPayment";

describe("LoanPayment", () => {
  test("calcula prestamo normal", async () => {
    const user = userEvent.setup();
    render(<LoanPayment />);

    await user.type(screen.getByPlaceholderText("monto"), "1000");
    await user.type(screen.getByPlaceholderText("interés"), "10");
    await user.click(screen.getByText("Calcular"));

    expect(screen.getByText("Interés: 100")).toBeInTheDocument();
    expect(screen.getByText("Descuento: 0")).toBeInTheDocument();
    expect(screen.getByText("Total a pagar: 1100")).toBeInTheDocument();
  });

  test("calcula prestamo ", async () => {
    const user = userEvent.setup();
    render(<LoanPayment />);

    await user.type(screen.getByPlaceholderText("monto"), "1000");
    await user.type(screen.getByPlaceholderText("interés"), "10");
    await user.click(screen.getByLabelText("Cliente preferencial"));
    await user.click(screen.getByText("Calcular"));

    expect(screen.getByText("Interés: 100")).toBeInTheDocument();
    expect(screen.getByText("Descuento: 10")).toBeInTheDocument();
    expect(screen.getByText("Total a pagar: 1090")).toBeInTheDocument();
  });
});