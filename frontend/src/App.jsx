import React from 'react'
import Home from './Home/Home'
// import {useForm} from 'react-hook-form';

// import Course from './components/Course'
// import {} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './contact/Contact'

function App() {
  return (
    <>
    
   <div className=' dark:bg-slate-900 dark:text-white'>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
   </div>


    </>
  )
}

export default App