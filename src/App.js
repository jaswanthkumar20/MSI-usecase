import React, { useState } from "react";

function App() {
  const products = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
    { id: 3, name: "Product C", price: 15 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🛒 Simple Ecommerce Store</h1>

      <div style={styles.sections}>
        {/* Products */}
        <div style={styles.box}>
          <h2>Products</h2>
          {products.map((product) => (
            <div key={product.id} style={styles.product}>
              <span>
                {product.name} - ${product.price}
              </span>
              <button style={styles.button} onClick={() => addToCart(product)}>
                Add
              </button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div style={styles.box}>
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>No items yet.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} style={styles.cartItem}>
                {item.name} - ${item.price}
                <button
                  style={styles.removeBtn}
                  onClick={() => removeFromCart(index)}
                >
                  X
                </button>
              </div>
            ))
          )}
          <div style={styles.total}>Total: ${total}</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { fontFamily: "Arial, sans-serif", padding: "20px" },
  header: { textAlign: "center", background: "#2c3e50", color: "white", padding: "15px" },
  sections: { display: "flex", gap: "20px", marginTop: "20px" },
  box: { flex: 1, background: "white", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" },
  product: { display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #ddd" },
  button: { padding: "5px 10px", background: "#27ae60", border: "none", color: "white", borderRadius: "5px", cursor: "pointer" },
  removeBtn: { marginLeft: "10px", background: "red", border: "none", color: "white", borderRadius: "5px", cursor: "pointer" },
  cartItem: { display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #ddd" },
  total: { fontWeight: "bold", marginTop: "10px" },
};

export default App;
