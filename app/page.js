"use client"
// import { Input } from 'postcss'
import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, {title,desc}])
    settitle("");
    setdesc("");   
  };

  const deleteHandler = (i) => {
    let copytext = [...maintask];
    copytext.splice(i,1);
    setmaintask(copytext);
  }

  let renderTask = <h2>No Task Avalable</h2>;

 if(maintask.length>0){
  renderTask = maintask.map((t,i) => {
    return <li key={i} className='flex items-center justify-between mb-8'>
      <div className='flex justify-between w-2/3'>
      <h className="mb-3">{t.title}</h>
      <h6>{t.desc}</h6>
    </div>
    <button onClick={() => {
      deleteHandler(i);
    }}
     className='p-3 text-white text-1xl bg-red-600 rounded'>Delete</button>
    </li>
  })
 }



  return (
   <>
   <h1 className='bg-black text-center p-5 text-white font-bold text-5xl'>My TodoList</h1>

   <form action="" className='items-center flex' onSubmit={submitHandler}>
     
  <input type='text' placeholder='Enter title' className='border-2 p-3 m-3 text-1xl border-black' value={title} onChange={(e) => {
    settitle(e.target.value)
  }}/>
  <input type='text' placeholder='Enter description' className='border-2 p-3 m-3 text-1xl border-black' value={desc} onChange={(e) => {
    setdesc(e.target.value)
  }}/>
  <button className='bg-black text-white px-5 py-3 border-2 hover:cursor-pointer rounded'>Add_Task</button>
</form>

<hr/>
<div className='p-6 bg-slate-300 m-3 ml-3 w-full'>
  {renderTask}
 
</div>


   </>
  )





}

export default page
