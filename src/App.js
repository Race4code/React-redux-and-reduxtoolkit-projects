import React from 'react'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './components/Navbar'
import './App.css'
import store from './store/Store.js'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
       <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App