import React from 'react';
import FeatherIcon from "feather-icons-react";

function SidebarItem(props) {
    let className = 'flex w-12 h-12 mt-6  rounded-full justify-center items-center ';
    className += props.isActive ? 'bg-blue-200 text-blue-700' : 'bg-white';
    return (
        <div className={className}>
            <FeatherIcon icon={props.icon} size="24"/>
            
        </div>
    );
}

export default SidebarItem;