import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RectangleCalc } from "../practica react/RectangleCalc";

describe("RectangleCalc", () => {
  test("calcula todo con factor", async () => {
    const user = userEvent.setup();
    render(<RectangleCalc />);

    await user.type(screen.getByPlaceholderText("base"), "5");
    await user.type(screen.getByPlaceholderText("altura"), "4");
    await user.type(screen.getByPlaceholderText("factor"), "2");
    await user.click(screen.getByText("Calcular"));

    expect(screen.getByText("Área ajustada 40")).toBeInTheDocument();
    expect(screen.getByText("Perímetro ajustada 36")).toBeInTheDocument();
  });

  test("falla si falta input", async () => {
    const user = userEvent.setup();
    render(<RectangleCalc />);

    await user.type(screen.getByPlaceholderText("base"), "5");
    await user.click(screen.getByText("Calcular"));

    expect(screen.queryByText(/Área ajustada/)).not.toBeInTheDocument();
  });
});