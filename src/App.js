import { quotes as initialQuotes } from "./quotes.js";
import "./App.css";
import { useState, useEffect } from "react";
import { ProfilePage } from "./pages/ProfilePage/index.jsx";
import { MainPage } from "./pages/MainPage/index.jsx";

function App() {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextQuoteClick() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentIndex(randomIndex);
  }

  function updateLikeCount() {
    setQuotes((prevQuotes) => {
      const updatedQuotes = prevQuotes.map((quote, index) =>
        index === currentIndex
          ? { ...quote, likeCount: quote.likeCount + 1 }
          : quote
      );

      // Save the updated quotes to localStorage
      localStorage.setItem("quotes", JSON.stringify(updatedQuotes));

      return updatedQuotes;
    });
  }

  useEffect(() => {
    const savedQuotes = localStorage.getItem("quotes");
    if (savedQuotes) {
      setQuotes(JSON.parse(savedQuotes));
    }
  }, []);

  return (
    <div className="App">
      <MainPage
        quote={quotes[currentIndex].quote}
        author={quotes[currentIndex].author}
        likeCount={quotes[currentIndex].likeCount}
        onClick={updateLikeCount}
        handleOnclick={handleNextQuoteClick}
      />
      <ProfilePage />
    </div>
  );
}

export default App;

/*{quotes[currentIndex].quote}*/
