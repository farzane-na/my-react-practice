import React,{useState,useEffect} from "react";
import foods from "../../data/data";
import Card from "../Card/Card";
import "./Menu.css";

export default function Menu() {
    const [data,setData]=useState(foods)
    const [menuItem,setMenuItem]=useState([])
    useEffect(()=>{
        const filteredCategory=[]
        data.forEach(item=>{
            filteredCategory.push(item.category)
        })
        console.log(filteredCategory);
        const setFoodCategory=new Set(filteredCategory)
        setMenuItem([...setFoodCategory])
    },[])
    
  return (
    <div className="menu">
      <ul className="menu-list">
      <li className="menu-list__item active">all</li>
        {
            menuItem.map(item=>{
                return <li key={item} className="menu-list__item">{item}</li>
            })
        }
      </ul>
      <div className="card-wrapper">
        {
            data.map(food=>{
                return <Card key={food.id} {...food} />
            })
        }
      </div>
    </div>
  );
}
