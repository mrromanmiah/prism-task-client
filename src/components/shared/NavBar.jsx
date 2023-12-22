import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (


        <Navbar fluid rounded className="lg:px-16 md:px-5 px-5 py-5 relative z-10 bg-transparent">
            <Navbar.Brand href="/">
                <img src="https://i.ibb.co/n74MnTf/prism-Task-Logo.png" className="mr-3 h-12" alt="TourTitan Logo" />
                <span className="self-center whitespace-nowrap text-3xl font-semibold "><span className='text-[#0b4a75]'>Prism</span>Task</span>
            </Navbar.Brand>
            <div className="flex gap-2 md:order-2">
                
                {
                    user? <div className='flex gap-2'>
                        <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img={user?.photoURL} rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm font-bold">{user?.displayName}</span>
                        <span className="block truncate text-xs font-medium">{user?.email}</span>
                    </Dropdown.Header>
                    <NavLink to='/dashboard'><Dropdown.Item>Dashboard</Dropdown.Item></NavLink>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogOut} className='text-red-600 font-bold'>Sign Out</Dropdown.Item>
                </Dropdown>
                
                
                <Navbar.Toggle />
                    </div> : <Link to='/login'><button className='bg-gradient-to-t from-[#0b4a75] to-[#00d9de] text-sm text-white font-bold px-3 py-2 rounded-md hover:bg-gradient-to-t hover:from-[#00d9de] hover:to-[#0b4a75] hover:text-white'>Login</button></Link>
                }
                
                
            </div> 
            
            <Navbar.Collapse>
                <NavLink to='/' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#00d9de] font-black" : "hover:border-b-2 hover:border-[#00d9de] font-black"
                }><Navbar.Link>Home</Navbar.Link></NavLink>
                <NavLink to='/about' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#00d9de] font-black" : "hover:border-b-2 hover:border-[#00d9de] font-black"
                }><Navbar.Link>About</Navbar.Link></NavLink>
                <NavLink to='/features' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#00d9de] font-black" : "hover:border-b-2 hover:border-[#00d9de] font-black"
                }><Navbar.Link>Features</Navbar.Link></NavLink>
                <NavLink to='/pricing' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#00d9de] font-black" : "hover:border-b-2 hover:border-[#00d9de] font-black"
                }><Navbar.Link>Pricing</Navbar.Link></NavLink>
                <NavLink to='/contact' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#00d9de] font-black" : "hover:border-b-2 hover:border-[#00d9de] font-black"
                }><Navbar.Link>Contact</Navbar.Link></NavLink>


            </Navbar.Collapse>
        </Navbar>

    );
};

export default NavBar;