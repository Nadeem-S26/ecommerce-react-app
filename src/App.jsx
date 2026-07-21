import { useState } from 'react';

import ImageSlider from './components/slider';
import './App.css';

import productOne from './assets/1.jpg';
import productTwo from './assets/2.jpg';
import productThree from './assets/3.jpg';

const featuredItems = [
  {
    label: 'Soft plush sets',
    value: '120+ designs',
  },
  {
    label: 'Fast dispatch',
    value: '24 hour shipping',
  },
  {
    label: 'Loved by families',
    value: '4.9 customer rating',
  },
];

const highlights = ['Safe materials', 'Best value picks', 'Gift-ready packaging'];

const formatInr = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);

const products = [
  {
    name: 'Aurora Plush Bear',
    price: 1899,
    rating: '4.9',
    badge: 'Best seller',
    image: productOne,
  },
  {
    name: 'Color Pop Puzzle Set',
    price: 1299,
    rating: '4.8',
    badge: 'New arrival',
    image: productTwo,
  },
  {
    name: 'Dreamland Building Pack',
    price: 2499,
    rating: '5.0',
    badge: 'Gift pick',
    image: productThree,
  },
  {
    name: 'Little Chef Starter Kit',
    price: 2199,
    rating: '4.7',
    badge: 'Top rated',
    image: productTwo,
  },
  {
    name: 'Adventure Pull Cart',
    price: 2299,
    rating: '4.8',
    badge: 'Outdoor',
    image: productOne,
  },
  {
    name: 'Moonbeam Stacking Set',
    price: 1599,
    rating: '4.9',
    badge: 'Learning',
    image: productThree,
  },
];

const benefits = [
  {
    title: 'Curated with care',
    text: 'Each item is chosen for quality, age fit, and repeat play value.',
  },
  {
    title: 'Fast, reliable shipping',
    text: 'Orders are packed quickly so gifts and essentials arrive on time.',
  },
  {
    title: 'Easy gift shopping',
    text: 'Find crowd-pleasing picks with simple price ranges and gift tags.',
  },
];

const reviews = [
  {
    quote:
      'The layout makes it easy to browse, and the product selection feels more polished than a typical template.',
    author: 'Mia, parent shopper',
  },
  {
    quote:
      'I like how the page already feels like a real store. The sections guide you naturally from discovery to checkout.',
    author: 'Jordan, gift buyer',
  },
  {
    quote:
      'The rupee pricing and straightforward product cards make it easier to judge value at a glance.',
    author: 'Ananya, value shopper',
  },
  {
    quote:
      'Add to cart now works properly and the cart summary updates instantly, which makes the site feel usable.',
    author: 'Rahul, parent shopper',
  },
  {
    quote:
      'Good Quality Produts!! And reasonable pricing would Love to buy from here again ',
    author: 'John Kai, A parent shopper',
  },
  {
    quote:
      'Amazing packaging and delivery was fast and neat without any damage to products',
    author: 'Vander, A wholesale shopper',
  },
];

