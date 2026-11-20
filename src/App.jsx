import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Classic Handbag",
    category: "Bags",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    description: "A beautiful handbag for everyday use.",
  },
  {
    id: 2,
    name: "Luxury Black Bag",
    category: "Bags",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description: "A stylish bag for special occasions.",
  },
  {
    id: 3,
    name: "Golden Watch",
    category: "Watches",
    price: 30000,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "An elegant watch for every occasion.",
  },
  {
    id: 4,
    name: "Silver Watch",
    category: "Watches",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
    description: "A simple and modern wristwatch.",
  },
  {
    id: 5,
    name: "White T-Shirt",
    category: "T-Shirts",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    description: "A comfortable T-shirt for daily wear.",
  },
  {
    id: 6,
    name: "Fashion T-Shirt",
    category: "T-Shirts",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    description: "A fashionable T-shirt for everyday style.",
  },
];

const whatsappNumber = "250780983336";
const email = "joseegisubizo3@gmail.com";

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(0);
  const [page, setPage] = useState("Home");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  function addToCart() {
    setCart((previousCart) => previousCart + 1);
    alert("Product added to cart!");
  }

  function orderOnWhatsApp(product) {
    const message = encodeURIComponent(
      `Hello JOSEE FASHION STORE! I want to order ${product.name}. Price: ${product.price.toLocaleString()} RWF.`,
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  }

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <h2 className="logo">
          JOSEE <span>FASHION</span>
        </h2>

        <nav>
          <button onClick={() => setPage("Home")}>Home</button>
          <button onClick={() => setPage("About")}>About</button>
          <button onClick={() => setPage("Contact")}>Contact</button>
        </nav>

        <div className="cart">🛒 Cart ({cart})</div>
      </header>

      {/* HOME PAGE */}
      {page === "Home" && (
        <>
          <section className="hero">
            <p className="welcome">WELCOME TO JOSEE FASHION STORE</p>

            <h1>
              Fashion That Makes You <span>Beautiful</span>
            </h1>

            <p>
              Discover beautiful bags, watches and T-shirts at affordable
              prices.
            </p>

            <button
              className="shop-button"
              onClick={() =>
                document.getElementById("products").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Shop Now
            </button>
          </section>

          {/* PRODUCTS */}
          <section className="products-section" id="products">
            <h2>Our Products</h2>

            <p className="subtitle">Find your favorite fashion products.</p>

            <input
              className="search"
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* CATEGORY FILTERS */}
            <div className="filters">
              {["All", "Bags", "Watches", "T-Shirts"].map((item) => (
                <button
                  key={item}
                  className={category === item ? "active" : ""}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* PRODUCT CARDS */}
            <div className="product-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div className="product-card" key={product.id}>
                    <div className="product-image">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                      />
                    </div>

                    <div className="product-info">
                      <p className="category">{product.category}</p>

                      <h3>{product.name}</h3>

                      <p className="description">{product.description}</p>

                      <h3 className="price">
                        {product.price.toLocaleString()} RWF
                      </h3>

                      <button className="add-button" onClick={addToCart}>
                        Add to Cart
                      </button>

                      <button
                        className="whatsapp-button"
                        onClick={() => orderOnWhatsApp(product)}
                      >
                        Order on WhatsApp
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-products">No products found.</p>
              )}
            </div>
          </section>
        </>
      )}

      {/* ABOUT PAGE */}
      {page === "About" && (
        <section className="content-page">
          <h1>About JOSEE FASHION STORE</h1>

          <p>
            JOSEE FASHION STORE is an online fashion shop offering beautiful and
            affordable fashion products.
          </p>

          <p>
            We sell bags, watches and T-shirts for customers who want to look
            stylish and confident.
          </p>

          <h2>Our Mission</h2>

          <p>
            Our mission is to provide fashionable products at affordable prices
            and make shopping easy.
          </p>

          <h2>Store Owner</h2>

          <p>
            <strong>Name:</strong> GISUBIZO Josee
          </p>

          <p>
            <strong>Location:</strong> Gisozi, Gasabo, Kigali, Rwanda
          </p>

          <p>
            <strong>Email:</strong> {email}
          </p>
        </section>
      )}

      {/* CONTACT PAGE */}
      {page === "Contact" && (
        <section className="content-page">
          <h1>Contact Us</h1>

          <p>
            Do you have questions or want to order our products? Contact us
            today.
          </p>

          <div className="contact-card">
            <h2>GISUBIZO Josee</h2>

            <p>
              <strong>Email:</strong> {email}
            </p>

            <p>
              <strong>Phone:</strong> +250 780 983 336
            </p>

            <p>
              <strong>Location:</strong> Gisozi, Gasabo, Kigali, Rwanda
            </p>

            <a
              className="whatsapp-button contact-whatsapp"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>

            <a className="email-button" href={`mailto:${email}`}>
              Send Email
            </a>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <h2>JOSEE FASHION STORE</h2>

        <p>Bags | Watches | T-Shirts</p>

        <p>Created by GISUBIZO Josee</p>

        <p>© 2026 All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
