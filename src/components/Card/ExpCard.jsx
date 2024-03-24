/* eslint-disable react/prop-types */


const ExpCard = ({info}) => {
    const {image,title,price,location}=info
    return (
        <div className="card max-w-max ">
  <figure><img className="w-96 h-60 object-cover"  src={image} alt="car!"/></figure>
  <div className="card-body">
    {location}
    <h2 className="card-title font-bold">{title}</h2>
    <p className="text-xl font-semibold">$ {price}/per person</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
    );
};

export default ExpCard;