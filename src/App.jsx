import React from 'react'
import SideBar from './Components/SideBar'
import {  Routes ,Route} from 'react-router-dom'
import DeletedTask from './Pages/DeletedTask'
import ImportantTask from './Pages/ImportantTask'
import Home from './Pages/Home'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/deletedTask' element={<DeletedTask/>}/>
      <Route path='/importantTask' element={<ImportantTask/>}/>
    </Routes>
    </>
  )
}
