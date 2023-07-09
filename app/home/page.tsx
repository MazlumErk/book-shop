"use client";

// Components
import BookProducts from "@/components/book-products";
import BookShowcase from "@/components/book-showcase";
import Footer from "@/components/footer";
import Header from "@/components/header";

// Book List
const bookList = [
  {
    bookName: "The Alchemist",
    pageNumber: 208,
    category: "Fiction",
    selledBookCount: 14,
    bookCount: 10,
    totalBookCount: 17,
    bookPrice: 10,
    bookDiscountPrice: 8,
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
  },
  {
    bookName: "Lord of the Rings",
    pageNumber: 1216,
    category: "Fantasy",
    selledBookCount: "999",
    bookCount: "45",
    totalBookCount: "1044",
    bookPrice: "20",
    bookDiscountPrice: "15",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    bookName: "The Hobbit",
    pageNumber: 400,
    category: "Fantasy",
    selledBookCount: "643",
    bookCount: "12",
    totalBookCount: "655",
    bookPrice: "15",
    bookDiscountPrice: "10",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    bookName: "Harry Potter and the Philosopher's Stone",
    pageNumber: 256,
    category: "Fantasy",
    selledBookCount: "1200",
    bookCount: "100",
    totalBookCount: "1300",
    bookPrice: "25",
    bookDiscountPrice: "20",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/81HteEu+D6L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    bookName: "The Da Vinci Code",
    pageNumber: 592,
    category: "Mystery",
    selledBookCount: "500",
    bookCount: "250",
    totalBookCount: "550",
    bookPrice: "18",
    bookDiscountPrice: "15",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF894,1000_QL80_.jpg"
  },
  {
    bookName: "To Kill a Mockingbird",
    pageNumber: 336,
    category: "Classic",
    selledBookCount: "300",
    bookCount: "30",
    totalBookCount: "330",
    bookPrice: "12",
    bookDiscountPrice: "10",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    bookName: "1984",
    pageNumber: 328,
    category: "Classic",
    selledBookCount: "400",
    bookCount: "340",
    totalBookCount: "440",
    bookPrice: "14",
    bookDiscountPrice: "12",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/41snCU4rifL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    bookName: "Animal Farm",
    pageNumber: 112,
    category: "Classic",
    selledBookCount: "200",
    bookCount: "20",
    totalBookCount: "220",
    bookPrice: "10",
    bookDiscountPrice: "8",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/91LUbAcpACL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    bookName: "Brave New World",
    pageNumber: 288,
    category: "Classic",
    selledBookCount: "150",
    bookCount: "145",
    totalBookCount: "165",
    bookPrice: "16",
    bookDiscountPrice: "14",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/91D4YvdC0dL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    bookName: "The Catcher in the Rye",
    pageNumber: 240,
    category: "Classic",
    selledBookCount: "250",
    bookCount: "25",
    totalBookCount: "275",
    bookPrice: "13",
    bookDiscountPrice: "11",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/91HPG31dTwL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    bookName: "The Great Gatsby",
    pageNumber: 200,
    category: "Classic",
    selledBookCount: "350",
    bookCount: "325",
    totalBookCount: "385",
    bookPrice: "17",
    bookDiscountPrice: "15",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    bookName: "Pride and Prejudice",
    pageNumber: 226,
    category: "Classic",
    selledBookCount: "450",
    bookCount: "45",
    totalBookCount: "495",
    bookPrice: "19",
    bookDiscountPrice: "17",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/91eKRbuhgaL._AC_UF894,1000_QL80_.jpg"
  },
  {
    bookName: "The Picture of Dorian Gray",
    pageNumber: 176,
    category: "Classic",
    selledBookCount: "100",
    bookCount: "60",
    totalBookCount: "110",
    bookPrice: "11",
    bookDiscountPrice: "9",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/51IPe62r8gL._AC_UF894,1000_QL80_.jpg"
  },
  {
    bookName: "The Adventures of Huckleberry Finn",
    pageNumber: 224,
    category: "Classic",
    selledBookCount: "80",
    bookCount: "8",
    totalBookCount: "88",
    bookPrice: "9",
    bookDiscountPrice: "7",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/91yLxd90MiL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    bookName: "The Adventures of Tom Sawyer",
    pageNumber: 240,
    category: "Classic",
    selledBookCount: "120",
    bookCount: "102",
    totalBookCount: "132",
    bookPrice: "10",
    bookDiscountPrice: "8",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/71l6aEDzaFS._AC_UF1000,1000_QL80_.jpg"
  },
  {
    bookName: "The Brothers Karamazov",
    pageNumber: 824,
    category: "Classic",
    selledBookCount: "90",
    bookCount: "9",
    totalBookCount: "99",
    bookPrice: "12",
    bookDiscountPrice: "10",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/71OZJsgZzQL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    bookName: "Crime and Punishment",
    pageNumber: 430,
    category: "Classic",
    selledBookCount: "150",
    bookCount: "115",
    totalBookCount: "165",
    bookPrice: "14",
    bookDiscountPrice: "12",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/61uprvYgNyL._AC_UF894,1000_QL80_.jpg"
  },
  {
    bookName: "The Idiot",
    pageNumber: 656,
    category: "Classic",
    selledBookCount: "70",
    bookCount: "34",
    totalBookCount: "77",
    bookPrice: "11",
    bookDiscountPrice: "9",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/71FKmTsluHL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    bookName: "Anna Karenina",
    pageNumber: 864,
    category: "Classic",
    selledBookCount: "200",
    bookCount: "170",
    totalBookCount: "220",
    bookPrice: "16",
    bookDiscountPrice: "14",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/51X763voBsL._AC_UF894,1000_QL80_.jpg"
  },
  {
    bookName: "War and Peace",
    pageNumber: 1225,
    category: "Classic Literature",
    selledBookCount: "300",
    bookCount: "30",
    totalBookCount: "330",
    bookPrice: "20",
    bookDiscountPrice: "18",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/51smhzS9N+L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookName: "The Count of Monte Cristo",
    pageNumber: 1276,
    category: "Classic Literature",
    selledBookCount: "180",
    bookCount: "128",
    totalBookCount: "198",
    bookPrice: "15",
    bookDiscountPrice: "13",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/81yNjn95mSL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookName: "Les Misérables",
    pageNumber: 1463,
    category: "Classic Literature",
    selledBookCount: "250",
    bookCount: "215",
    totalBookCount: "275",
    bookPrice: "18",
    bookDiscountPrice: "16",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/81n2Zy7TC8L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookName: "The Three Musketeers",
    pageNumber: 704,
    category: "Classic Literature",
    selledBookCount: "120",
    bookCount: "12",
    totalBookCount: "132",
    bookPrice: "14",
    bookDiscountPrice: "12",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/61WJfk5akcL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookName: "The Adventures of Sherlock Holmes",
    pageNumber: 307,
    category: "Mystery",
    selledBookCount: "400",
    bookCount: "340",
    totalBookCount: "440",
    bookPrice: "12",
    bookDiscountPrice: "10",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/81tNnqcHxlL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookName: "The Hound of the Baskervilles",
    pageNumber: 190,
    category: "Mystery",
    selledBookCount: "150",
    bookCount: "15",
    totalBookCount: "165",
    bookPrice: "11",
    bookDiscountPrice: "9",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/81jrDvYyliL._AC_UF894,1000_QL80_.jpg",
  },
  {
    bookName: "The Adventures of Pinocchio",
    pageNumber: 192,
    category: "Children's Literature",
    selledBookCount: "50",
    bookCount: "35",
    totalBookCount: "55",
    bookPrice: "8",
    bookDiscountPrice: "6",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/617pUf3MyBL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookName: "The Little Prince",
    pageNumber: 96,
    category: "Children's Literature",
    selledBookCount: "600",
    bookCount: "460",
    totalBookCount: "660",
    bookPrice: "13",
    bookDiscountPrice: "11",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/719njS5bQhL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookName: "The Giving Tree",
    pageNumber: 64,
    category: "Children's Literature",
    selledBookCount: "200",
    bookCount: "20",
    totalBookCount: "220",
    bookPrice: "9",
    bookDiscountPrice: "7",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/81+1abAhFzL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookName: "The Cat in the Hat",
    pageNumber: 72,
    category: "Children's Literature",
    selledBookCount: "300",
    bookCount: "130",
    totalBookCount: "330",
    bookPrice: "10",
    bookDiscountPrice: "8",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/71GcW+ux3kL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookName: "Green Eggs and Ham",
    pageNumber: 72,
    category: "Children's Literature",
    selledBookCount: "190",
    bookCount: "25",
    totalBookCount: "275",
    bookPrice: "11",
    bookDiscountPrice: "9",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/712nTmzFFRL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookName: "The Lorax",
    pageNumber: 72,
    category: "Children's Literature",
    selledBookCount: "110",
    bookCount: "105",
    totalBookCount: "165",
    bookPrice: "12",
    bookDiscountPrice: "10",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/91HQJKOThEL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookName: "Charlotte's Web",
    pageNumber: 192,
    category: "Children's Literature",
    selledBookCount: "100",
    bookCount: "18",
    totalBookCount: "198",
    bookPrice: "14",
    bookDiscountPrice: "12",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/91YS0h1kz5L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookName: "The Secret Garden",
    pageNumber: 288,
    category: "Children's Literature",
    selledBookCount: "100",
    bookCount: "60",
    totalBookCount: "110",
    bookPrice: "13",
    bookDiscountPrice: "11",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/91xHOl782vL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookName: "The Wind in the Willows",
    pageNumber: 240,
    category: "Children's Literature",
    selledBookCount: "60",
    bookCount: "12",
    totalBookCount: "132",
    bookPrice: "15",
    bookDiscountPrice: "13",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/818ELR4DXEL._AC_UF894,1000_QL80_.jpg",
  },
  {
    bookName: "The Lion, the Witch and the Wardrobe",
    pageNumber: 208,
    category: "Children's Literature",
    selledBookCount: "200",
    bookCount: "130",
    totalBookCount: "220",
    bookPrice: "16",
    bookDiscountPrice: "14",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/81pDmBiU4bL._AC_UF894,1000_QL80_.jpg",
  },
  {
    bookName: "The Hitchhiker's Guide to the Galaxy",
    pageNumber: 224,
    category: "Science Fiction",
    selledBookCount: "75",
    bookCount: "35",
    totalBookCount: "385",
    bookPrice: "18",
    bookDiscountPrice: "16",
    bookDiscountEndDate: "2023-10-10 12:00:00",
    bookImageUrl: "https://m.media-amazon.com/images/I/91lFJOYspuL._AC_UF1000,1000_QL80_.jpg",
  }
];


export default function Home() {
  return (
    <div className="home">
        <Header />
        <BookShowcase books={bookList}/>
        <BookProducts books={bookList}/>
        <Footer />
    </div>
  );
}
