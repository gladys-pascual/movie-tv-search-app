import React, { useEffect, useState, useCallback } from "react";
import "./App.scss";
import Home from "./components/Home";
import Header from "./components/Header";
import Results from "./components/Results";
import { Switch, Route, useLocation } from "react-router-dom";
import Movie from "./components/Movie";
import Tv from "./components/Tv";
import Favorites from "./components/Favorites";
import history from "./history";

const App = () => {
  const location = useLocation();
  const [userDetails, setUserDetails] = useState({});
  const [favoriteMovies, setFavoriteMovies] = useState({
    results: [],
  });
  const [favoriteTvs, setFavoriteTvs] = useState({
    results: [],
  });
  const [loading, setLoading] = useState(true);

  // Log in
  const getRequestToken = () => {
    fetch(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((response) => {
        window.location.href = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=${window.location.href}`;
      });
  };

  const sessionId = localStorage.getItem("session_id");

  // Getting a session ID using request token from the URL
  useEffect(() => {
    const requestToken = new URLSearchParams(location.search).get(
      "request_token"
    );

    if (location.search && requestToken && !sessionId) {
      fetch(
        `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            request_token: requestToken,
          }),
        }
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.failure) {
            throw new Error(response.status_message);
          }
          localStorage.setItem("session_id", response.session_id);
          setUserDetails({});
          history.push(`/`);
        })
        .catch((error) =>
          alert(`Error creating a session, please try again. ${error.message}`)
        );
    }
  }, [location.search, sessionId]);

  // User details API
  useEffect(() => {
    if (sessionId) {
      fetch(
        `https://api.themoviedb.org/3/account?api_key=${process.env.REACT_APP_API_KEY}&session_id=${sessionId}`
      )
        .then((response) => response.json())
        .then((response) => {
          setUserDetails(response);
        })
        .catch((error) =>
          console.log("Error fetching and parsing data", error)
        );
    }
  }, [sessionId]);

  // API for favourite movies
  const fetchFavoriteMovie = useCallback(() => {
    fetch(
      `https://api.themoviedb.org/3/account/${userDetails.id}/favorite/movies?api_key=${process.env.REACT_APP_API_KEY}&session_id=${sessionId}&language=en-US&sort_by=created_at.asc&page=1`
    )
      .then((response) => response.json())
      .then((response) => {
        setFavoriteMovies(response);
        setLoading(false);
      })
      .catch((error) => console.log("Error fetching and parsing data", error));
  }, [userDetails.id, sessionId]);

  useEffect(() => {
    fetchFavoriteMovie();
  }, [fetchFavoriteMovie]);

  // API for favourite TV
  const fetchFavoriteTv = useCallback(
    () =>
      fetch(
        `https://api.themoviedb.org/3/account/${userDetails.id}/favorite/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&session_id=${sessionId}&sort_by=created_at.asc&page=1`
      )
        .then((response) => response.json())
        .then((response) => {
          setFavoriteTvs(response);
          setLoading(false);
        })
        .catch((error) =>
          console.log("Error fetching and parsing data", error)
        ),
    [userDetails.id, sessionId]
  );

  useEffect(() => {
    fetchFavoriteTv();
  }, [fetchFavoriteTv]);

  // Calling the API to mark tv or movie as favourite
  const updateFavorite = (mediaType, mediaId, favorite) => {
    fetch(
      `https://api.themoviedb.org/3/account/${userDetails.id}/favorite?api_key=${process.env.REACT_APP_API_KEY}&session_id=${sessionId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          media_type: mediaType,
          media_id: mediaId,
          favorite,
        }),
      }
    )
      .then(() => {
        mediaType === "tv" ? fetchFavoriteTv() : fetchFavoriteMovie();
      })
      .catch((error) => console.log("Error fetching and parsing data", error));
  };

  // Log out
  const handleLogOut = () => {
    fetch(
      `https://api.themoviedb.org/3/authentication/session?api_key=${process.env.REACT_APP_API_KEY}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
        }),
      }
    )
      .then(() => {
        localStorage.removeItem("session_id");
        setUserDetails({});
      })
      .catch((error) => console.log("Error fetching and parsing data", error));
  };

  return (
    <>
      <Header
        onLogIn={getRequestToken}
        userDetails={userDetails}
        onLogOut={handleLogOut}
      />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/search" component={Results} />
        <Route
          path="/movie/:id"
          render={(routeProps) => (
            <Movie
              {...routeProps}
              favoriteMovies={favoriteMovies}
              updateFavorite={updateFavorite}
            />
          )}
        />
        <Route
          path="/tv/:id"
          render={() => (
            <Tv favoriteTvs={favoriteTvs} updateFavorite={updateFavorite} />
          )}
        />
        <Route
          path="/favorites"
          render={() => (
            <Favorites
              favoriteMovies={favoriteMovies}
              favoriteTvs={favoriteTvs}
              loading={loading}
            />
          )}
        />
      </Switch>
    </>
  );
};

export default App;
