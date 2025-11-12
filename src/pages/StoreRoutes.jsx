import { Routes, Route } from 'react-router-dom'
import App from '../App'
import ProductPage from '../components/ProductPage'
import Cart from '../components/Cart'
import Test from '../Test'

export default function StoreRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/test" element={<Test />} />
      {/* Fallback to home for any unknown route including Men/Women/etc. */}
      <Route path="*" element={<App />} />
    </Routes>
  )
}
