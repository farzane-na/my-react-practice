import React ,{useState,useContext} from "react";
import BlogContext from "../../context/BlogContext";
import {Link} from 'react-router-dom'
 export default function BlogPage(){
    const AllDataContext=useContext(BlogContext)

  return (
      <div className={"blog my-7"}>
        <div className={"wrapper"}>
            <h2 className={"mb-5"}>وبلاگ</h2>
         <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3"}>
          {
              AllDataContext?.map((blog)=>{
               return (
                   <div className={"relative border border-gray-200 rounded-xl p-2 flex flex-col gap-2"}>
                       <Link to={`/blog/${blog.id}`} className={"absolute w-full h-full inset-0"}></Link>
                       <img src={blog.image} className={"w-full rounded"} />
                       <h2 className={"line-clamp-2"}>
                           {blog.title}
                       </h2>
                   </div>
               );
           })
          }
         </div>
        </div>
      </div>
  )
 }