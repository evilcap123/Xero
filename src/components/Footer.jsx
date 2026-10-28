import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { restaurantConfig } from '../config';
import Logo from './Logo';
export default function Footer() { return <footer className="footer"><div className="container footer-grid"><div><Logo/><p className="footer-blurb">Big cravings. Fresh bites. Your next favourite is waiting.</p></div><div><h4>Explore</h4><Link to="/menu">Full Menu</Link><Link to="/menu?category=Fast%20Food">Burgers & Wraps</Link><Link to="/menu?category=Main%20Course">Pizza</Link></div><div><h4>Find XERO</h4><p><MapPin size={15}/>{restaurantConfig.address}</p><p><Phone size={15}/>{restaurantConfig.phone}</p><p><Clock size={15}/>{restaurantConfig.openingHours}</p><p className="footer-gstin">GSTIN: {restaurantConfig.gstin}</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} XERO. Built for good cravings.</span><span>Frontend demo · Sample menu prices</span></div></footer>; }
