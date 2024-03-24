/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HomeCard from "../components/Card/HomeCard";
import { RiPhoneFindLine } from "react-icons/ri";
import CateCard from "../components/CateCard";

const RoomHoom = () => {
    const [cart,setCart]=useState([])
    const [loading, setLoading]=useState(false)
    const [params, setParams]=useSearchParams()
    const category = params.get('category')

    useEffect(()=>{
        setLoading(true)
        fetch('information.json')
        .then(res=>res.json())
        .then(data=>{
            if(category){
                const filtered =data.filter(room=>room.category===category)
                setCart(filtered)
              
            }
            else setCart(data)
            setLoading(false)
        })
    },[category])
    if(loading) return <span className="loading loading-bars loading-lg "></span>

    return (
        <div className="container mx-auto">

            
                <CateCard/>
          
             {
                cart && cart.length >0 ? <div className=" ">
               <div className="mt-10 grid gap-4  grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
               {
                  cart?.map(item=><HomeCard key={item.id} item={item}/>)
                }
               </div>
            </div> : 
            <div className="text-center my-20 ">
            
                <RiPhoneFindLine className="text-[300px] text-blue-700 ml-10 md:ml-44 lg:ml-80 xl:ml-[450px] 
            
                "/>
           
                <p className="text-6xl font-bold text-slate-600">No Rooms Here...</p>
            </div>
             }
        </div>
    );
};

export default RoomHoom;