
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";

const dishes = [
  {
    id: 1,
    name: "Golden Truffle Pizza",
    category: "Pizza",
    price: 950,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=1000",
    description: "Crispy golden pizza slices, bubbling mozzarella, fresh herbs and delicate black truffle.",
  },
  {
    id: 2,
    name: "Classic Wagyu Steak",
    category: "Premium Steaks",
    price: 2800,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1000",
    description: "Beautifully marbled Wagyu beef, expertly seared and served with a rich signature sauce.",
  },
  {
    id: 3,
    name: "Aged Beef Tenderloin",
    category: "Premium Steaks",
    price: 2400,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1000",
    description: "Premium aged beef with a caramelized crust, tender centre and seasonal accompaniments.",
  },
  {
    id: 4,
    name: "Black Truffle Experience",
    category: "Luxury Specialties",
    price: 1800,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=1000",
    description: "An elegant creation featuring aromatic whole black truffles and seasonal ingredients.",
  },
  {
    id: 5,
    name: "Seared Foie Gras",
    category: "Luxury Specialties",
    price: 1650,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=1000",
    description: "Golden seared foie gras with a caramelized top and delicate fruit reduction.",
  },
  {
    id: 6,
    name: "Royal Lobster Tails",
    category: "Seafood",
    price: 2600,
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1000",
    description: "Fresh lobster tails with luxurious butter sauce, herbs and an elegant presentation.",
  },
  {
    id: 7,
    name: "Fresh Oyster Selection",
    category: "Seafood",
    price: 1900,
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=1000",
    description: "Fresh oysters served chilled with lemon and delicate house dressing.",
  },
  {
    id: 8,
    name: "Heirloom Tomato Salad",
    category: "Starters",
    price: 650,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000",
    description: "Colourful heirloom tomatoes, fresh herbs, artisan dressing and seasonal greens.",
  },
  {
    id: 9,
    name: "Artisan Bread Selection",
    category: "Bakery",
    price: 450,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000",
    description: "Freshly baked artisan loaves with golden crusts, whipped butter and olive oil.",
  },
  {
    id: 10,
    name: "Golden Sunset Cocktail",
    category: "Cocktails",
    price: 550,
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=1000",
    description: "A beautiful signature cocktail with citrus notes and a golden finish.",
  },
  {
    id: 11,
    name: "Royal Berry Martini",
    category: "Cocktails",
    price: 600,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1000",
    description: "A sophisticated berry cocktail with refreshing flavours and elegant presentation.",
  },
  {
    id: 12,
    name: "Midnight Espresso Martini",
    category: "Cocktails",
    price: 650,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1000",
    description: "A rich coffee-inspired cocktail with smooth flavours and a velvet finish.",
  },
  {
    id: 13,
    name: "Ethiopian Signature Coffee",
    category: "Drinks",
    price: 250,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1000",
    description: "Premium Ethiopian coffee with beautiful aroma and traditional character.",
  },
    {
    id: 13,
    name: "brakefast special",
    category: "Cocktails",
    price: 100,
    image: "https://images.squarespace-cdn.com/content/v1/69483b8e06dac779ed938cbb/0a411d94-dd83-426c-8f65-95655dcea9cc/photo-1482049016688-2d3e1b311543.jpg?format=300w",
    description: "A delicious breakfast special with fresh ingredients and a hearty appetite.",
  },
];

const navItems = [
  ["Home", "/"],
  ["Our Menu", "/menu"],
  ["Our Story", "/about"],
  ["Gallery", "/gallery"],
  ["Reservations", "/reservations"],
  ["Private Dining", "/private-dining"],
  ["Order Online", "/order"],
  ["Contact", "/contact"],
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={() => setOpen(false)}>
        TASTE <span>HAVEN</span>
        <small>ETHIOPIAN FINE DINING</small>
      </Link>

      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      <nav className={open ? "nav nav-open" : "nav"}>
        {navItems.map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">TASTE HAVEN</div>
      <p>Where elegance meets Ethiopian flavour.</p>
      <p className="copyright">
        © {new Date().getFullYear()} Taste Haven. All rights reserved.
      </p>
    </footer>
  );
}

function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

