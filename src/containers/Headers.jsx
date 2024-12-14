import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Headers = () => {
  const cartItems = useSelector((state) => state.cart.cart)

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">FakeShop</h2>
        <Link to="/cart" className="relative">
          <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
            Cart ({cartItems.length})
          </button>
        </Link>
      </div>
    </header>
  )
}

export default Headers
