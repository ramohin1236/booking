import axiosSecure from ".";


export const hostRequest =async(hostData)=>{
    const {data} = await axiosSecure.put(`/user/${hostData.email}`,{hostData});
  console.log(data);
    return data;
}


// get user role
export const getRole =async(email)=>{
    const {data} = await axiosSecure.get(`/user/${email}`);

    return data?.hostData?.role
}