import React, { useEffect } from "react";

//app styles
import "./App.css";

//Componentes
import { Header } from "./components/Header";
// import { Login } from "./components/Login";

import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";
import { Details } from "./components/Details";
import { Modal } from './components/Modal/Modal'

//redux
import { useDispatch } from "react-redux"
import { loadData } from "./actions/generalActions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const executeEffect = async () => {
            dispatch(loadData())
        }
        executeEffect()
    }, [])
    
    return (
        <div className="App">
            <Sidebar/>
            <Home/>
            <Details/>


            {/* Modal */}
            <Modal/>
        </div>
    );
}

export default App;
