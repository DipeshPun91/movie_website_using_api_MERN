import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./component/partials/Header.jsx";
import Movies from "./pages/Movies.jsx";
import Footer from "./component/partials/Footer.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
