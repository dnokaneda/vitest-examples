import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import Button from "./Button";

describe("::: Button Test", () => {
  test("::::: deve renderizar Botão corretamente", () => {
    const { getByText } = render(<Button>Texto padrão</Button>);
    expect(getByText("Texto padrão")).toBeInTheDocument();
  });

  test("::::: deve disparar o evento de clique", () => {
    const handleClick = vi.fn();

    const { getByTestId } = render(
      <Button onClick={handleClick}>Texto padrão</Button>
    );

    fireEvent.click(getByTestId("component-button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("::::: deve conter a classe correspondente ao botão primário", () => {
    const { getByTestId } = render(<Button>Botão primário</Button>);

    expect(getByTestId("component-button")).toHaveClass("button-primary", {
      exact: true,
    });
  });

  test("::::: deve conter o estilo correspondente ao botão primário", () => {
    const { getByTestId } = render(<Button>Botão primário</Button>);

    expect(getByTestId("component-button")).toHaveStyle(
      "backgroundColor: '#7dd3fc'"
    );
  });

  test("::::: deve conter a classe correspondente ao botão secundário", () => {
    const { getByTestId } = render(<Button secondary>Botão secundário</Button>);

    expect(getByTestId("component-button")).toHaveClass("button-secondary", {
      exact: true,
    });
  });

  test("::::: deve conter o estilo correspondente ao botão secundário", () => {
    const { getByTestId } = render(<Button secondary>Botão secundário</Button>);

    expect(getByTestId("component-button")).toHaveStyle(
      "backgroundColor: 'transparent'"
    );
  });
});
