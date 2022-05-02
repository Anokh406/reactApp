import React from 'react'
import { render } from "react-dom";
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Nested from './Nested';

export default function RouterConfiguration() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
          <Route path='hello' element={<h1>Hello anokh <Outlet /> </h1>} >
              <Route path=':id' element={<Nested />} />
          </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
