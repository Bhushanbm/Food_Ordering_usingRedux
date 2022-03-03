import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  
    return (
      <div>
      <div className="header">
                <h1>The Acoustic Thali Hub</h1>
      </div>
      <div>
            <button onClick={() => { navigate("/Menu") }}>Click here to checkout Menu</button>
            </div>
            </div>
  )
}

export default Home