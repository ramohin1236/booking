import axiosSecure from ".";

export const addHome = async(homeData)=>{
    const {data} = await axiosSecure.post('/homes',homeData);

    return data;
}