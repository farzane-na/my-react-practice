import React,{useState} from 'react'

function HOC(OriginalComponent) {
    function NewComponent(){

        const [isOpenAnswer,setIsOpenAnswer]=useState(null)
    
      const toggleAnswer=(id)=>{
        setIsOpenAnswer((prevId) => (prevId === id ? null : id));
      }
      return (
        <OriginalComponent toggling={toggleAnswer} isOpen={isOpenAnswer} />
      )
    }
  return NewComponent
}

export default HOC