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
      <div className="flex flex-row my-2 text-left p-2 md:pl-12 mr-16 border-r-8">
        <p className="text-xl text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et elit eget erat commodo sodales. 
          Integer bibendum leo sit amet magna tristique, nec posuere leo consectetur. Sed tempor dui arcu, in egestas tortor accumsan a. 
          Nulla vitae dapibus nulla. Phasellus malesuada sem nisl, ac egestas nisl fringilla ut. Sed aliquet et turpis nec porttitor. 
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
          </p>
        </div>
    </div>
  )
};