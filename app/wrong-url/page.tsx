"use client";

// Components
import Footer from "@/components/footer";
import Header from "@/components/header";
import WrongUrlMsg from "@/components/wrong-url-msg";



export default function Home() {
  return (
    <div className="home">
        <Header />
        <WrongUrlMsg />
        <Footer />
    </div>
  );
}
