import { Routes, Route } from "react-router-dom";
import { DesktopHome } from "./screens/DesktopHome";
import ShippingAddress from "./screens/ShippingAddress";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DesktopHome />} />
      <Route path="/shipping-address/:itemId" element={<ShippingAddress />} />
    </Routes>
  );
} 