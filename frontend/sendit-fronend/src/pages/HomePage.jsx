import React, { useState, useEffect } from 'react'

const HomePage = () => {
  const [products, setProducts] = useState([])

  
  useEffect(() => {
    
    fetch('http://localhost:5000/api/products?search=${searchQuery')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error))
  }, [])

  return (
    <div>
      <h1>Product List</h1>
      <div className='product-grid'>
        {products.map(product => (
          <div key={product.id} className='product-card'>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
