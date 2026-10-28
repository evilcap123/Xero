import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CartBar from './components/CartBar';
import Home from './pages/Home';
import MenuPage from './pages/Menu';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Payment from './pages/Payment';
import { CartProvider } from './context/CartContext';
function ScrollToTop() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]); return null; }
function Layout() { return <><ScrollToTop/><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/menu" element={<MenuPage/>}/><Route path="/checkout" element={<Checkout/>}/><Route path="/order-confirmation" element={<OrderConfirmation/>}/><Route path="/payment" element={<Payment/>}/><Route path="*" element={<Home/>}/></Routes><Footer/><CartDrawer/><CartBar/></>; }
export default function App() { return <BrowserRouter basename={import.meta.env.BASE_URL}><CartProvider><Layout/></CartProvider></BrowserRouter>; }
