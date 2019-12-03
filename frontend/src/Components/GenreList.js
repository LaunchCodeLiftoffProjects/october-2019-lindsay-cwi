import React from "react";
import axios from "axios";

export default class GenreList extends React.Component {
  state = {
    genres: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/genre").then(res => {
      console.log(res);
      this.setState({ genres: res.data });
    });
  }

  render() {
    return (
      <select>
        {this.state.genres.map(genre => (
          <option key={genre.id}>{genre.name}</option>
        ))}
      </select>
    );
  }
}