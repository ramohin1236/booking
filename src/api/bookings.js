import axiosSecure from "."

// save bookings
export const saveBooking = async(bookingData)=>{
    const {data} = await axiosSecure.post('/bookings',bookingData);

    return data;
}

// get all bookings for a user
export const getAllBookings =async(email)=>{
    const {data} = await axiosSecure.get(`/bookings?email=${email}`);

    return data;
}

// get all bookings for admin
export const getAllBookingsforAdmin =async()=>{
    const {data} = await axiosSecure.get('/bookings');

    return data;
}

// cancel a booking