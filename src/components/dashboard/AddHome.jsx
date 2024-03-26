import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AddServiceForm from "../Form/AddServiceForm";
import { imageUpload } from "../Shared/uplodadImage";
import { format } from "date-fns";
import { addHome } from "../../api/services";
import toast from "react-hot-toast";

const AddHome = () => {
    const { user } = useContext(AuthContext)
  const [arrivalDate, setArrivalDate] = useState(new Date())
  const [departureDate, setDepartureDate] = useState(
    new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000)
  )

  const handleSubmit = event => {
    event.preventDefault()
    const location = event.target.location.value
    const title = event.target.title.value
    const from = format(arrivalDate, 'P')
    const to = format(departureDate, 'P')
    const price = event.target.price.value
    const total_guest = event.target.total_guest.value
    const bedrooms = event.target.bedrooms.value
    const bathrooms = event.target.bathrooms.value
    const description = event.target.description.value
    const image = event.target.image.files[0]
    imageUpload(image)
      .then(data => {
        const homeData = {
          location,
          title,
          from,
          to,
          price,
          total_guest,
          bedrooms,
          bathrooms,
          description,
          image: data,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
        }
        console.log(homeData);

        addHome(homeData).then(data => {
            toast.success("Home added successfully!!")
          console.log(data)
        })
      })
      .catch(err => console.log(err))
  }


    return (
        <>
        <h1 className='text-3xl font-bold text-gray-800 py-8 text-center'>
          Add Home
        </h1>
        <AddServiceForm
          handleSubmit={handleSubmit}
          arrivalDate={arrivalDate}
          setArrivalDate={setArrivalDate}
          departureDate={departureDate}
          setDepartureDate={setDepartureDate}
        />
      </>
    );
};

export default AddHome;