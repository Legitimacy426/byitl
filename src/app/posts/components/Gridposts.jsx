import React from "react";
import { FaBeer } from "react-icons/fa";
import {BsFillStarFill} from "react-icons/bs"
const Gridposts = async () => {
const res = await fetch('https://masterminds.kwetunyumbani.online/api/project/show')
const data = await res.json()

const posts = data.project

console.log(data)

  return (
    <main className="p-7">
      <div className="flex justify-between align-base">
        <h1 className="text-3xl font-bold">Browse projects by category</h1>
        <button className="btn rounded-full">VIEW MORE</button>
      </div>
      {/* cards grid */}
      <div className="grid md:grid-cols-3 grid-col-1 gap-4 my-10">
     {posts.map((post)=>(
       
           <div key={post.id} className=" border  p-4 bg-white">
           <FaBeer className="text-2xl " />
           <h1 className="text-xl font-bold py-2">{post.title}</h1>
           <p className="py-2">
           {post.description}
           </p>
           <div className="flex justify-between">
             {/* <span className="badge">
               <small>web</small>
             </span>
             <span className="badge">
               <small>Android</small>
             </span> */}
             <span className="badge">
               <small>{post.category}</small>
             </span>
           </div>
           <div className="flex justify-between  align-bottom mt-4">
             <div className="flex text-yellow-700">
                 <span><BsFillStarFill /></span>
                 <span><BsFillStarFill /></span>
                 <span><BsFillStarFill /></span>
                 <span><BsFillStarFill /></span>
             </div>
             <button className="btn">Read more</button>
           </div>
         </div>
     ))}
      
       
        
        
      </div>
    </main>
  );
};

export default Gridposts;
