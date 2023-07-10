"use client";

// React
import { useState } from "react";
// Next
import Image from 'next/image';
// Components
import BookSalesPercentage from "../book-sales-percentage";

interface BookShowcaseProps {
  books: any[];
  selectedBook: number;
  setSelectedBook: any;
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
  const { books, selectedBook, setSelectedBook } = props;
  return (
    <div className="book-showcase">
      <Image className="book-image" src={books[selectedBook].bookImageUrl} alt={books[selectedBook].bookName} width={200} height={400}></Image>
      <div className="price">
        <div className="book-discount-price">
          ${books[selectedBook].bookDiscountPrice}
          <div>${books[selectedBook].bookPrice}</div>
        </div>
        <div className="discount-ent-time-message">
          Hurry Up! <div>Offer ends in:</div>
        </div>
        {dateCounter(books[0].bookDiscountEndDate)}
        <div className="book-storage">
          Already Sold: {books[selectedBook].selledBookCount} Available:{" "}
          {books[selectedBook].bookCount}
        </div>
        <BookSalesPercentage
          totalBookCount={books[selectedBook].totalBookCount}
          availableBookCount={books[selectedBook].bookCount}
        />
      </div>
      <div className="ad">
        <h1 className="book-name">{books[selectedBook].bookName}</h1>
        <button className="buy-button">Buy Now</button>
      </div>
      <button
        className="navigate-next-book"
        onClick={() => {
          selectedBook >= books.length - 1 && setSelectedBook(0);
          selectedBook < books.length - 1 && setSelectedBook(selectedBook + 1);
        }}
      >
        {`>`}
      </button>
      <button
        className="navigate-previous-book"
        onClick={() => {
          selectedBook <= 0 && setSelectedBook(books.length - 1);
          selectedBook > 0 && setSelectedBook(selectedBook - 1);
        }}
      >
        {`<`}
      </button>
    </div>
  );
}
