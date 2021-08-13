import React from 'react';
import FeatherIcon from "feather-icons-react";

function SidebarItem(props) {
    let className = 'flex gap-x-2 my-2 p-2 rounded-r-full ';
    className += props.isActive ? 'bg-blue-200 text-blue-700' : 'bg-white';
    return (
        <div className={className}>
            <FeatherIcon icon={props.icon} />
            <span>{props.name}</span>
        </div>
    );
}

export default SidebarItem;