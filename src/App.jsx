import React from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./requests";

function App() {
  return (
    <div>
      <h1>MetFlix Clone</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending now" fetchURL={requests.fetchTrending} />

      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />

      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />

      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />

      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />

      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />

      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
