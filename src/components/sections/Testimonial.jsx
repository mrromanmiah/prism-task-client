import { BiSolidQuoteLeft } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div className="">
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper flex justify-center mx-auto py-20">
                <SwiperSlide><div className="py-20 w-1/2 mx-auto">
                    <BiSolidQuoteLeft className="text-9xl text-gray-300 text-center mx-auto mb-5"></BiSolidQuoteLeft>
                    <p className="w-full text-lg text-center italic">PrismTask has revolutionized my approach to project management as a web developer. Its sleek interface and seamless integration with development tools make it a standout choice. Tracking tasks, managing deadlines, and collaborating with the team has never been easier. PrismTask has become an indispensable asset in my toolkit, enhancing both efficiency and project success.</p>
                    <div className="text-center gap-4 pt-4">
                        <img className="flex justify-center mx-auto h-12 w-12 rounded-full border-2 border-white" src="https://i.ibb.co/2j2rWXb/pleased-young-caucasian-superhero-girl-standing-with-closed-posture-smiling-isolated-green-wall-with.jpg" alt="" />

                        <div>
                            <h3 className="text-[#00d9de] font-medium">Grace Emily</h3>
                            <p className=" text-xs font-light">Web Developer</p>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="py-20 w-1/2 mx-auto">
                    <BiSolidQuoteLeft className="text-9xl text-gray-300 text-center mx-auto mb-5"></BiSolidQuoteLeft>
                    <p className="w-full text-lg text-center italic">PrismTask has proven to be a game-changer for Peclo Inc. Its comprehensive features have streamlined our project management processes, allowing our teams to collaborate effortlessly. The real-time updates and analytics provided by PrismTask have given me valuable insights into our projects. It's a powerful tool that aligns perfectly with our company's commitment to efficiency and excellence.</p>
                    <div className="text-center gap-4 pt-4">
                        <img className="flex justify-center mx-auto h-12 w-12 rounded-full border-2 border-white" src="https://i.imgur.com/GT9ZMo3.jpg" alt="" />

                        <div>
                            <h3 className="text-[#00d9de] font-medium">David Bloomington</h3>
                            <p className=" text-xs font-light">CEO, Peclo Inc.</p>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="py-20 w-1/2 mx-auto">
                    <BiSolidQuoteLeft className="text-9xl text-gray-300 text-center mx-auto mb-5"></BiSolidQuoteLeft>
                    <p className="w-full text-lg text-center italic">At PCL Bank Ltd., PrismTask has significantly improved the way we handle projects and tasks. The platform's security features align with our industry standards, ensuring the confidentiality of sensitive information. The flexibility in task customization and the ability to track progress have made PrismTask an invaluable tool for our team. It has undoubtedly contributed to the smooth execution of our projects.</p>
                    <div className="text-center gap-4 pt-4">
                        <img className="flex justify-center mx-auto h-12 w-12 rounded-full border-2 border-white" src="https://i.ibb.co/LxkgqKS/smiling-young-pretty-woman-standing-with-closed-posture-looking-front-isolated-green-wall-with-copy.jpg" alt="" />

                        <div>
                            <h3 className="text-[#00d9de] font-medium">Sarah Thompson</h3>
                            <p className=" text-xs font-light">Manager, PCL Bank Ltd.</p>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="py-20 w-1/2 mx-auto">
                    <BiSolidQuoteLeft className="text-9xl text-gray-300 text-center mx-auto mb-5"></BiSolidQuoteLeft>
                    <p className="w-full text-lg text-center italic">PrismTask has been a key player in enhancing the productivity and organization of A&T Plc. As a business owner, the platform's adaptability to various business needs is impressive. From managing day-to-day tasks to overseeing long-term projects, PrismTask provides the flexibility and insights we need. It's a reliable solution that has positively impacted the overall efficiency and success of A&T Plc.</p>
                    <div className="text-center gap-4 pt-4">
                        <img className="flex justify-center mx-auto h-12 w-12 rounded-full border-2 border-white" src="https://i.ibb.co/wcv0JFh/happy-bearded-man-brown-suit-wearing-glasses-looking-smiling-cheerfully.jpg" alt="" />

                        <div>
                            <h3 className="text-[#00d9de] font-medium">Dr. Michael Robert</h3>
                            <p className=" text-xs font-light">Owner, A&T Plc.</p>
                        </div>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;