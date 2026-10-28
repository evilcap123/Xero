# XERO Restaurant Frontend

A mobile-first React + Vite frontend prototype for XERO, with a dark charcoal, hot pink-red, and amber visual system.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build:

```bash
npm run build
npm run preview
```

## Included

- Home page with hero, category links, featured products, restaurant story, and supplied photos.
- Menu with category selection, search, and All/Veg/Non-Veg filters.
- Shared cart state, quantity steppers, cart drawer, mobile sticky cart bar, and `localStorage` persistence.
- Checkout with conditional fields and Indian mobile-number validation.
- Local order summary and generated order reference.
- UPI deep link and dynamically generated QR, plus counter/COD options.
- No backend, database, login, or real payment verification.

## Configuration

Edit `src/config.js` to set the real restaurant address, phone, opening hours, and verified UPI ID. The UPI ID currently uses a placeholder (`owner@upi`). Do not use the payment UI for real transactions until this value is verified and a suitable order/payment backend exists.

## Menu data

The seven current entries are illustrative samples in `src/menu.js`. The supplied dish photos are imported from `src/temp photos/` and displayed in the menu. The uploaded menu-board photo is included at `public/images/xero-menu-board.png` as a visual reference, but the tiny text in the photograph has not been treated as verified structured pricing. Confirm the current menu and prices before using this for customers.

## Supplied images

- `public/images/xero-signage.png`
- `public/images/xero-menu-board.png`
- `public/images/xero-burger.png`

Some additional menu product images use remote Unsplash URLs and therefore require an internet connection. If a remote image fails, product cards fall back to the supplied burger photo.
