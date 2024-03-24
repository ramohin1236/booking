import Categories from "../../Category/Categories";
import Hero from "../../components/Shared/Hero";


const Home = () => {
    return (
        <div>
            <Hero/>
           <div className="container mx-auto mt-12" >
             
           <Categories/>
           </div>
        </div>
    );
};

export default Home;