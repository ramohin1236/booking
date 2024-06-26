import axiosSecure from ".";

// user save in database
export const saveUser =async (user)=>{
    const currentUser={
        email: user?.email,
        role: 'guest',
        status: 'Verified'
    }
    const {data} = await axiosSecure.put(`/user/${user?.email}`,currentUser)
  console.log("data",data);
    return data;
}

// get token from server
export const getToken = async (email)=>{
    
    const {data} = await axiosSecure.post('/jwt',email)
    console.log("token receive form servre",data);

    return data;
}

// remove token from cookie
export const removeToken = async ()=>{
    
    const {data} = await axiosSecure.get('/logout')
    console.log("token remove from servre",data);

    return data;
}