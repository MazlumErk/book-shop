"use client";

// Next
import 'next/image'
import Image from 'next/image';

interface BookProductsProps {
  books: any[];
}

export default function BookProducts(props: BookProductsProps) {
  const { books } = props;
  return (
    <div className="book-products">
      {books.map((item, index) => (
        <div className="product" key={index}>
          {item.bookName}
          <Image className="product-image" src={item.bookImageUrl} alt={item.bookName} width={100} height={100}></Image>
        </div>
      ))}
    </div>
  );
}
