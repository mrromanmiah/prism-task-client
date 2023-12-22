

const Facilities = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-6 lg:mx-20 md:mx-20 mx-5 py-14">
            <div className="feature-card group overflow-hidden hover:scale-105 transition-transform rounded-3xl space-y-3 p-10 items-center text-center mx-auto bg-gray-200 hover:bg-gradient-to-t from-[#0b4a75]  to-[#00d9de] hover:text-white w-60" data-aos="zoom-in">
                <img className="icon-image hover:scale-105 transition-transform flex items-center justify-center mx-auto w-16 h-16" src="https://i.ibb.co/DGQB78b/fac-1.png" alt="" />
                <h3 className="text-lg font-semibold ">Organize</h3>
                <p className="text-xs">Order Your Chaos Beautifully</p>
            </div>
            <div className="feature-card group overflow-hidden hover:scale-105 transition-transform rounded-3xl space-y-3 p-10 items-center text-center mx-auto bg-gray-200 hover:bg-gradient-to-t from-[#0b4a75]  to-[#00d9de] hover:text-white w-60" data-aos="zoom-in">
                <img className="icon-image hover:scale-105 transition-transform flex items-center justify-center mx-auto w-16 h-16" src="https://i.ibb.co/ncvrfQw/fac-2.png" alt="" />
                <h3 className="text-lg font-semibold ">Collaborate</h3>
                <p className="text-xs">Amplify Your Task Success</p>
            </div>
            <div className="feature-card group overflow-hidden hover:scale-105 transition-transform rounded-3xl space-y-3 p-10 items-center text-center mx-auto bg-gray-200 hover:bg-gradient-to-t from-[#0b4a75]  to-[#00d9de] hover:text-white w-60" data-aos="zoom-in">
                <img className="icon-image hover:scale-105 transition-transform flex items-center justify-center mx-auto w-16 h-16" src="https://i.ibb.co/M71f4m5/fac-3.png" alt="" />
                <h3 className="text-lg font-semibold ">Prioritize</h3>
                <p className="text-xs">Focus on What Matters</p>
            </div>
            <div className="feature-card group overflow-hidden hover:scale-105 transition-transform rounded-3xl space-y-3 p-10 items-center text-center mx-auto bg-gray-200 hover:bg-gradient-to-t from-[#0b4a75]  to-[#00d9de] hover:text-white w-60" data-aos="zoom-in">
                <img className="icon-image hover:scale-105 transition-transform flex items-center justify-center mx-auto w-16 h-16" src="https://i.ibb.co/bzdH5VZ/fac-4.png" alt="" />
                <h3 className="text-lg font-semibold ">Streamline</h3>
                <p className="text-xs">Simplify, Boost, Achieve, Excel</p>
            </div>
        </div>
    );
};

export default Facilities;