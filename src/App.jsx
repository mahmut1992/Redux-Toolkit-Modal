import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
