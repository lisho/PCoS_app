import Link from "next/link";
import { useState } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';

import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';

import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {

  const [sidebarState, setSidebarState] = useState({
    collapsed: typeof collapsed === 'undefined' ? false : collapsed,
/*     rtl: typeof rtl === 'undefined' ? false : rtl, */
    toggled: typeof toggled === 'undefined' ? false : toggled,
  });

  return (
  
        <ProSidebar
            /* collapsed={collapsed}
            toggled={toggled} */
            breakPoint="md"
            /* onToggle={handleToggleSidebar} */
           
        >
            <SidebarHeader id="sidebarheader">
                <div
                style={{
                    padding: '24px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
                >
                    <h1>SideBarTitles</h1>
                </div>
            </SidebarHeader>

            <SidebarContent id="sidebarcontent">
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>

                    <SubMenu title="Components" icon={<FaHeart />}>

                        <MenuItem icon={<FaGithub />}>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </MenuItem>

                        <MenuItem>
                            <Link href="/usuarios">
                                <a>Usuarios</a>
                            </Link>
                        </MenuItem>

                        <MenuItem>
                            <Link href="/about">
                                <a>Sobre nosotros</a>
                            </Link>
                        </MenuItem>

                    </SubMenu>

                </Menu>
                
            </SidebarContent>

            <SidebarFooter id="sidebarfooter" style={{ textAlign: 'center' }}>
             Este es el pie
            </SidebarFooter>

            <div
            className="overlay"
            onClick={handleToggleSidebar}
            onKeyPress={handleToggleSidebar}
            role="button"
            tabIndex={0}
            aria-label="overlay"
            />

        </ProSidebar>
 
  );
};

export default Sidebar;
