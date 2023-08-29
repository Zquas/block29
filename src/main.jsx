import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<AllPlayers/>} />
          <Route path='/players/:id' element={<SinglePlayer />}/>
      </Routes>
  </BrowserRouter>
)