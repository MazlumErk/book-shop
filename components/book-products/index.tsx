"use client";

// Next
import "next/image";
import Image from "next/image";
// Utils
import scrollToTop from "@/common/utils/scroll-to-top";

interface BookProductsProps {
  books: any[];
  setSelectedBook: any;
}

export default function BookProducts(props: BookProductsProps) {
  const { books, setSelectedBook } = props;
  return (
    <div className="book-products">
      {books.map((item, index) => (
        <div
          className="product"
          key={index}
          onClick={() => {
            setSelectedBook(index);
            scrollToTop();
          }}
        >
          {item.bookName}
          <Image
            className="product-image"
            src={item.bookImageUrl}
            alt={item.bookName}
            width={100}
            height={100}
          ></Image>
        </div>
      ))}
    </div>
  );
}
