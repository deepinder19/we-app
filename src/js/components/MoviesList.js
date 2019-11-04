import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { getPopularMovies } from '../api/Movies';
import { imageBaseUrl } from '../Constants';

class MoviesList extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      movies: [],
      err: false,
    };
  }

  componentDidMount() {
    getPopularMovies().then(data => {
      if (data) {
        this.setState({
          movies: data.results
        });
      }
    }).catch(() => {
      this.setState({
        err: true
      });
    });
  }

  render() {
    const {movies, err} = this.state;
    const movieImageUrl = `${imageBaseUrl}/w185/`;
    return (
      <>
        <NavBar title="Pop Movies"/>
        <div className="row">
          {
            err && (
              <p>Something went wrong. Please ty again later.</p>
            )
          }
          {
            movies.map((movie) => (
              <div className="col s6" key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img src={movieImageUrl + movie.poster_path} className="grid-image"></img>
                </Link>
              </div>
              )
            )
          }
        </div>
      </>
    )
  }
}

export default MoviesList;