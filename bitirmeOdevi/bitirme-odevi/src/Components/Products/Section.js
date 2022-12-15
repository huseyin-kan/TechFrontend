import React, { Component } from 'react'
import Filtering from './Filtering'
import Products from './Products'
import { ToastContainer } from 'react-toastify'

export default class Section extends Component {
  render() {
    return (
        
        <div className='text-white container mx-auto  flex flex-row  h-screen shadow-xl pt-16  max-w-full '>
          <ToastContainer position="bottom-right"/>
              <div className=' bg-gray-500/90 p-4 '><Filtering/></div>
              <div className=' bg-gray-600/90  p-4 overflow-auto scrollbar w-full'><Products/></div>
        </div>
      
    )
  }
}
