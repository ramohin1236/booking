import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";



const SearchForm = () => {
    
    const [location, setLocation]=useState("Dhaka");
    const [arrivalDate, setArrivalDate]=useState(new Date());
    const [depatureDate, setDepatureDate]=useState(new Date(arrivalDate.getTime()+ 24*60*60*1000));
    
const navigate =useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault();
      const query ={
        location: location,
        form: arrivalDate,
        to: depatureDate
      }
      console.log(query);
      navigate('/service-result',{state:query})
    }

    return (
        <div className='w-full max-w-sm p-6 m-auto mx-auto'>
      <h1 className='text-2xl font-bold text-gray-700'>
        Where do you want to go
      </h1>

      <form 
      onSubmit={handleSubmit}
      className='mt-6'>
        <div className='shadow-md rounded-md my-2 p-3'>
          <label
            htmlFor='location'
            className='block text-md font-bold text-gray-800'
          >
            Location
          </label>
          <input
          onChange={(e)=>setLocation(e.target.value)}
          value={location} 
          type='text'
            name='location'
            
            required
            placeholder='Add city, Landmark or address'
            className='block w-full mt-1 p-1 text-gray-700 bg-white   focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40'
          />
        </div>

        <div className='flex justify-between'>
          <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
            <div>
              <p className='block text-sm text-gray-500'>Arrival</p>
              <ReactDatePicker 
              onChange={(date)=>setArrivalDate(date)}
              selected={arrivalDate} className='w-2/3' />
            </div>

            <SlCalender className='h5 w-5' />
          </div>
          <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
            <div>
              <p className='block text-sm text-gray-500'>Departure</p>
              <ReactDatePicker
              onChange={(date)=>setDepatureDate(date)}
              selected={depatureDate} className='w-2/3' />
            </div>
           
            <SlCalender className='h5 w-5' />
          </div>
        </div>

        <div className='mt-6'>
         
         <button
            type='submit'
            className='w-full px-4 py-2 bg-blue-500 text-white rounded-md'
          >
            Search
          </button>
       
        </div>
      </form>
    </div>
    );
};

export default SearchForm;