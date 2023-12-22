

const FeatureOne = () => {
    return (
        <div className="flex items-center">
            <div className="h-full flex justify-center">
            <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center mx-auto lg:px-40 md:px-20 px-5 lg:gap-20 md:gap-20 gap-8 lg:pt-10 md:pt-5 pt-0 lg:my-0">
                
                <div className="lg:w-1/2 md:w-1/2 w-2/3" data-aos="zoom-in">
                    <img src="https://i.ibb.co/4tQvJsS/feat-1.png" alt="" />
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full space-y-3 lg:text-left md:text-left text-center">
                    <p className="font-bold lg:text-base md:text-sm text-xs text-[#00d9de]">Professional Task Master</p>
                    <h1 className="lg:text-4xl md:text-2xl text-xl font-bold" data-aos="fade-down">Master Your Workflow with Intuitive Task Management</h1>
                    <p className="lg:text-sm md:text-xs text-xs text-gray-600 text-justify" data-aos="fade-up"><b>PrismTask</b> is more than a task management tool; it's a productivity companion designed to elevate your work game. With an intuitive interface, smart automation, and insightful analytics, managing your tasks has never been this efficient. From solo projects to team collaborations, TaskMaster Pro is your key to mastering productivity.</p>
                </div>
            </div>

        </div>
        </div>
    );
};

export default FeatureOne;