function DishGrid({ items }) {
  return (
    <div className="dish-grid">
      {items.map((dish) => (
        <Link to={`/dish/${dish.id}`} className="dish-card" key={dish.id}>
          <div className="dish-image">
            <img src={dish.image} alt={dish.name} />
            <span className="dish-category">{dish.category}</span>
          </div>
          <div className="dish-info">
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <div className="dish-bottom">
              <span>{dish.price} ETB</span>
              <span className="text-link">Discover ↗</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">AN EXTRAORDINARY DINING EXPERIENCE</span>
          <h1>
            A Taste of
            <br />
            <em>Timeless Elegance.</em>
          </h1>
          <p>
            Discover the richness of Ethiopian cuisine and international
            fine dining, beautifully reimagined for unforgettable moments.
          </p>
          <div className="hero-actions">
            <Link to="/reservations" className="gold-button">
              Reserve Your Table
            </Link>
            <Link to="/menu" className="outline-button">
              Explore Our Menu
            </Link>
          </div>
        </div>
        <div className="hero-bottom">ADDIS ABABA · ETHIOPIA</div>
      </section>

      <section className="welcome section">
        <div className="welcome-image">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000"
            alt="Elegant fine dining table"
          />
          <div className="image-caption">AN ART OF HOSPITALITY</div>
        </div>
        <div className="welcome-text">
          <span className="eyebrow">WELCOME TO TASTE HAVEN</span>
          <h2>Tradition, with a touch of <em>luxury.</em></h2>
          <p>
            We celebrate the soul of Ethiopian food and international
            cuisine through thoughtful preparation, beautiful presentation
            and warm hospitality.
          </p>
          <Link to="/about" className="text-link">
            Discover Our Story ↗
          </Link>
        </div>
      </section>

      <section className="section featured">
        <PageIntro
          eyebrow="A SELECTION OF OUR FAVOURITES"
          title="Signature Experiences"
          description="From premium steaks and seafood to signature cocktails."
        />
        <DishGrid items={dishes.slice(0, 6)} />
        <div className="center">
          <Link to="/menu" className="gold-button">View Full Menu</Link>
        </div>
      </section>

      <section className="quote-section">
        <span className="eyebrow">THE TASTE HAVEN PROMISE</span>
        <h2>
          Every meal tells a story.
          <em> Every moment becomes a memory.</em>
        </h2>
      </section>
    </>
  );
}

function Menu() {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Pizza",
    "Premium Steaks",
    "Luxury Specialties",
    "Seafood",
    "Starters",
    "Bakery",
    "Cocktails",
    "Drinks",
  ];

  const filtered =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  return (
    <main>
      <PageIntro
        eyebrow="THE ART OF GOOD FOOD"
        title="Our Menu"
        description="An exceptional collection of gourmet creations and signature experiences."
      />

      <section className="section menu-section">
        <div className="menu-heading">
          <span className="eyebrow">CURATED WITH PASSION</span>
          <h2>
            Exceptional Taste. <em>Unforgettable Moments.</em>
          </h2>
          <p>
            From premium cuts and fresh seafood to signature cocktails,
            every creation is an invitation to indulge.
          </p>
        </div>

        <div className="filters">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "filter active" : "filter"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <DishGrid items={filtered} />
      </section>
    </main>
  );
}

function DishDetails() {
  const { id } = useParams();
  const dish = dishes.find((item) => item.id === Number(id));

  if (!dish) {
    return <PageIntro title="Dish not found" />;
  }

  return (
    <main className="section detail-layout">
      <div className="detail-image">
        <img src={dish.image} alt={dish.name} />
      </div>
      <div className="detail-content">
        <span className="eyebrow">{dish.category}</span>
        <h1>{dish.name}</h1>
        <p>{dish.description}</p>
        <h3 className="detail-price">{dish.price} ETB</h3>
        <Link to="/order" className="gold-button">Order This Dish</Link>
        <p className="small-note">
          Please inform our team about any dietary requirements.
        </p>
      </div>
    </main>
  );
}

function About() {
  return (
    <main>
      <PageIntro
        eyebrow="OUR HERITAGE"
        title="A Story Worth Sharing"
        description="Rooted in Ethiopian culture. Inspired by the art of fine dining."
      />
      <section className="section welcome">
        <div className="welcome-image">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000"
            alt="Beautiful restaurant interior"
          />
        </div>
        <div className="welcome-text">
          <span className="eyebrow">OUR PHILOSOPHY</span>
          <h2>Honouring our roots. <em>Creating something special.</em></h2>
          <p>
            At Taste Haven, dining is more than eating. It is culture,
            connection, generosity and the pleasure of sharing.
          </p>
          <p>
            Our vision is to present Ethiopian hospitality in a refined,
            welcoming and memorable setting.
          </p>
        </div>
      </section>
    </main>
  );
}

function Gallery() {
  const photos = [
    "photo-1414235077428-338989a2e8c0",
    "photo-1517248135467-4c7edcad34c4",
    "photo-1547592180-85f173990554",
    "photo-1512621776951-a57141f2eefd",
    "photo-1544025162-d76694265947",
    "photo-1509042239860-f550ce710b93",
  ];

  return (
    <main>
      <PageIntro
        eyebrow="A VISUAL JOURNEY"
        title="The Gallery"
        description="A glimpse into the flavours, atmosphere and details of Taste Haven."
      />
      <section className="section gallery-grid">
        {photos.map((photo, index) => (
          <div className="gallery-item" key={photo}>
            <img
              src={`https://images.unsplash.com/${photo}?w=900`}
              alt={`Taste Haven gallery ${index + 1}`}
            />
          </div>
        ))}
      </section>
    </main>
  );
}

function Reservations() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const message = `Hello Taste Haven! I would like to reserve a table.
Name: ${data.get("name")}
Date: ${data.get("date")}
Time: ${data.get("time")}
Guests: ${data.get("guests")}
Phone: ${data.get("phone")}`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSubmitted(true);
  }

  return (
    <main>
      <PageIntro
        eyebrow="YOUR TABLE AWAITS"
        title="Reserve a Table"
        description="Make your next occasion an unforgettable dining experience."
      />
      <section className="form-section">
        <form className="luxury-form" onSubmit={handleSubmit}>
          <h2>Reservation Details</h2>

          <div className="form-grid">
            <label>
              Your Name
              <input name="name" placeholder="Full name" required />
            </label>

            <label>
              Phone Number
              <input name="phone" placeholder="Phone number" required />
            </label>

            <label>
              Date
              <input name="date" type="date" required />
            </label>

            <label>
              Preferred Time
              <input name="time" type="time" required />
            </label>

            <label className="full-width">
              Number of Guests
              <select name="guests" defaultValue="2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button className="gold-button" type="submit">
            Request Reservation
          </button>

          {submitted && (
            <p className="success-message">
              Your WhatsApp reservation message has been prepared.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

function PrivateDining() {
  return (
    <main>
      <PageIntro
        eyebrow="EXCLUSIVE EXPERIENCES"
        title="Private Dining"
        description="Intimate celebrations and meaningful gatherings deserve an exceptional setting."
      />
      <section className="section welcome">
        <div className="welcome-image">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1000"
            alt="Elegant private dining event"
          />
        </div>
        <div className="welcome-text">
          <span className="eyebrow">MADE FOR YOUR MOMENT</span>
          <h2>Celebrate beautifully.</h2>
          <p>
            From family celebrations to business dinners, let us help you
            create a special experience with thoughtful service and food.
          </p>
          <Link to="/contact" className="gold-button">Enquire With Us</Link>
        </div>
      </section>
    </main>
  );
}

function Order() {
  const [cart, setCart] = useState([]);

  function addToCart(dish) {
    setCart((current) => [...current, dish]);
  }

  const total = cart.reduce((sum, dish) => sum + dish.price, 0);

  function sendOrder() {
    if (!cart.length) return;

    const list = cart
      .map((dish) => `${dish.name} - ${dish.price} ETB`)
      .join("\n");

    const message = `Hello Taste Haven! I would like to order:\n${list}\nTotal: ${total} ETB`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <main>
      <PageIntro
        eyebrow="A LITTLE LUXURY, DELIVERED"
        title="Order Online"
        description="Choose your favourites and prepare your order."
      />

      <section className="section order-layout">
        <div>
          <DishGrid items={dishes} />

          <div className="order-buttons">
            {dishes.map((dish) => (
              <button
                key={dish.id}
                className="outline-button"
                onClick={() => addToCart(dish)}
              >
                Add {dish.name}
              </button>
            ))}
          </div>
        </div>

        <aside className="cart-panel">
          <span className="eyebrow">YOUR SELECTION</span>
          <h2>Your Order</h2>

          {cart.length === 0 ? (
            <p>Your selection is currently empty.</p>
          ) : (
            cart.map((dish, index) => (
              <div className="cart-row" key={`${dish.id}-${index}`}>
                <span>{dish.name}</span>
                <span>{dish.price} ETB</span>
              </div>
            ))
          )}

          <div className="cart-total">
            <strong>Total</strong>
            <strong>{total} ETB</strong>
          </div>

          <button className="gold-button" onClick={sendOrder}>
            Continue on WhatsApp
          </button>
        </aside>
      </section>
    </main>
  );
}

function Contact() {
  return (
    <main>
      <PageIntro
        eyebrow="WE WOULD LOVE TO HEAR FROM YOU"
        title="Get in Touch"
        description="Visit us, make an enquiry or start planning your next occasion."
      />

      <section className="section contact-layout">
        <div>
          <span className="eyebrow">CONTACT DETAILS</span>
          <h2>Let's make it <em>memorable.</em></h2>
          <p>Addis Ababa, Ethiopia</p>
          <p>Phone: Add your restaurant phone number</p>
          <p>Email: Add your restaurant email</p>
          <p>Opening hours: Add your opening hours</p>
        </div>

        <div className="contact-image">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000"
            alt="Restaurant dining atmosphere"
          />
        </div>
      </section>
    </main>
  );
}

function AppLayout() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/dish/:id" element={<DishDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/private-dining" element={<PrivateDining />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
