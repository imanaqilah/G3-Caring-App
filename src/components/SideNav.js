import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart, FaChevronLeft } from 'react-icons/fa';
import { Col } from 'reactstrap';
import { Link } from "react-router-dom";

const SideNav = () => {

    return (
        <ProSidebar
            breakPoint="sm">
            <SidebarHeader style={{ padding: "24px", textTransform: "uppercase", fontWeight: "bold", fontSize: "14px", letterSpacing: "1px" }}>
                BRAND NAME
            </SidebarHeader>
            <SidebarContent style={{ fontSize: "10px", letterSpacing: "1px" }}>
                <Menu iconShape="square">
                    <MenuItem icon={<FaChevronLeft />}><Link to={`/profile`}>Back to Homepage</Link></MenuItem>
                    {/* <MenuItem icon={<FaGem />}>MENU 2</MenuItem>
                    <MenuItem icon={<FaGem />}>MENU 3</MenuItem> */}
                    {/* <SubMenu title="MENU w/ submenu" icon={<FaHeart />}>
                        <MenuItem>Sub Menu 1</MenuItem>
                        <MenuItem>Sub Menu 2</MenuItem>
                    </SubMenu> */}
                    <MenuItem icon={<FaHeart />}><Link to={`/help`}>Find Help</Link></MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter style={{ padding: "20px", textAlign: "center", fontWeight: "bold", fontSize: "14px", letterSpacing: "1px" }}>
                <Link to={`/`}>Back to Info Page</Link><br></br>
            </SidebarFooter>
        </ProSidebar>
    )

};

export default SideNav;



