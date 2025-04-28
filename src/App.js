import { quotes as initialQuotes } from "./quotes.js";
import "./App.css";
import { QuoteCard } from "./components/QuoteCard";
import { useState, useEffect } from "react";

function App() {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextQuoteClick() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentIndex(randomIndex);
  }

  function updateLikeCount() {
    setQuotes((prevQuotes) =>
      prevQuotes.map((quote, index) =>
        index === currentIndex
          ? { ...quote, likeCount: quote.likeCount + 1 }
          : quote
      )
    );
  }

  useEffect(() => {
    const savedQuotes = localStorage.getItem("quotes");
    if (savedQuotes) {
      setQuotes(JSON.parse(savedQuotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);

  return (
    <div className="App">
      <QuoteCard
        quote={quotes[currentIndex].quote}
        author={quotes[currentIndex].author}
        likeCount={quotes[currentIndex].likeCount}
      />
      <div className="buttons-container">
        <button className="like-button" onClick={updateLikeCount}>
          ♡
        </button>
        <br />
        <button className="next-button" onClick={handleNextQuoteClick}>
          Next quote
        </button>
      </div>
    </div>
  );
}

export default App;
