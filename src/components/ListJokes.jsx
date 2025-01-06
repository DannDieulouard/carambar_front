import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css"

const ListJokes = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jokes", {
      method: "GET",    
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJokes(data);
      });
  }, []);

  return (
    <main>
      <h1>Liste des blagues Carambar</h1>
      <section>
        {jokes.map((joke) => {
          return (
            <article className="listJokes" key={joke.id}>
              <Link to={`/details/${joke.id}`}>
              <h2>{joke.question}</h2>
              <h2>{joke.category}</h2>
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default ListJokes;