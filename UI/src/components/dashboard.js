/* This example requires Tailwind CSS v2.0+ */
import React from 'react';


export default function Dashboard(props) {
  let className = '';
  className += props.isActive ? '' : 'hidden';
  console.log(props)
  return (
    
    <div className={className}>
    <div className="p-8 pl-12 text-5xl font-semibold">John Doe</div>
    </div>
  )
};