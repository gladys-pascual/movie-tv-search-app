import React from "react";
import { render } from "@testing-library/react";
import Favorites from "../Favorites";
import { BrowserRouter } from "react-router-dom";

test("render Favorites component as expected", () => {
  const props = {
    favoriteMovies: {
      results: [
        {
          original_language: "en",
          original_title: "Harry Potter and the Philosopher's Stone",
          poster_path: "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
          video: false,
          vote_average: 7.9,
          overview:
            "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
          release_date: "2001-11-16",
          vote_count: 19508,
          title: "Harry Potter and the Philosopher's Stone",
          adult: false,
          backdrop_path: "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
          id: 671,
          genre_ids: [12, 14],
          popularity: 173.241,
        },
      ],
    },
    favoriteTvs: {
      results: [
        {
          overview:
            "A 10-part documentary chronicling the untold story of Michael Jordan and the Chicago Bulls dynasty with rare, never-before-seen footage and sound from the 1997-98 championship season – plus over 100 interviews with famous figures and basketball’s biggest names.",
          vote_count: 735,
          backdrop_path: "/kY0h95L73t7a6ev6Rv0aHSCtN7y.jpg",
          id: 79525,
          genre_ids: [99],
          origin_country: ["US"],
          original_language: "en",
          vote_average: 8.2,
          poster_path: "/oVf4xGGbDtwVHiKn8uTuSriY7PH.jpg",
          first_air_date: "2020-04-19",
          original_name: "The Last Dance",
          name: "The Last Dance",
          popularity: 24.461,
        },
      ],
    },
    loading: false,
  };
  const { container } = render(
    <BrowserRouter>
      <Favorites {...props} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
