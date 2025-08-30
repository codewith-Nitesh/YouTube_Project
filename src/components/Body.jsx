import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex h-[100vh] ">
      <SideBar/>
      <div className='flex-1 overflow-y-auto pb-14'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Body
