import React from "react";
import { render } from "@testing-library/react";
import NoFavorites from "../NoFavorites";
import { BrowserRouter } from "react-router-dom";

test("renders NoFavorites compinent as expected", () => {
  const { container } = render(
    <BrowserRouter>
      <NoFavorites />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
