import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
