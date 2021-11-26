import React, { useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import uuid from "react-uuid";

// Spotify JS Wrapper
const spotifyApi = new SpotifyWebApi();

const Result = () => {
  const [images, setImages] = useState([]);

  const getHashParams = () => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  };
  const params = getHashParams();
  const token = params.access_token;

  if (token) {
    spotifyApi.setAccessToken(token);
  }
  const [show, setShow] = useState(false);

  const getTopAlbums = () => {
    spotifyApi.getMyTopTracks().then((response) => {
      const data = response.items.map((item) => {
        return item.album.images[1].url;
      });
      // Remove repeats from returned data
      var topAlbums = [...new Set(data)];
      // Limit the number of Album covers returned to 12
      topAlbums = topAlbums.slice(0, 12);
      setImages([...images, topAlbums]);
    });
    setShow(true);
    return images;
  };

  return (
    <div className="results-container">
      <div className="content">
        <h1>COVERWALL</h1>
        <p>
          Generate a 3x4 album collage containing your top albums from spotify.
        </p>
        <button onClick={() => getTopAlbums()}>Generate</button>

        <div className="grid">
          {images.map((each) => {
            return each.map((img) => {
              return <img src={img} alt="cover" key={uuid()}></img>;
            });
          })}
        </div>
        <br></br>
        {show && <h3>Take a screenshot or you'll lose your collage!</h3>}
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Result;
