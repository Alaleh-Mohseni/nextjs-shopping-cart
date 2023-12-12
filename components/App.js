'use client'

import Navbar from './Navbar'
import Footer from './Footer'


function App({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
