import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import MyTable from './components/MyTable';
import MyFooter from './components/MyFooter';
import Main from './components/Main';
import MyCard from './components/MyCard';
import './App.css';



export default function App() {

  return (
      <div>
        <BrowserRouter>
        <MyNavbar/>
        <Routes>

          <Route path='/' element={<Main/>}> </Route>
          <Route path='/mytable' element={<MyTable/>}> </Route>
          <Route path='/mycard' element={<MyCard/>}> </Route>
        
        </Routes>
        
        <MyFooter/>
        </BrowserRouter>
        
      </div>
  );
}








