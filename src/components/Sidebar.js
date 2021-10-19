import React from 'react'
import './Sidebar.css'
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import OfflineShareIcon from '@mui/icons-material/OfflineShare';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import WineBarIcon from '@mui/icons-material/WineBar';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';
import SideIcon from './SideIcon';
import { AccessTimeFilledOutlined, Favorite, Home, Plus, Star } from '@mui/icons-material';
import { AccessTime, RecentActors } from '@material-ui/icons';
const Sidebar = () => {
    return (
        <div className="sidebar">
            
            
            <SideIcon Icon={MenuIcon} />
            <SideIcon Icon={Home} text="Home" />
            <SideIcon Icon={Star} text="Favourite" />
            <SideIcon Icon={AccessTimeFilledOutlined} text="Recent" />
            <SideIcon Icon={AddRoundedIcon} text="Create" />
            <SideIcon Icon={DataUsageOutlinedIcon} text="DataSheets" />
            <SideIcon Icon={WineBarIcon} text="Goals" />
            <SideIcon Icon={AppRegistrationIcon} text="Apps" />
            <SideIcon Icon={OfflineShareIcon} text="Shared with me" />
            <SideIcon Icon={LaptopWindowsIcon} text="Discover" />
            <SideIcon Icon={MenuBookOutlinedIcon} text="Learn" />

        </div>
    )
}

export default Sidebar
