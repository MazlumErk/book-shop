"use client";

// Components
import Footer from "@/components/footer";
import Header from "@/components/header";
import Logo from "@/components/logo";


export default function Home() {
  return (
    <div className="home">
        <Header />
        <Logo className="logo-dark"/>
        <Footer />
    </div>
  );
}
