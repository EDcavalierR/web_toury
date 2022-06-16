import React from 'react'
import { Headericons} from './Headericons'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import '../styles.css'




export const Header = () => {
  return (

    <header className="header">
        <nav className="nav">
        <Headericons className="logo"/>

        <div className=" header__buscar">
            <SearchIcon className="lupa"/>

            <input type="text" placeholder="buscar"/>

        </div>
        <Headericons Icon ={HomeIcon} title="Home"/>
        <Headericons Icon ={SettingsIcon} title="Config"/>
        <Headericons Icon ={AccountCircleIcon} title="Perfil"/>
        <Headericons Icon ={LogoutIcon } title="Salir"/>
        </nav>
        

    </header>
  )
}


