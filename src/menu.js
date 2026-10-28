import chickenBurgerImage from './temp photos/WhatsApp Unknown 2026-10-28 at 12.08.48 PM/ChickenBurger.jpeg';
import chocoBrownieImage from './temp photos/WhatsApp Unknown 2026-10-28 at 12.08.48 PM/ChocoBrownie.jpeg';
import pannerPaprikaImage from './temp photos/WhatsApp Unknown 2026-10-28 at 12.08.48 PM/PannerPaprika.jpeg';
import redSaucePastaImage from './temp photos/WhatsApp Unknown 2026-10-28 at 12.08.48 PM/RedSaucePasta.jpeg';
import veggieCrunchImage from './temp photos/WhatsApp Unknown 2026-10-28 at 12.08.48 PM/VeggyCrunch.jpeg';
import cheesePizzaImage from './temp photos/WhatsApp Unknown 2026-10-28 at 12.08.48 PM/WhatsApp Image 2026-10-28 at 12.06.45 PM.jpeg';
import whiteSaucePastaImage from './temp photos/WhatsApp Unknown 2026-10-28 at 12.08.48 PM/WhiteSaucePasta.jpeg';

export const categories = ['All', 'Main Course', 'Fast Food', 'Desserts'];

// Prices are sample prices until verified against the restaurant's current menu.
export const menu = [
  { id: 'chicken-burger-photo', name: 'Chicken Burger', description: 'Crispy chicken, fresh salad and house sauce.', category: 'Fast Food', price: 150, image: chickenBurgerImage, isVeg: false },
  { id: 'choco-brownie-photo', name: 'Choco Brownie', description: 'Rich chocolate brownie with a soft, fudgy centre.', category: 'Desserts', price: 150, image: chocoBrownieImage, isVeg: true },
  { id: 'panner-paprika-photo', name: 'Panner Paprika', description: 'Spiced paneer with paprika and fresh vegetables.', category: 'Main Course', sizes: { S: 150, M: 240, L: 350 }, image: pannerPaprikaImage, isVeg: true },
  { id: 'red-sauce-pasta-photo', name: 'Red Sauce Pasta', description: 'Pasta tossed in a rich tomato and herb sauce.', category: 'Main Course', price: 150, image: redSaucePastaImage, isVeg: true },
  { id: 'veggy-crunch-photo', name: 'Veggy Crunch', description: 'Crispy vegetables layered with a creamy house dressing.', category: 'Fast Food', sizes: { S: 140, M: 250, L: 370 }, image: veggieCrunchImage, isVeg: true },
  { id: 'classic-cheese-pizza-photo', name: 'Classic Cheese Pizza', description: 'Golden melted cheese on a freshly baked pizza base.', category: 'Main Course', sizes: { S: 120, M: 200, L: 300 }, image: cheesePizzaImage, isVeg: true },
  { id: 'white-sauce-pasta-photo', name: 'White Sauce Pasta', description: 'Creamy pasta finished with herbs and melted cheese.', category: 'Main Course', price: 150, image: whiteSaucePastaImage, isVeg: true },
];
