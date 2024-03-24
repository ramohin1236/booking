/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import { Categoriess } from "../Category/CategoriesData";
import Categorybox from "../Category/Categorybox";


const CateCard = () => {
    const [params, setParams]=useSearchParams()
    const category = params.get('category')
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
        </div>
    );
};

export default CateCard;