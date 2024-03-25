import { Tab } from '@headlessui/react'
import Chekoutone from './Chekoutone';
import ReviewHouse from '../ReviewHouse';
import WhosComing from './WhosComing';
import { useContext, useState } from 'react';
import Payment from './Payment';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { saveBooking } from '../../api/bookings';
import toast from 'react-hot-toast';

const ChekOut = () => {
    const [selectedIndex,setSelectedIndex]=useState(0)
    const { user } = useContext(AuthContext)
    const homeData = {
      _id: '60ehjhedhjdj3434',
      location: 'Dhaka, Bangladesh',
      title: 'Huge Apartment with 4 bedrooms',
      image: 'https://i.ibb.co/YPXktqs/Home1.jpg',
      from: '17/11/2022',
      to: '21/11/2022',
      host: {
        name: 'John Doe',
        image: 'https://i.ibb.co/6JM5VJF/photo-1633332755192-727a05c4013d.jpg',
        email: 'johndoe@gmail.com',
      },
      price: 98,
      total_guest: 4,
      bedrooms: 2,
      bathrooms: 2,
      ratings: 4.8,
      reviews: 64,
    }
    const [bookingData, setBookingData]=useState({
        homeId: homeData?._id,
        hostEmail:homeData?.host?.email,
        message:"",
        totalPrice: parseFloat(homeData?.price )+31,
        guestEmail: user?.email,
    })
   

    const handleBooking=async()=>{
       
        try{
         await saveBooking(bookingData)
    
         console.log(bookingData);
            toast.success("Room booked successfully") 
        }
        catch(err){
            console.log(err)
            toast.error(err.message)  
        }
       
    }
    return (
        <div className='container mx-auto'>
         <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row">
    <div className=''><Chekoutone/></div>

    <div className='mt-4 ml-6'>
        <Tab.Group>
            <Tab.List className="flex flex-wrap">
                <div className='flex'>
                    <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <Tab as="Fragment">
  {({ selected }) => (
    <button className={selected ? "text-blue-500" : "text-gray-600"}>
     Reviews houser role!
    </button>
  )}
</Tab>
                </div>
                <div className='flex'>
                    <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <Tab as="Fragment">
  {({ selected }) => (
    <button className={selected ? "text-blue-500" : "text-gray-600"}>
     Who are you?
    </button>
  )}
</Tab>
                </div>
                <div className='flex'>
                    <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <Tab as="Fragment">
  {({ selected }) => (
    <button className={selected ? "text-blue-500" : "text-gray-600"}>
     Payment
    </button>
  )}
</Tab>
                </div>
            </Tab.List>
            <Tab.Panels className='ml-6 mt-8'>
                <Tab.Panel>
                    <ReviewHouse/>
                </Tab.Panel>
                <Tab.Panel>
                
                    <WhosComing
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                     host={homeData?.host}
                    setSelectedIndex={setSelectedIndex}
                    />
                </Tab.Panel>
                <Tab.Panel>
                    <Payment handleBooking={handleBooking}/>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    </div>
</div>

        </div>
    );
};

export default ChekOut;