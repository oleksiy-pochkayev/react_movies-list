import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Movie{
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map((film) => (
      <div className="card" key={film.imdbId}>
        <MovieCard
          title={film.title}
          description={film.description}
          imgUrl={film.imgUrl}
          imdbUrl={film.imdbUrl}
        />
      </div>
    ))}
  </div>
);
