import React,{useState} from 'react'

function HOC(OriginalComponent) {
    function NewComponent(props){

        const [isOpenAnswer,setIsOpenAnswer]=useState(false)
    
      const toggleAnswer=(id)=>{
        setIsOpenAnswer(prevShow=>!prevShow);
      }
      return (
        <OriginalComponent toggling={toggleAnswer} isOpen={isOpenAnswer} {...props} />
      )
    }
  return NewComponent;
}

export default HOC;