import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./Utils/Context";
import Success from "./components/Success/success";
import { initializeApp } from "firebase/app";
import config from "./firebase/firebase";

// initializeApp(config);
function App() {
  return (
    <>
      <Router>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/success" element={<Success />} />
          </Routes>
          <Newsletter />
          <Footer />
        </AppContext>
      </Router>
    </>
  );
}

export default App;
