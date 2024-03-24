/* eslint-disable no-unused-vars */
import { Link, useSearchParams } from "react-router-dom";
import { Categoriess } from "./CategoriesData";
import Categorybox from "./Categorybox";
import { useEffect, useState } from "react";
import SearchForm from "../components/Form/SearchForm";
import ExpCard from "../components/Card/ExpCard";
import HomeCard from "../components/Card/HomeCard";

const Categories = () => {
    const [params, setParams]=useSearchParams()
    const category = params.get('category')
    const [loading,setLoading]= useState(false);
    const [allExp, setAllExp]=useState([])
    const [room, setRoom]=useState([])
  
    useEffect(()=>{
        fetch('ExpInformation.json')
        .then(res=>res.json())
        .then(data=>setAllExp(data))
    },[])
    return (
        <div>
            <div className="pt-4 flex items-center  justify-between overflow-x-auto">
            
            
            {Categoriess?.map((item)=><Categorybox 
            key={item.label} 
            label={item.label} 
            icon={item.icon}
            selected={category===item.label}
            />)}
        </div>


{/* rooms */}
<div className="lg:flex md:flex-row-reverse justify-center gap-10 px-6 md:px-10 lg:px-20">
 <div className="mt-4">
        <SearchForm/>
        </div>
        
       
       <div className="flex-1">
       <div className="flex justify-between mt-4">
           <p className="text-3xl font-bold">Rooms </p>
           <Link to='/room'><p>See All</p></Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-4">
            {
                [...Array(20)].map((item,idx)=><HomeCard
                key={idx}
                />)
            }
            </div>




           <div className="flex justify-between">
           <p className="text-3xl font-bold">Experience </p>
           <Link to='/soon'><p>See All</p></Link>
           </div>
           <div className="grid max-sm:grid-col-1 md:grid-cols-2 lg:grid-cols-2  gap-7 mt-4">
            
            {
                allExp?.slice(0,4).map((info,idx)=>
                <ExpCard
                 info={info}
                key={idx}
                />
            )
            }
            </div>
       </div>
       
</div>


        </div>
    );
};

export default Categories;