import { FaUsers } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { LuPartyPopper } from "react-icons/lu";
import { FaBanSmoking } from "react-icons/fa6";



const ReviewHouse = () => {
    return (
        <div>
            <p className="text-4xl font-bold">Review house rules</p>

            <p className="text-2xl font-semibold mt-4">3 nights in Dhaka</p>

            <div className="flex gap-6">
            <div className="flex mt-10">
                <div className="bg-gray-800 w-20 h-16 text-center rounded-2xl"><p className="items-center mt-2 text-white font-semibold">APR <br />13</p></div>
                <div className="ml-2 text-xl font-semibold">Monday check-in <br /> After 12.00 PM</div>
            </div>
            <div className="flex mt-10">
                <div className="bg-gray-800 w-20 h-16 text-center rounded-2xl"><p className="items-center mt-2 text-white font-semibold">APR <br />13</p></div>
                <div className="ml-2 text-xl font-semibold">Monday check-in <br /> After 12.00 PM</div>
            </div>
            </div>

            <p className="text-gray-400 text-xl mt-12 ml-6">Self check-in with building stalf</p>

          <div>
            <p className="text-3xl font-bold mt-8 mb-4">Things to keep in mind</p>

            <div className="flex gap-3 text-xl items-center p-3"><FaUsers /><p>Suitable for children and infants</p></div>
            <div className="flex gap-3 text-xl items-center p-3"><MdOutlinePets /> <p>Pets Allowed</p></div>
            <div className="flex gap-3 text-xl items-center p-3"><LuPartyPopper/><p>No party or events</p></div>
            <div className="flex gap-3 text-xl items-center p-3"><FaBanSmoking /><p>No Smoking</p></div>
          </div>
                 
                <div className="mt-10">
                <button className="btn w-full  bg-blue-500 hover:bg-blue-800 text-white font-bold">Agree and Continue</button>
                </div>
          
        </div>
    );
};

export default ReviewHouse;