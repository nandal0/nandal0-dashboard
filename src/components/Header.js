

import './Header.css'
import { Avatar } from '@material-ui/core';
import { AppsTwoTone, MoreHoriz } from '@material-ui/icons';
import { Apps, Search } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { AvatarGroup } from '@mui/material';
import React from 'react'

const Header = () => {
    return (
        <div className="header">
            <div className="left_header">



                <p className="vi">
                    <strong>Power BI</strong>
                    <i>Sales and Marketing</i></p>
            </div>
            <div className="center">
                Sales and Marketing Sample
            </div>
            <div className="header_right">
                <div className="searchbar">
                    <Search />
                    <input type="text" />
                    

                </div>
                <MoreHorizIcon />
            </div>




        </div>
    )
}

export default Header
