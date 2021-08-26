/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import FeatherIcon from "feather-icons-react";

const features = [
  {
    name: 'AI Recommendations for Cheaper Medicine',
    description:
      'We attempt to solve problem of costly medication using AI recommendation to suggest alternative cheaper (genric) medicines available to provide same cure that costlier branded medicines give',      
      logo: <FeatherIcon icon="user-check" color="blue"/>
  },
  {
    name: '24/7 Medical Assitance',
    description:
      'We have 24/7 Medical Assitance with AI powered medical recommendations to solve your basic healthcare related queries.',
    logo: <FeatherIcon icon="message-square" color="blue"/>
    },
  {
    name: 'Nearby Healthcare Centers',
    description:
      'Nearby Hospitals and Doctors information based on location',
    logo: <FeatherIcon icon="map-pin" color="blue"/>
    },
  {
    name: 'Mobile notifications',
    description:
      'Reminders to take medicine in form of messages and overlays.',
    logo: <FeatherIcon icon="calendar" color="blue"/>
    },
]

export default function Features(props) {
  let className = 'py-12 bg-white ';
  className += props.isActive ? '' : 'hidden';

  return (
    
    <div className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Some Features of our App
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Doctor Pocket aspires to reduce the Healthcare Problems faced by people by recommending medical diagnosis, 
          reminding medicines on time and test suggestions based on the symptoms faced by patient with help of AI and Technology.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  {/* <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div> */}
                  <p className="text-lg h-0 w-8">{feature.logo}</p>
                  <p className="ml-11 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-11 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
};