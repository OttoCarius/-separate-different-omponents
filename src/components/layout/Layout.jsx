import React from 'react'
import { Outlet } from 'react-router-dom';
import Category from '../category/Category'

function Layout() {
  return (
    <div>
        <Category/>
        <main><Outlet/></main>
    </div>
  )
}

export default Layout
