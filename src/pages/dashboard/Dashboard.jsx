import { FaClipboardList, FaEnvelope, FaInfo, FaSignOutAlt, FaTasks } from "react-icons/fa";
import { FaFileInvoiceDollar, FaHouse } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";




const Dashboard = () => {
    const navigate = useNavigate();
    const { user, logOut } = useAuth()
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Successfully logged out',
                    'success'
                )
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="lg:flex md:flex-none flex-none lg:m-0 m-4 gap-4">
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex justify-between items-center">
                        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden"><GiHamburgerMenu /></label>
                        <div className="flex items-center my-4 mr-4 lg:hidden">
                            <img src="https://i.ibb.co/nRsCMpN/prism-Task-Logo.png" className="mr-3 h-6" alt="PrismTask Logo" />
                            <span className="self-center whitespace-nowrap text-xl text-black font-semibold"><span className='text-[#00d9de]'>Prism</span>Task</span>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu px-8 min-h-full bg-white">
                            <div className="flex items-center mt-4 mb-2">
                                <img src="https://i.ibb.co/nRsCMpN/prism-Task-Logo.png" className="mr-3 h-8" alt="PrismTask Logo" />
                                <span className="self-center whitespace-nowrap text-2xl text-black font-semibold"><span className='text-[#00d9de]'>Prism</span>Task</span>
                            </div>
                            <div className="divider"></div>

                            <div className="flex flex-col mx-auto text-center items-center space-y-2">
                                <img src={user?.photoURL} className="w-14 h-14 rounded-full" alt="user photo" />
                                <h3 className="text-lg text-[#00d9de] text-center font-bold">{user?.displayName}</h3>
                            </div>


                            <div className="divider"></div>

                            {/* Sidebar content here */}

                            <>
                                
                                <li><NavLink to='/dashboard/tasks' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-[#00d9de] text-white text-lg font-black hover:text-black" : "hover:text-black text-lg font-black"
                }><FaTasks></FaTasks> My Tasks</NavLink></li>
                            </>

                            <div className="divider"></div>
                            <li><Link to='/'><FaHouse></FaHouse> Home</Link></li>
                            <li><Link to='/about'><FaInfo></FaInfo> About</Link></li>
                            <li><Link to='/features'><FaClipboardList></FaClipboardList> Features</Link></li>
                            <li><Link to='/price'><FaFileInvoiceDollar></FaFileInvoiceDollar> Pricing</Link></li>
                            <li><Link to='/contact'><FaEnvelope></FaEnvelope> Contact</Link></li>
                            <li><Link onClick={handleLogout} className="text-red-600 font-bold text-base mt-2 bg-gray-200 hover:bg-red-600 hover:text-white"><FaSignOutAlt></FaSignOutAlt> Logout</Link></li>

                        </ul>

                    </div>
                </div>

            </div>
            <div className="h-full w-full">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;