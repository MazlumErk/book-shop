// React
import { useState } from "react";
// Next
import Image from 'next/image';
// Components
import BookSalesPercentage from "../book-sales-percentage";

interface BookShowcaseProps {
  books: any[];
}

function dateCounter(bookDiscountEndDate: string) {
  const targetDate = new Date(bookDiscountEndDate);
  const today = new Date();
  const diffTime = targetDate.getTime() - today.getTime();

  const diffSeconds = Math.floor(diffTime / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  const hours = diffHours % 24;
  const minutes = diffMinutes % 60;
  const seconds = diffSeconds % 60;

  return (
    <div>
      {" "}
      {diffDays} Days {hours} Hours {minutes} Mins {seconds} Secs
    </div>
  );
}

export default function BookShowcase(props: BookShowcaseProps) {
  const [bookIndex, setbookIndex] = useState(0);
  const { books } = props;
  return (
    <div className="book-showcase">
      <Image className="book-image" src={books[bookIndex].bookImageUrl} alt={books[bookIndex].bookName} width={200} height={400}></Image>
      <div className="price">
        <div className="book-discount-price">
          ${books[bookIndex].bookDiscountPrice}
          <div>${books[bookIndex].bookPrice}</div>
        </div>
        <div className="discount-ent-time-message">
          Hurry Up! <div>Offer ends in:</div>
        </div>
        {dateCounter(books[0].bookDiscountEndDate)}
        <div className="book-storage">
          Already Sold: {books[bookIndex].selledBookCount} Available:{" "}
          {books[bookIndex].bookCount}
        </div>
        <BookSalesPercentage
          totalBookCount={books[bookIndex].totalBookCount}
          availableBookCount={books[bookIndex].bookCount}
        />
      </div>
      <div className="ad">
        <h1 className="book-name">{books[bookIndex].bookName}</h1>
        <button className="buy-button">Buy Now</button>
      </div>
      <button
        className="navigate-next-book"
        onClick={() => {
          bookIndex >= books.length - 1 && setbookIndex(0);
          bookIndex < books.length - 1 && setbookIndex(bookIndex + 1);
        }}
      >
        {`>`}
      </button>
      <button
        className="navigate-previous-book"
        onClick={() => {
          bookIndex <= 0 && setbookIndex(books.length - 1);
          bookIndex > 0 && setbookIndex(bookIndex - 1);
        }}
      >
        {`<`}
      </button>
    </div>
  );
}
