import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
    return (
        <>
        <header>
              <Header/>
        </header>
           <Outlet />
        <footer>
              <Footer/>
        </footer>
        </>
  )
}
