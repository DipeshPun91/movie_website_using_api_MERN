import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/guest/Home.jsx";
import Header from "./component/partials/Header.jsx";
import Movies from "./pages/guest/Movies.jsx";
import Footer from "./component/partials/Footer.jsx";
import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import Dashboard from "./pages/authenticated/Dashboard.jsx";
import MovieDetail from "./pages/authenticated/MovieDetail.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetail />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
