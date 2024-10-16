import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import NewsList from "./NewsList";
import Footer from "./Footer";


const Dashboard = () => {
  return (
    <div>
      <NavBar /> {/* NavBar is always displayed */}
      <Hero />
      <NewsList />
      <Footer />
    </div>
  );
};

export default Dashboard;

