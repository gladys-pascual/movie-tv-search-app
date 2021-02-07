import React from "react";
import { render } from "@testing-library/react";
import NoShows from "../NoShows";

test("renders NoShows component as expected", () => {
  const { container } = render(<NoShows />);
  expect(container).toMatchSnapshot();
});
