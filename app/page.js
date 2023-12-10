"use client"
// import { Input } from 'postcss'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  return (
   <>
   <h1 className='bg-black text-center p-5 text-white font-bold text-5xl'>My TodoList</h1>

   <form action="" className='items-center flex'>
     
  <input type='text' placeholder='Enter title' className='border-2 p-3 m-3 text-1xl border-black' value={title} onChange={(e) => {
    settitle(e.target.value)
  }}/>
  <input type='text' placeholder='Enter description' className='border-2 p-3 m-3 text-1xl border-black' value={desc} onChange={(e) => {
    setdesc(e.target.value)
  }}/>
  <button className='bg-black text-white px-5 py-3 border-2 hover:cursor-pointer rounded'>Add_Task</button>
</form>


   </>
  )
}

export default page
