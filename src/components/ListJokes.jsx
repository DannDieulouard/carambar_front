import { useState } from "react";
import "../App.css";

const RandomJoke = () => {
  const [joke, setJoke] = useState(null);

  const fetchRandomJoke = () => {
    fetch("https://carambarapi-fuqc.onrender.com/api/v1/random", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data); // Mettez à jour l'état avec la nouvelle blague
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de la blague :", error);
      });
  };

  return (
    <main>
      <h1>Blague Carambar Aléatoire</h1>
      <section>
        <button onClick={fetchRandomJoke} className="randomButton">
          Obtenir une blague aléatoire
        </button>

        {joke && (
          <article className="randomJoke">
            <h2>{joke.question}</h2>
            <p>{joke.answer}</p>
          </article>
        )}
      </section>
    </main>
  );
};

export default RandomJoke;