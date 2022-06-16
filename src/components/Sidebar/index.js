import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Iconoptions } from "./Iconoptions";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import EventIcon from '@mui/icons-material/Event';
import "./styles.css";

import { useDispatch } from "react-redux";
import { setShowModal } from "../../actions/generalActions";

export const Sidebar = () => {
    const dispatch = useDispatch()

    const handleClick = (state) => {
        dispatch(setShowModal(state))
    }

    return (
        <div className="Sidebar">
            <div className="Home">
                <Iconoptions text="Home" Icon={HomeIcon} />
            </div>
            
            <Iconoptions text="Perfil" Icon={AccountCircleIcon} />
            <Iconoptions func={() => handleClick(true)} text="Crear Evento" Icon={EventIcon} />
            <Iconoptions text="Buscar" Icon={SearchIcon} />
            <Iconoptions text="Salir" Icon={LogoutIcon} />
        
        </div>
    );
};
