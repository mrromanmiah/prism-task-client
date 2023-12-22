import Banner from "../../components/banner/Banner";
import FeatureOne from "../../components/sections/FeatureOne";
import FeatureTwo from "../../components/sections/FeatureTwo";
import Peoples from "../../components/sections/Peoples";
import Testimonial from "../../components/sections/Testimonial";
import Facilities from "../../components/sections/facilities";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facilities></Facilities>
            <FeatureOne></FeatureOne>
            <Peoples></Peoples>
            <FeatureTwo></FeatureTwo>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;