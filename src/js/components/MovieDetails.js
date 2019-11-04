import React, { Component } from 'react';
import NavBar from './NavBar';
import { getMovieDetails } from '../api/Movies';
import { imageBaseUrl } from '../Constants';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      movie: null,
      err: false,
    };
  }

  componentDidMount() {
    const {movieId} = this.props.match.params;
    getMovieDetails(movieId).then(data => {
      if (data) {
        this.setState({
          movie: data
        });
      }
    }).catch(() => {
      this.setState({
        err: true
      });
    });
  }

  render() {
    const {movie, err} = this.state;
    const movieImageUrl = `${imageBaseUrl}/w154/`;
    return (
      <>
        <NavBar title="Movie Details"/>
        {
          err && (
              <p>Something went wrong. Please ty again later.</p>
            )
          }
        {
          movie && (
            <div className="container">
              <div className="row">
                <h2 style={{}}>{movie.title}</h2>
              </div>
              <div className="row">
                <div className="col s6">
                  <img src={movie.poster_path ? (movieImageUrl + movie.poster_path) : null}></img>
                </div>

                <div className="col s6">
                  {
                    movie.release_date && <h5>{movie.release_date.split("-")[0]}</h5>
                  }
                  <h5><i>{movie.runtime} min</i></h5>
                  <p>{movie.vote_average}/10</p>
                  <button className="col s12 btn" style={{'height': 'auto'}}>Mark as Favorite</button>
                </div>
              </div>
              <div className="row">
                <p>{movie.overview}</p>
              </div>
            </div>
          )
        }
      </>
    )
  }
}

export default MovieDetails;