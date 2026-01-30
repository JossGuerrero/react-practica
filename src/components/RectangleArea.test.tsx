import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RectangleArea } from "../practica react/RectangleArea";

describe("RectangleArea", () => {
  test("calcula area", async () => {
    const user = userEvent.setup();
    render(<RectangleArea />);

    await user.type(screen.getByPlaceholderText("base"), "5");
    await user.type(screen.getByPlaceholderText("altura"), "4");
    await user.click(screen.getByText("Calcular"));

    expect(screen.getByText("Área: 20")).toBeInTheDocument();
  });

  test("no calcula con 0", async () => {
    const user = userEvent.setup();
    render(<RectangleArea />);

    await user.type(screen.getByPlaceholderText("base"), "0");
    await user.type(screen.getByPlaceholderText("altura"), "4");
    await user.click(screen.getByText("Calcular"));

    expect(screen.queryByText(/Área:/)).not.toBeInTheDocument();
  });
});