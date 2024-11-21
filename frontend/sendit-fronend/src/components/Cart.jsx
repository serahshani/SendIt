import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Trash2 } from 'lucide-react'

function Cart () {
  const navigate = useNavigate() // React Router's navigate hook
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 129.99,
      quantity: 1,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      quantity: 1,
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Laptop Sleeve',
      price: 29.99,
      quantity: 2,
      image: '/api/placeholder/80/80'
    }
  ])

  const removeItem = id => {
    setItems(items.filter(item => item.id !== id))
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setItems(
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const tax = subtotal * 0.08
  const total = subtotal + tax

  const handleCreateOrder = () => {
    // Navigate to CreateOrder page
    navigate('/create-order')
  }

  return (
    <div className='max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-6'>Shopping Cart</h2>

      {items.length === 0 ? (
        <p className='text-gray-500 text-center py-8'>Your cart is empty</p>
      ) : (
        <>
          <div className='space-y-4'>
            {items.map(item => (
              <div
                key={item.id}
                className='flex items-center p-4 border rounded-lg'
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-20 h-20 object-cover rounded'
                />
                <div className='ml-4 flex-grow'>
                  <h3 className='font-semibold'>{item.name}</h3>
                  <p className='text-gray-600'>${item.price.toFixed(2)}</p>
                  <div className='flex items-center mt-2'>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className='px-2 py-1 bg-gray-100 rounded'
                    >
                      -
                    </button>
                    <span className='mx-3'>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className='px-2 py-1 bg-gray-100 rounded'
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <p className='font-semibold'>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className='text-red-500 hover:text-red-700'
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-8 border-t pt-4'>
            <div className='space-y-2'>
              <div className='flex justify-between'>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className='flex justify-between'>
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className='flex justify-between font-bold text-lg'>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleCreateOrder} // Call navigate on button click
              className='w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors'
            >
              Create Order
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
