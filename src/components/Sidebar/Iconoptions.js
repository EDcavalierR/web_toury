import React from "react";
import "./styles.css";

export const Iconoptions = ({ text, Icon, func }) => {
    
    return (
        <div className="Sidebaricon" onClick={(func)}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    );
};
