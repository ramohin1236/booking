

const Hero = () => {
    return (
        <div className="hero min-h-96 relative" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-blue-700 opacity-85 absolute inset-0"></div>
  <div className="hero-content  text-neutral-content relative z-10">
    <div className="max-sm:max-w-md ">
      <h1 className="mb-5 text-5xl font-bold ">Hotels in Bangladesh</h1>
      <p className="mb-5 ">Enter your dates and choose from 618 hotels and other places to stay!</p>
     
    </div>
  </div>
</div>
    );
};

export default Hero;