 import React from "react";
 import './Header.css'
import { Avatar, IconButton, Menu } from "@mui/material";
import { Apps, ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

 function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    };

    return (
        <div className="header">
            <div className="header__left">
                <IconButton></IconButton>
                <Menu></Menu>
                <img src="https://duet-cdn.vox-cdn.com/thumbor/0x0:1320x880/640x427/
                filters:focal(660x440:661x441):format(webp)/cdn.vox-cdn.com/uploads/
                chorus_asset/file/21939811/newgmaillogo.jpghttps://www.gstatic.com/images/branding/product/1x/hh_gmail_64dp.png" alt="" ></img>
            </div>
            
            <div className="header__middle">
                <Search></Search>
                <input placeholder="Search mail" type="text"></input>
                <ArrowDropDown className="header__inputCaret"></ArrowDropDown> 

            </div>

            <div className="header__right">
                <IconButton>
                <Apps></Apps>
                </IconButton>

                <IconButton>
                    <Notifications></Notifications>
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}></Avatar>

            </div>

        </div>
    )
 }

 export default Header