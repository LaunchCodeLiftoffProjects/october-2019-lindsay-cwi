import React from "react";
import axios from "axios";
import ArtistList from "../Components/ArtistList";
import GenreList from "../Components/GenreList";

export default class MusicTrackInput extends React.Component {
  state = {
    title: "",
    type: "",
    artistId: 3,
    genreId: 5,
    favoritesId: 1
  };

  handleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleChange2 = event => {
    this.setState({ type: event.target.value });
  };

  handleChange3 = event => {
    this.setState({ artistId: event.target.value });
  };

  handleChange4 = event => {
    this.setState({ genreId: event.target.value });
  };

  handleChange5 = event => {
    this.setState({ favoritesId: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    window.location = "http://localhost:3000/page2";

    const musictrack = {
      title: this.state.title,
      type: this.state.type,
      artist: { id: this.state.artistId },
      genre: { id: this.state.genreId },
      favorites: { id: this.state.favoritesId }
    };

    axios
      .post("http://localhost:8080/music-track/new/", musictrack)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={this.handleChange} />
        </label>
        <br />
        <br />
        File Type
        <br />
        <select name="type" type="option" onChange={this.handleChange2}>
          <option value=" ">Pick One</option>
          <option value="Record">Record</option>
          <option value="Cassette">Cassette</option>
          <option value="CD">CD</option>
          <option value="Digital">Digital</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          name="favorites"
          value="2"
          onChange={this.handleChange5}
        />
        Check box if this song is a favorite.
        <br />
        <br />
        Artist
        <br />
        <ArtistList state={this.state.artistId} onChange={this.handleChange3} />
        <br />
        <a size="2" href="/addArtist">
          Click here to add a Artist
        </a>
        <br />
        <br />
        Genre
        <GenreList state={this.state.genreId} onChange={this.handleChange4} />
        <a size="2" href="/addGenre">
          Click here to add a Genre
        </a>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
