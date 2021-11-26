import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import six from "./images/six.jpeg";

// Authorization Link
export const authEndpoint = "https://accounts.spotify.com/authorize?";
// Authorization Variables
const clientId = '';
const redirectUri = "http://localhost:3000/result";
const scopes = ["user-read-private", "user-read-email", "user-top-read"];

export const App = () => {

  return (
    <div className="landing">
      <section>
        <div className="box">
          <img className="cover" src={six} alt={six}></img>
        </div>

        <div className="title">
          <span>COVER</span>
          <span>WALL</span>
        </div>
      </section>
      <div className="action">
        <h3>Generate an album cover collage from your top spotify albums.</h3>
        <br></br>
        <a
          className="button"
          href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
          )}&response_type=token&show_dialog=true`}
        >
          Login to Spotify to Generate
        </a>
        <br></br>
        <br></br>

        <Link to="/about" className="info">
          What is this ?
        </Link>
      </div>
      <div style={{ display: "none" }}>
      </div>
    </div>
  );
};


