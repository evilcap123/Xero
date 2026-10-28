import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
export default function CartBar() { const { count, subtotal, setCartOpen } = useCart(); if (!count) return null; return <div className="mobile-cart-bar"><div className="mobile-cart-info"><ShoppingCart size={18}/><span>{count} {count === 1 ? 'item' : 'items'}</span><strong>₹{subtotal}</strong></div><button className="button button-primary" onClick={() => setCartOpen(true)}>View Cart <ArrowRight size={16}/></button></div>; }
