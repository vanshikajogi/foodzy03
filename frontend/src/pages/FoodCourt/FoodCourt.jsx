import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./FoodCourt.css";

// 🔹 Malls, outlets, and menus
const mallsData = [
  {
    id: 1,
    name: "Phoenix Mall",
    image: "/assets/phoenix.jpeg",
    outlets: [
      {
        name: "McDonald's",
        image: "/assets/mcdonalds.jpeg",
        menu: [
          { _id: "mcchicken", name: "McChicken", price: 120, image: "/assets/mcchicken.jpeg" },
          { _id: "bigmac", name: "Big Mac", price: 150, image: "/assets/bigmac.jpeg" },
          { _id: "fries", name: "French Fries", price: 80, image: "/assets/fries.jpeg" },
        ],
      },
      {
        name: "KFC",
        image: "/assets/kfc.jpeg",
        menu: [
          { _id: "bucket", name: "Chicken Bucket", price: 350, image: "/assets/bucket.jpeg" },
          { _id: "zinger", name: "Zinger Burger", price: 170, image: "/assets/zinger.jpeg" },
          { _id: "wings", name: "Hot Wings", price: 200, image: "/assets/wings.jpeg" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Orion Mall",
    image: "/assets/orion.jpeg",
    outlets: [
      {
        name: "Domino's Pizza",
        image: "/assets/dominos.jpeg",
        menu: [
          { _id: "margherita", name: "Margherita", price: 180, image: "/assets/margherita.jpeg" },
          { _id: "pepperoni", name: "Pepperoni", price: 220, image: "/assets/pepperoni.jpeg" },
        ],
      },
      {
        name: "Burger King",
        image: "/assets/burgerking.jpeg",
        menu: [
          { _id: "whopper", name: "Whopper", price: 200, image: "/assets/whopper.jpeg" },
          { _id: "vegburger", name: "Veg Burger", price: 120, image: "/assets/vegburger.jpeg" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Nexus Mall",
    image: "/assets/nexus.jpeg",
    outlets: [
      {
        name: "Subway",
        image: "/assets/subway.jpeg",
        menu: [
          { _id: "submarine", name: "Submarine", price: 190, image: "/assets/submarine.jpeg" },
          { _id: "wrap", name: "Chicken Wrap", price: 210, image: "/assets/wrap.jpeg" },
        ],
      },
      {
        name: "Starbucks",
        image: "/assets/starbucks.jpeg",
        menu: [
          { _id: "latte", name: "Caffe Latte", price: 250, image: "/assets/latte.jpeg" },
          { _id: "cappuccino", name: "Cappuccino", price: 230, image: "/assets/cappuccino.jpeg" },
        ],
      },
    ],
  },
];

const FoodCourt = () => {
  const [selectedMall, setSelectedMall] = useState(null);
  const [selectedOutlet, setSelectedOutlet] = useState(null);
  const [cartPreview, setCartPreview] = useState([]); // Preview before final cart
  const { addToCart } = useContext(StoreContext);

  
  // 🔹 Add item to preview cart before final confirmation
  const handleAddToCartPreview = (item) => {
    setCartPreview([...cartPreview, item]);
  };

  // 🔹 Confirm and add to main cart
  const confirmAddToCart = () => {
    cartPreview.forEach((item) => addToCart(item._id));
    setCartPreview([]); // Clear preview after adding to cart
  };

  return (
    <div className="food-court">
      <h2>Choose a Mall</h2>

      {/* 🔹 Display Malls */}
      {!selectedMall && (
        <div className="mall-list">
          {mallsData.map((mall) => (
            <div key={mall.id} className="mall-card" onClick={() => setSelectedMall(mall)}>
              <img src={mall.image} alt={mall.name} className="mall-image" />
              <h3>{mall.name}</h3>
            </div>
          ))}
        </div>
      )}

      {/* 🔹 Display Outlets */}
      {selectedMall && !selectedOutlet && (
        <div className="outlet-section">
          <h3>Food Outlets in {selectedMall.name}</h3>
          <div className="outlet-list">
            {selectedMall.outlets.map((outlet, index) => (
              <div key={index} className="outlet-card" onClick={() => setSelectedOutlet(outlet)}>
                <img src={outlet.image} alt={outlet.name} className="outlet-image" />
                <h4>{outlet.name}</h4>
              </div>
            ))}
          </div>
          <button className="back-btn" onClick={() => setSelectedMall(null)}>⬅ Back</button>
        </div>
      )}

      {/* 🔹 Display Menu and Add to Cart Preview */}
      {selectedOutlet && (
        <div className="menu-section">
          <h3>{selectedOutlet.name} Menu</h3>
          <div className="menu-list">
            {selectedOutlet.menu.map((item) => (
              <div key={item._id} className="menu-card">
                <img src={item.image} alt={item.name} className="menu-image" />
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <button onClick={() => handleAddToCartPreview(item)}>Add to Cart</button>
              </div>
            ))}
          </div>
          <button className="back-btn" onClick={() => setSelectedOutlet(null)}>⬅ Back</button>
        </div>
      )}

      {/* 🔹 Cart Preview Confirmation */}
      {cartPreview.length > 0 && (
        <div className="cart-preview">
          <h3>Review Your Selection</h3>
          <ul>
            {cartPreview.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <button onClick={confirmAddToCart}>Confirm & Add to Cart</button>
          <button onClick={() => setCartPreview([])}>Cancel</button>
        </div>
      )}

      {/* 🔹 Global Cart Button */}
      <div className="cart-section">
        <Link to="/cart" className="cart-btn">Go to Cart</Link>
      </div>
    </div>
  );
};

export default FoodCourt;
