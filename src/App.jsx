import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Headers from './containers/Headers'
import ProductDetails from './containers/ProductDetials'
import ProductListing from './containers/ProductListing'

const App = () => {
  return (
    <Router>
      <div>
        <Headers />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* <Route path="/product/:productId" element={<ProductDetails />} /> */}
          <Route>404 Not Found!</Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App