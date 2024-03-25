import { Link } from "react-router-dom";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";

const Chekoutone = () => {
    let totalNights = 2
  let sub_total = 150
  let total = 200
    return (
        <div className='px-6 py-5   w-full  rounded-md shadow-lg'>
        <div className='flex justify-between'>
         
          <Link
            to='/service-details'
            classNameName='block relative h-28 rounded overflow-hidden w-1/2'
          >
            <img
              alt='e-commerce'
              className='object-cover object-center w-full h-full block'
              src='https://i.ibb.co/YPXktqs/Home1.jpg'
            />
          </Link>
        </div>
        <div className='flex gap-1 mb-2'>
          <FaStar className='h4 w-4 text-green-500' />{' '}
          <span>4.8 (10 reviews)</span>
        </div>
  
        <p>Dates</p>
        <div className='flex justify-between items-center p-2 border mt-1 mb-2'>
          <div>11/06/2022</div>
          <div>
            <FaArrowAltCircleRight className='h5 w-5' />
          </div>
          <div>14/06/2022</div>
        </div>
  
        <div className='flex border-t border-gray-200 py-2'>
          <span className='text-gray-500'>$100 x {totalNights} nights</span>
          <span className='ml-auto text-gray-900'>${sub_total}</span>
        </div>
        <div className='flex border-t border-gray-200 py-2'>
          <span className='text-gray-500'>Cleaning Fee</span>
          <span className='ml-auto text-gray-900'>$10</span>
        </div>
        <div className='flex border-t border-gray-200 py-2'>
          <span className='text-gray-500'>Service Fee</span>
          <span className='ml-auto text-gray-900'>$21</span>
        </div>
        <div className='flex border-t border-b mb-6 border-gray-200 py-2'>
          <span className='text-gray-900 font-bold'>Total</span>
          <span className='ml-auto text-gray-900'>${total}</span>
        </div>
        <div className='mt-6 mb-2'>
           
           {/* <Link to='/chekout'>
           <button
              type='submit'
              className='w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md'
            >
              Reserve
            </button>
           </Link> */}
           
        
          </div>
      </div>
    );
};

export default Chekoutone;