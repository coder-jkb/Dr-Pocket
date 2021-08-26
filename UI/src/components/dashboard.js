/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import FeatherIcon from "feather-icons-react";

export default function Dashboard(props) {
  let className = '';
  className += props.isActive ? '' : 'hidden';
  console.log(props)
  return (
    
    <div className={className}>
    <div className="flex flex-row justify-between p-8 md:pl-12 text-4xl md:text-5xl font-semibold">
    <div className="flex md:hidden my-2"><FeatherIcon icon="menu" color="gray" size="32"/></div>
      John Doe
      <div className="flex md:hidden my-2"><FeatherIcon icon="search" color="gray" size="32"/></div>
      </div>
    
    </div>
  )
};