import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import data from "./data/datas.json";
import NotFound from "./pages/NotFound";
import SearchCategory from "./pages/SearchCategory";
import "./App.css";

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:artisanCategory" element={<SearchCategory />} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
