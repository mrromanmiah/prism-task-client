import Banner from "../../components/banner/Banner";
import Clients from "../../components/sections/Clients";
import FeatureOne from "../../components/sections/FeatureOne";
import FeatureThree from "../../components/sections/FeatureThree";
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
            <FeatureThree></FeatureThree>
            <Clients></Clients>
        </div>
    );
};

export default Home;