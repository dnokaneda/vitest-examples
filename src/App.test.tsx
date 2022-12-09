import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import App from "./App";

describe("::: APP Test", () => {
  test("::::: deve renderizar a página APP", () => {
    const { getByText } = render(<App />);
    expect(getByText("Vite + React")).toBeInTheDocument();
  });

  test("::::: deve executar a função de soma e subtrair e exibir na tela", () => {
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId("botao-soma"));
    expect(getByTestId("total-cliques")).toHaveTextContent("1");

    fireEvent.click(getByTestId("botao-subtrair"));
    expect(getByTestId("total-cliques")).toHaveTextContent("0");
  });
});
