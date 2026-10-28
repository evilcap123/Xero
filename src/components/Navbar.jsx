import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Logo from './Logo';
import { restaurantConfig } from '../config';
export default function Navbar() {
  const { count, setCartOpen } = useCart(); const [mobileOpen, setMobileOpen] = useState(false); const [searchOpen, setSearchOpen] = useState(false); const [search, setSearch] = useState(''); const navigate = useNavigate();
  const goSearch = e => { e.preventDefault(); navigate(`/menu${search.trim() ? `?q=${encodeURIComponent(search.trim())}` : ''}`); setSearchOpen(false); setMobileOpen(false); };
  return <header className="navbar"><div className="nav-inner"><Logo/><nav className={mobileOpen ? 'nav-links open' : 'nav-links'}><NavLink to="/" end onClick={() => setMobileOpen(false)}>Home</NavLink><NavLink to="/menu" onClick={() => setMobileOpen(false)}>Menu</NavLink></nav><div className="nav-actions"><button className="icon-button" aria-label="Search menu" onClick={() => setSearchOpen(v => !v)}><Search size={19}/></button><span className="nav-gstin">GSTIN: {restaurantConfig.gstin}</span><button className="icon-button cart-icon" aria-label={`Open cart, ${count} items`} onClick={() => setCartOpen(true)}><ShoppingCart size={19}/>{count > 0 && <span className="count-badge">{count}</span>}</button><Link className="button button-primary nav-order" to="/menu">Order Now</Link><button className="mobile-menu icon-button" aria-label="Toggle navigation" onClick={() => setMobileOpen(v => !v)}>{mobileOpen ? <X/> : <MenuIcon/>}</button></div></div>{searchOpen && <form className="nav-search" onSubmit={goSearch}><Search size={18}/><input autoFocus value={search} onChange={e => setSearch(e.target.value)} placeholder="Search pizza, burgers, wraps…"/><button className="button button-primary" type="submit">Search</button></form>}</header>;
}
