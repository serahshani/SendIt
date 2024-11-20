import React, { useState } from "react";


const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError(""); // Reset error
      const response = await fetch(`http://localhost:5000/api/products?search=${searchQuery}`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError("Failed to fetch products. Please try again.");
    }
  };

  return (
    <div className="home">
      <div className="search-section">
        <input
          type="text"
          placeholder="search for your product"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="product-section">
        {error && <p className="error">{error}</p>}
        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-product">No products available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
