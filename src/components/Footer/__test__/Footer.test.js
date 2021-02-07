import React from "react";
import { render } from "@testing-library/react";
import Footer from "../Footer";

test("render Footer as expected", () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
