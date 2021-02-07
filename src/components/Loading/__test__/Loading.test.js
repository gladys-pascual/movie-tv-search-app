import React from "react";
import { render } from "@testing-library/react";
import Loading from "../Loading";

test("renders Loading component as expected", () => {
  const { container } = render(<Loading />);
  expect(container).toMatchSnapshot();
});