const pages = [
  { key: 'home', label: 'Home' },
  { key: 'shop', label: 'Shop' },
  { key: 'reviews', label: 'Reviews' },
  { key: 'contact', label: 'Contact' },
];

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [productPage, setProductPage] = useState(0);
  const [cart, setCart] = useState({});

  const myImages = [productOne, productTwo, productThree];
  const productsPerPage = 3;
  const totalProductPages = Math.ceil(products.length / productsPerPage);
  const visibleProducts = products.slice(
    productPage * productsPerPage,
    productPage * productsPerPage + productsPerPage,
  );
  const cartEntries = Object.values(cart);
  const cartCount = cartEntries.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartEntries.reduce((total, item) => total + item.price * item.quantity, 0);

  const showPage = (pageKey) => {
    setActivePage(pageKey);
  };

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart[product.name];
      const quantity = existingItem ? existingItem.quantity + 1 : 1;

      return {
        ...currentCart,
        [product.name]: {
          name: product.name,
          price: product.price,
          quantity,
        },
      };
    });
  };

  const renderHomePage = () => (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Zen Store</p>
          <h1>Playful toys, thoughtfully picked for everyday joy.</h1>
          <p className="hero-text">
            Explore a brighter selection of toys with safe materials,
            gift-ready packaging, and fast delivery for families who want
            something special without the hunt.
          </p>

          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={() => showPage('shop')}>
              Shop the catalog
            </button>
            <button className="secondary-button" type="button" onClick={() => showPage('reviews')}>
              Read reviews
            </button>
          </div>

          <ul className="highlights" aria-label="Store highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="feature-grid">
            {featuredItems.map((item) => (
              <article className="feature-card" key={item.label}>
                <span>{item.value}</span>
                <strong>{item.label}</strong>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-header">
            <div>
              <p className="visual-kicker">Curated picks</p>
              <h2>Latest arrivals</h2>
            </div>
            <span className="visual-badge">New season</span>
          </div>

          <ImageSlider images={myImages} />
        </div>
      </section>

      <section className="content-section mini-story">
        <div className="section-heading">
          <p className="section-label">Why it works</p>
          <h2>Built like a store, not just a landing page.</h2>
          <p>
            Use the navigation above to move between the store sections without
            stuffing everything into one long scroll.
          </p>
        </div>
      </section>
    </>
  );

  const renderShopPage = () => (
    <section className="content-section page-panel">
      <div className="section-heading">
        <p className="section-label">Featured products</p>
        <h2>Popular picks from the current collection.</h2>
        <p>
          Each card reuses the same three product images intentionally, so you do not
          need a different image for every item while the catalog still feels complete.
        </p>
      </div>

      <div className="product-grid">
        {visibleProducts.map((product) => (
          <article className="product-card" key={product.name}>
            <div className="product-image-wrap">
              <img src={product.image} alt={product.name} className="product-image" />
              <span className="product-badge">{product.badge}</span>
            </div>

            <div className="product-copy">
              <div className="product-row">
                <h3>{product.name}</h3>
                <span className="product-rating">★ {product.rating}</span>
              </div>

              <div className="product-row">
                <strong>{formatInr(product.price)}</strong>
                <button type="button" className="add-button" onClick={() => addToCart(product)}>
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <aside className="cart-summary" aria-label="Cart summary">
        <div className="cart-summary-header">
          <h3>Your cart</h3>
          <span>
            {cartCount} item{cartCount === 1 ? '' : 's'}
          </span>
        </div>

        {cartEntries.length > 0 ? (
          <ul className="cart-list">
            {cartEntries.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <strong>
                  {item.quantity} x {formatInr(item.price)}
                </strong>
              </li>
            ))}
          </ul>
        ) : (
          <p className="cart-empty">Add a product to see it appear here.</p>
        )}

        <div className="cart-total">
          <span>Total</span>
          <strong>{formatInr(cartTotal)}</strong>
        </div>
      </aside>

      <div className="pager" aria-label="Product pages">
        <button
          type="button"
          className="pager-button"
          onClick={() => setProductPage((current) => Math.max(0, current - 1))}
          disabled={productPage === 0}
        >
          Previous
        </button>
        <span>
          Page {productPage + 1} of {totalProductPages}
        </span>
        <button
          type="button"
          className="pager-button"
          onClick={() => setProductPage((current) => Math.min(totalProductPages - 1, current + 1))}
          disabled={productPage === totalProductPages - 1}
        >
          Next
        </button>
      </div>
    </section>
  );

  const renderReviewsPage = () => (
    <section className="content-section page-panel reviews-section">
      <div className="section-heading">
        <p className="section-label">Customer love</p>
        <h2>Built to feel trustworthy, not generic.</h2>
      </div>

      <div className="review-grid">
        {reviews.map((review) => (
          <blockquote className="review-card" key={review.author}>
            <p>{review.quote}</p>
            <footer>{review.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );

  const renderContactPage = () => (
    <>
      <section className="newsletter-band page-panel" id="contact">
        <div>
          <p className="section-label">Stay in the loop</p>
          <h2>Get new arrivals and seasonal picks first.</h2>
          <p>Join the list for updates on fresh toy drops, gifts, and special offers.</p>
        </div>

        <form className="newsletter-form">
          <input type="email" placeholder="Email address" aria-label="Email address" />
          <button type="submit">Join newsletter</button>
        </form>
      </section>

      <footer className="site-footer">
        <p>Zen Store © 2026</p>
        <div>
          <a href="mailto:hello@zenstore.example">hello@zenstore.example</a>
          <a href="tel:+10000000000">+1 (000) 000-0000</a>
        </div>
      </footer>
    </>
  );

  return (
    <main className="app-shell">
      <header className="site-header">
        <button className="brand brand-button" type="button" onClick={() => showPage('home')}>
          <span className="brand-mark">Z</span>
          <span>
            <strong>Zen Store</strong>
            <small>Toys and gifts that spark play</small>
          </span>
        </button>

        <nav className="site-nav" aria-label="Primary navigation">
          {pages.map((page) => (
            <button
              type="button"
              key={page.key}
              className={activePage === page.key ? 'nav-button is-active' : 'nav-button'}
              onClick={() => showPage(page.key)}
            >
              {page.label}
            </button>
          ))}
        </nav>

        <button className="cart-pill" type="button" onClick={() => showPage('shop')} aria-label="View cart summary">
          Cart {cartCount}
        </button>
      </header>
      {activePage === 'home' && renderHomePage()}
      {activePage === 'shop' && renderShopPage()}
      {activePage === 'reviews' && renderReviewsPage()}
      {activePage === 'contact' && renderContactPage()}
    </main>
  );
};

export default App;
