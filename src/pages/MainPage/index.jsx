import { QuoteCard } from "../../components/QuoteCard";
import { Button } from "../../components/Button";

export const MainPage = ({quote, author, likeCount, updateLikeCount, handleNextQuoteClick}) => {
  return (
    <main>
      <QuoteCard
        quote={quote}
        author={author}
        likeCount={likeCount}
      />

      <button className="like-button" onClick={updateLikeCount}>
        ♡
      </button>

      <Button label="Next Quote" handleOnClick={handleNextQuoteClick} />
    </main>
   );
}