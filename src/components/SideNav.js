import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaUser, FaHeart, FaChevronLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { NavLink } from 'reactstrap';
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar.js';

const SideNav = ({ loggedIn, setLoggedIn, data }) => {

    const history = useHistory()

    const handleLogout = () => {
        // remove the token and username from localstorage when logout
        localStorage.removeItem('jwt')
        localStorage.removeItem('username')

        setLoggedIn(false)

        toast.info("You are logged out", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        history.push("/")
    }

    return (
        <ProSidebar
            breakPoint="sm">
            <SidebarHeader style={{ padding: "24px", textTransform: "uppercase", fontWeight: "bold", fontSize: "14px", letterSpacing: "1px" }}>
                Caring App
            </SidebarHeader>
            <SidebarContent style={{ fontSize: "10px", letterSpacing: "1px" }}>
                <Menu iconShape="square">
                    <MenuItem icon={<FaChevronLeft />}><Link to={`/profile`}>Back to Homepage</Link></MenuItem>
                    <MenuItem icon={<FaUser />}><Link to={`/profile`}>Edit Profile</Link></MenuItem>
                    <MenuItem icon={<FaHeart />}><Link to={`/help`}>Find Help</Link></MenuItem>
                </Menu>
                <div className="App">

                    <ProgressBar data={data} />

                </div>
            </SidebarContent>
            <SidebarFooter style={{ padding: "20px", textAlign: "center", fontWeight: "bold", fontSize: "14px", letterSpacing: "1px" }}>
                <Link to={`/`}>Back to Info Page</Link><br></br>
                <NavLink style={{ cursor: "pointer" }} onClick={() => handleLogout()}>Sign Out</NavLink>
            </SidebarFooter>
        </ProSidebar>
    )

};

export default SideNav;



