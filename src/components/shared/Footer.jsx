import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="divide-y bg-[#031928] text-white">
            <div className="lg:px-20 md:px-10 px-5 container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a href="/" className="flex items-center">
                        <img src="https://i.ibb.co/nRsCMpN/prism-Task-Logo.png" className="h-12 mr-3" alt="EdenEnclave Logo" />
                        <div>
                            <h1 className="self-center text-2xl font-semibold whitespace-nowrap"><span className='text-[#00d9de]'>Prism</span>Task</h1>
                            
                        </div>
                    </a>
                    <p className="text-xs font-light mt-4 lg:w-64">Boost productivity effortlessly. Streamline tasks and collaborate seamlessly with our intuitive task management platform.</p>
                    <h3 className="mt-4 mb-2 font-semibold text-[#00d9de]">Social Media</h3>
                    <div className="flex gap-2">
                        <a className="rounded-full bg-[#00d9de] text-[#0b4a75] p-2 hover:bg-white hover:text-[#0b4a75] text-xs" href="https://www.facebook.com/sakirroman" target="_blank" rel="noreferrer"><FaFacebookF></FaFacebookF></a>
                        <a className="rounded-full bg-[#00d9de] text-[#0b4a75] p-2 hover:bg-white hover:text-[#0b4a75] text-xs" href="https://www.instagram.com/sakirroman" target="_blank" rel="noreferrer"><FaInstagram></FaInstagram></a>
                        <a className="rounded-full bg-[#00d9de] text-[#0b4a75] p-2 hover:bg-white hover:text-[#0b4a75] text-xs" href="https://twitter.com/mrromanmiah" target="_blank" rel="noreferrer"><FaXTwitter></FaXTwitter></a>
                        <a className="rounded-full bg-[#00d9de] text-[#0b4a75] p-2 hover:bg-white hover:text-[#0b4a75] text-xs" href="https://www.linkedin.com/in/romanmiah/" target="_blank" rel="noreferrer"><FaLinkedinIn></FaLinkedinIn></a>
                        
                    </div>
                </div>


                <div className="grid lg:grid-cols-4 md:grid-cols-4 text-sm gap-x-3 gap-y-8 lg:w-2/3 grid-cols-2">
                    <div className="space-y-3">
                        <h3 className="font-semibold text-[#00d9de]">About Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a className="text-xs hover:text-[#00d9de]" rel="noopener noreferrer" href="#">About Us</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#00d9de]" rel="noopener noreferrer" href="#">Our Team</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#00d9de]" rel="noopener noreferrer" href="#">Pricing Plan</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-[#00d9de]">Useful Information</h3>
                        <ul className="space-y-1">
                            <li>
                                <a className="text-xs hover:text-[#00d9de]" rel="noopener noreferrer" href="#">Contact Us</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#00d9de]" rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#00d9de]" rel="noopener noreferrer" href="#">Cost Calculator</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-[#00d9de]">Additional Links</h3>
                        <ul className="space-y-1">
                            <li>
                                <a className="text-xs hover:text-[#00d9de]" rel="noopener noreferrer" href="#">Services</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#00d9de]" rel="noopener noreferrer" href="#">Statistics</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#00d9de]" rel="noopener noreferrer" href="#">Tutorial</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-6">

                        <div className="flex flex-col justify-start">
                            <h4 className="font-semibold text-[#00d9de]">Download APP</h4>
                            <img className="w-28" src="https://i.ibb.co/z4qBFWY/pngwing-com-copy.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:px-20 md:px-10 px-5  flex justify-between py-6 lg:gap-0 md:gap-0 gap-6 text-xs  bg-[#062941]">
                <p>© 2023 PrismTask. Designed By Roman</p>
                <ul className="flex gap-6">
                    <li className="cursor-pointer hover:text-[#00d9de]">Site Index</li>
                    <li className="cursor-pointer hover:text-[#00d9de]">Privacy Policy</li>
                    <li className="cursor-pointer hover:text-[#00d9de]">Terms of Use</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;