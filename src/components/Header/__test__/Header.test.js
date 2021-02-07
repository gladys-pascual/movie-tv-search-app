import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

test("render Header component when no user is logged in as expected", () => {
  const props = {
    onLogIn: jest.fn(),
    userDetails: {},
  };
  const { container } = render(
    <BrowserRouter>
      <Header {...props} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});

test("render Header component when there is a user logged in as expected", () => {
  const props = {
    userDetails: { username: "gladyskate" },
    onLogOut: jest.fn(),
  };
  const { container } = render(
    <BrowserRouter>
      <Header {...props} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
