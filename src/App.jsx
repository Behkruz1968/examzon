import React, { useReducer, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Contexts } from "./util/Context";
import Liked from "./pages/Liked";
import Choose from "./pages/Choose";
import reducer, { INITIAL_STATE } from "./reducer/Reducer";
import ProductInfo from "./pages/ProductInfo";
import Carousel from "./components/Main";
import ArticlesSection from "./components/ArticlesSection";
import Slider from "./components/Slider";
import InfoCards from "./components/carta";



export default function App() {
  const [card, setCard] = useState(true);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const [likedProducts, setLikedProducts] = useState(() => {
    return JSON.parse(localStorage.getItem('likedProducts')) || {};
  });

  useEffect(() => {
    localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
  }, [likedProducts]);

  return (
    <div className="font-inter">
      <Contexts.Provider value={{ card, setCard, state, dispatch, likedProducts, setLikedProducts }}>
        <Overview />
        <Navbar />

<Slider/>
<InfoCards/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/liked" element={<Liked />}/>
          <Route path="/saved" element={<Choose />}/>
          <Route path="/productInfo/:id" element={<ProductInfo />}/>
        </Routes>
<ArticlesSection/>
        <Footer />
      </Contexts.Provider>
    </div>
  );
}