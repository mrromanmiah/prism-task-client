import { Chart } from "react-google-charts";

const dataOld = [
    ["Name", "Current Users"],
    ["Developers", 3800],
    ["Corporate Professionals", 4200],
    ["Bankers", 2500],
    ["Entrepreneurs", 3100],
];

const dataNew = [
    ["Name", "Current Users"],
    ["Developers", 5500],
    ["Corporate Professionals", 6100],
    ["Bankers", 3100],
    ["Entrepreneurs", 4500],
];

export const diffdata = {
    old: dataOld,
    new: dataNew,
};

const options = {
    colors: ['#00d9de'],
    legend: 'bottom'
};

const Peoples = () => {
    return (
        <div className="lg:px-40 md:px-20 px-5 flex lg:flex-col md:flex-col flex-col-reverse lg:mt-20 md:mt-20 mt-0">
            <div className="space-y-3 text-center  lg:w-1/2 md:w-1/2 w-auto mx-auto lg:mt-0 md:mt-0 mt-6">
                    <p className="font-bold lg:text-base md:text-sm text-xs text-[#00d9de]">User Base of Our Website</p>
                    <h1 className="lg:text-3xl md:text-xl text-lg font-bold" data-aos="fade-down">Who Benefits from Our Platform</h1>
                    <p className="lg:text-sm md:text-xs text-xs text-gray-600 lg:text-center md:text-center text-justify" data-aos="fade-up">Discover the professionals thriving on our platform—whether you're a developer, corporate professional, banker, or part of any dynamic industry. Uncover success stories and join our community to find where you fit in the ecosystem of benefits our platform offers.</p>
                </div>
            <Chart
                chartType="ColumnChart"
                options={options}
                width="100%"
                height="400px"
                diffdata={diffdata}
            />
        </div>
    );
};

export default Peoples;