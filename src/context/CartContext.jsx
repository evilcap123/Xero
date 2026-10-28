import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { menu } from '../menu';

const CartContext = createContext(null);
const STORAGE_KEY = 'xero-cart-v1';

export function getCartKey(id, size) {
  return size ? `${id}::${size}` : id;
}

function readCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {};
    return Object.fromEntries(Object.entries(raw).filter(([key, qty]) => {
      const id = key.split('::')[0];
      return menu.some(p => p.id === id) && Number.isInteger(qty) && qty > 0;
    }));
  } catch { return {}; }
}

export function CartProvider({ children }) {
  const [quantities, setQuantities] = useState(readCart);
  const [cartOpen, setCartOpen] = useState(false);
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(quantities)); }, [quantities]);
  const add = (id, size) => {
    const key = getCartKey(id, size);
    setQuantities(old => ({ ...old, [key]: (old[key] || 0) + 1 }));
  };
  const setQty = (key, qty) => setQuantities(old => {
    const next = { ...old };
    if (qty <= 0) delete next[key]; else next[key] = qty;
    return next;
  });
  const remove = id => setQty(id, 0);
  const clear = () => setQuantities({});
  const items = useMemo(() => Object.entries(quantities).flatMap(([key, quantity]) => {
    const [id, size] = key.split('::');
    const product = menu.find(p => p.id === id);
    if (!product) return [];
    const price = size && product.sizes ? product.sizes[size] : product.price;
    return [{ ...product, id: key, productId: id, size, price, quantity, lineTotal: price * quantity }];
  }), [quantities]);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const value = { quantities, items, count, subtotal, add, setQty, remove, clear, cartOpen, setCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() { const value = useContext(CartContext); if (!value) throw new Error('useCart must be used within CartProvider'); return value; }
