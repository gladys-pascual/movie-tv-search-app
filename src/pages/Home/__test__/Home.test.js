import React from "react";
import { render } from "@testing-library/react";
import Home from "../Home";

test("render Home component as expected", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
