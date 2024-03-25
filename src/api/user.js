import axiosSecure from ".";


export const hostRequest =async(hostData)=>{
    const {data} = await axiosSecure.put(`/user/${hostData?.email}`,hostData);
  console.log(data);
    return data;
}

// make host
export const makeHost =async(user)=>{
    delete user._id
    const currentUser={
        ...user,
        role: 'host',
       
    }
    const {data} = await axiosSecure.put(`/user/${user?.email}`,currentUser);
   
       console.log(data);
    return data;
}

// get user role
export const getRole =async(email)=>{
    const {data} = await axiosSecure.get(`/user/${email}`);

    return data?.role
}

// get all bookings 
export const getAllBookings = async()=> {
    const { data } = await axiosSecure('/bookings')
    return data
  }

// get all bookings for a guest by email
export const getBookings = async email => {
    const { data } = await axiosSecure(`/bookings?email=${email}`)
    return data
  }

  // get all bookings 
export const getAllUsers = async()=> {
    const { data } = await axiosSecure('/users')
    return data
  }