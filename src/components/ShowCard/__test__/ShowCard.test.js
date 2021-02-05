import React from "react";
import { render } from "@testing-library/react";
import ShowCard from "../ShowCard";

test("renders a TV show card as expected", () => {
  const props = {
    media_type: "tv",
    first_air_date: "2007-09-24",
    name: "The Big Bang Theory",
    poster_path: "/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg",
    vote_average: 7.6,
  };

  const { container } = render(<ShowCard {...props} />);

  expect(container).toMatchSnapshot();
});

test("renders a movie show card as expected", () => {
  const props = {
    media_type: "movie",
    release_date: "2001-11-16",
    title: "Harry Potter and the Philosopher's Stone",
    poster_path: "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    vote_average: 7.9,
  };

  const { container } = render(<ShowCard {...props} />);

  expect(container).toMatchSnapshot();
});
