import React from 'react'
import Header from './components/Header.js'
import Productos from './components/Productos.js'
import NuevoProducto from './components/NuevoProducto.js'
import EditarProducto from './components/EditarProducto.js'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import {Provider} from 'react-redux'
import store from './store.js'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Provider store={store}>
          <Header/>
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<Productos/>}/>
              <Route path="productos/nuevo" element={<NuevoProducto/>}/>
              <Route path="productos/editar/:id" element={<EditarProducto/>}/>
            </Routes>
          </div>
        </Provider>
      </Router>
    </React.Fragment>
  )
}

export default App;
