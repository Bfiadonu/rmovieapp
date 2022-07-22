import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard'

export class MoviesContainer extends Component {
  render() {

      const { movies } = this.props;
      let content = "";
      if (movies === undefined) {
        console.log("Unable to find any movies");
      } else {
        content = movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ));
        console.log(content);
      }

    return (
      <div className= "row">
        {content}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer)