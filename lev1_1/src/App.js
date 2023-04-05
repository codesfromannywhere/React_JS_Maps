import Movies from './data/Movies';
import MovieItem from './components/MovieItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        {Movies.map((elt) =>
          <MovieItem
            title={elt.title}
            year={elt.year}
            director={elt.director}
            duration={elt.duration}
            genre={elt.genre}
            rate={elt.rate}
          />
        )}
      </section>
    </div>
  );
}

export default App;
