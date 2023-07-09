interface BookProductsProps {
  books: any[];
}

export default function BookProducts(props: BookProductsProps) {
  const { books } = props;
  return (
    <div className="book-products">
      {books.map((item) => (
        <div className="product">
          {item.bookName}
          <img className="product-image" src={item.bookImageUrl} alt="" /> 
        </div>
      ))}
    </div>
  );
}
