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
          <img className="product-image" src={item.bookImageUrl} alt={item.bookName} /> 
        </div>
      ))}
    </div>
  );
}
