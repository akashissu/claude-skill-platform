export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string;
  director: string;
  runtimeMinutes: number;
  posterUrl: string;
  synopsis: string;
}

export const MOVIES: Movie[] = [
  {
    id: 'arrival',
    title: 'Arrival',
    year: 2016,
    genre: 'Science Fiction',
    director: 'Denis Villeneuve',
    runtimeMinutes: 116,
    posterUrl: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=800&q=80',
    synopsis: 'A linguist works with the military to communicate with extraterrestrial visitors and prevent global conflict.',
  },
  {
    id: 'parasite',
    title: 'Parasite',
    year: 2019,
    genre: 'Thriller',
    director: 'Bong Joon-ho',
    runtimeMinutes: 132,
    posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    synopsis: 'A struggling family infiltrates a wealthy household, setting off an escalating chain of consequences.',
  },
  {
    id: 'spider-verse',
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    genre: 'Animation',
    director: 'Bob Persichetti, Peter Ramsey, Rodney Rothman',
    runtimeMinutes: 117,
    posterUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
    synopsis: 'Miles Morales discovers the multiverse and joins other Spider-heroes to save New York City.',
  },
];

export const movies = MOVIES;

export function getMovieById(id: string) {
  return MOVIES.find((movie) => movie.id === id);
}

export default MOVIES;
