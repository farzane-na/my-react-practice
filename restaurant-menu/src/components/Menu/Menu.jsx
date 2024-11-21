import React,{useState,useEffect} from "react";
import foods from "../../data/data";
import Card from "../Card/Card";
import "./Menu.css";

export default function Menu() {
    const [data,setData]=useState(foods)
    const [menuItem,setMenuItem]=useState([])
    const [activeCategory,setActiveCategory]=useState("all")
    const [filteredFood,setFilteredFood]=useState(foods)
    useEffect(()=>{
        const filteredCategory=[]
        data.forEach(item=>{
            filteredCategory.push(item.category)
        })
        console.log(filteredCategory);
        const setFoodCategory=new Set(filteredCategory)
        setMenuItem(["all",...setFoodCategory])
        console.log(filteredFood);
        
    },[])
    const chnageCategory=(event)=>{
        console.log(event.target.getAttribute("name"));
        setActiveCategory(event.target.getAttribute("name"))
    }
    useEffect(()=>{
        const filterMenu=data.filter(item=>{
            return item.category===activeCategory
        })
        if(activeCategory==="all"){
            setFilteredFood(data)
        }else{
            setFilteredFood(filterMenu)
        }
    },[activeCategory])
  return (
    <div className="menu">
      <ul className="menu-list">
        {
            menuItem.map(item=>{
                return <li key={item} className={`menu-list__item ${activeCategory===item ? "active" : ""}`} name={item} onClick={(event)=>chnageCategory(event)}>{item}</li>
            })
        }
      </ul>
      <div className="card-wrapper">
        {
            filteredFood.map(food=>{
                return <Card key={food.id} {...food} />
            })
        }
      </div>
    </div>
  );
}
