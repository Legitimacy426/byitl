"use client"

import React, { useState } from 'react'

const Modal = () => {
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')

  const [budget,setBudget] = useState('')
  const [comDate,setcomDate] = useState('')
  const [contacts,setContacts] = useState('')
  const [tag,setTag] = useState([])
  const [documentation,setDocumentation] = useState('false')
const handleChecked = (e)=>{
if(e.target.checked){
setTag([...tag, e.target.value])
}else{
  setTag(tag.filter((item) => item !== e.target.value));
}
}

const handleDoc = (e)=>{
  if(e.target.checked){
  setDocumentation('true')
  }else{
    setDocumentation('false')
  }
  }
  const handleSubmit = ()=>{
    // submit form
    const post = {
      title,
      description,
      budget,
      comDate,
      contacts,
      tag,
      documentation,
      createdAt:new Date()
    }
    console.log(post)
  }

  return (
    <>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Request a project</h3>
  
   <div>
   <div className="form-control">
          <label className="label">
            <span className="label-text">Project title</span>
          </label>
          <input type="email" onChange={(e)=>{setTitle(e.target.value)}} placeholder="eg E-commerce system" className="input input-bordered" required />
        </div>
   <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
<div className='flex justify-between gap-3 flex-wrap'>
  <span className='flex gap-1'><input type="checkbox" className="checkbox"  value={'website'}  onChange = {handleChecked}/>Website </span>
  <span className='flex gap-1'><input type="checkbox" className="checkbox" value={'android'}  onChange = {handleChecked}/>Android </span>
  <span className='flex gap-1'><input type="checkbox" className="checkbox" value={'machine_learning'} onChange = {handleChecked}/>Machine Learning</span>
  <span className='flex gap-1'><input type="checkbox" className="checkbox" value={'iOS'} onChange = {handleChecked}/>iOS </span>
  <span className='flex gap-1'><input type="checkbox" className="checkbox" value={'artificial_intelligence'} onChange = {handleChecked}/>AI </span>
  <span className='flex gap-1'><input type="checkbox" className="checkbox" value={'other'} onChange = {handleChecked}/>Other</span>
  
</div>
        </div>
   <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
         <textarea onChange={(e)=>{setDescription(e.target.value)}}  name="" id="" cols="30" rows="10" placeholder='Write a description' className="input input-bordered" required></textarea>
        </div>
   <div className="form-control">
          <label className="label">
            <span className="label-text">Your budget</span>
          </label>
          <input type="number" onChange={(e)=>{setBudget(e.target.value)}} placeholder="KES " className="input input-bordered" required />

        </div>
   <div className="form-control">
          <label className="label">
            <span className="label-text">Completion Date</span>
          </label>
          <input type="date" onChange={(e)=>{setcomDate(e.target.value)}} placeholder="KES " className="input input-bordered" required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Contacts</span>
          </label>
          <input type="text" onChange={(e)=>{setContacts(e.target.value)}} placeholder="Write your email or phone" className="input input-bordered" required />
        </div>
     
        <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">I also need documentation</span> 
    <input type="checkbox" value={"true"} onChange={handleDoc} className="checkbox checkbox-primary" />
  </label>
</div>
        <button onClick={handleSubmit} className='btn mt-4 bg-blue-800 text-slate-50'>Request</button>
   </div>
  </div>
</dialog>
    </>
  )
}

export default Modal