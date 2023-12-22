import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="-mt-24 flex items-center">
            <div className="bg-[url(https://i.ibb.co/VjShMvB/banner-bg.jpg)] bg-cover lg:h-screen md:h-full h-full flex justify-center">
            <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between items-center mx-auto lg:px-40 md:px-20 px-5 lg:gap-20 md:gap-20 gap-8 pt-10 lg:my-0 md:my-16 my-14">
                <div className="lg:w-1/2 md:w-1/2 w-full space-y-3 lg:text-left md:text-left text-center">
                    <h1 className="lg:text-4xl md:text-2xl text-xl font-bold" data-aos="fade-down">Your Ultimate Task Companion</h1>
                    <p className="lg:text-sm md:text-xs text-xs text-gray-600 text-justify" data-aos="fade-up">Elevate your productivity with TaskFlow, the ultimate task management website. Seamlessly organize, collaborate, and conquer your tasks with ease. Experience efficiency like never before – PrismTask, where success flows effortlessly.</p>
                    <Link to='/login'><button className='bg-gradient-to-t from-[#0b4a75] to-[#00d9de] text-sm text-white font-bold px-3 py-2 rounded-md hover:bg-gradient-to-t hover:from-[#00d9de] hover:to-[#0b4a75] hover:text-white mt-5' data-aos="zoom-in">Explore Now</button></Link>
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-2/3" data-aos="zoom-in">
                    <img src="https://i.ibb.co/ySxgXL3/banner.png" alt="" />
                </div>
            </div>

        </div>
        </div>
    );
};

export default Banner;