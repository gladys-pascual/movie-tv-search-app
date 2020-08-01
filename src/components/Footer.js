import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <a
        href="https://developers.themoviedb.org/3/getting-started/introduction"
        target="_blank"
        rel="noopener noreferrer"
        className="tmdb"
      >
        <div
          className="tmdb-logo"
          href="https://developers.themoviedb.org/3/getting-started/introduction"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="tmdb-logo-img"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
            alt="tmbd logo"
          />
        </div>
        <p>This website uses the TMDb API.</p>
      </a>

      <ul className="footer-socials">
        <li>
          <a
            href="https://github.com/gladys-pascual/movie-tv-search-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/gladyspascual"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-dev"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gladyspascual/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
