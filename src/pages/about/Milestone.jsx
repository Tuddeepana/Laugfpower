import React from 'react'
import Navigation from '../../utils/Navigation'
import Footer from '../../utils/Footer'

import { Link } from 'react-router-dom'

function Milestone() {
  return (
    
    <div>
        <Navigation/>


        <div class="bg-green-500 h-32 mt-16">
        <ul className="list-none flex space-x-4">
    <li>
        <Link to="/" className="text-white font-bold no-underline">Home /</Link>
    </li>
    <li>
        <h6 className="text-white font-bold mt-1">Milestones</h6>
    </li>
</ul>

<h1 className="text-white font-bold mt-1 text-3xl">Milestones</h1>
</div>


<div className='flex flex-wrap justify-center'>
  <div className='p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4'>
    <div className='bg-lime-300 h-auto p-5'>
      <h1 className='text-lg md:text-xl lg:text-2xl mb-2'>2019</h1>
      <p className='font-semibold text-black text-sm md:text-base lg:text-lg mb-4'>11th JANUARY</p>
      <p className='text-sm md:text-base lg:text-lg'>Rooftop solar power Plant at Laugh Rubber factory, Horana Phase 2</p>
    </div>
  </div>
  <div className='p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4'>
    <div className='bg-lime-300 h-auto p-5'>
      <h1 className='text-lg md:text-xl lg:text-2xl mb-2'>2019</h1>
      <p className='font-semibold text-black text-sm md:text-base lg:text-lg mb-4'>11th JANUARY</p>
      <p className='text-sm md:text-base lg:text-lg'>Rooftop solar power Plant at Laugh Rubber factory, Horana Phase 2</p>
    </div>
  </div>
  <div className='p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4'>
    <div className='bg-lime-300 h-auto p-5'>
      <h1 className='text-lg md:text-xl lg:text-2xl mb-2'>2019</h1>
      <p className='font-semibold text-black text-sm md:text-base lg:text-lg mb-4'>11th JANUARY</p>
      <p className='text-sm md:text-base lg:text-lg'>Rooftop solar power Plant at Laugh Rubber factory, Horana Phase 2</p>
    </div>
  </div>
  <div className='p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4'>
    <div className='bg-lime-300 h-auto p-5'>
      <h1 className='text-lg md:text-xl lg:text-2xl mb-2'>2019</h1>
      <p className='font-semibold text-black text-sm md:text-base lg:text-lg mb-4'>11th JANUARY</p>
      <p className='text-sm md:text-base lg:text-lg'>Rooftop solar power Plant at Laugh Rubber factory, Horana Phase 2</p>
    </div>
  </div>
</div>

        
        
        
        <Footer/></div>
       
  )
}

export default Milestone