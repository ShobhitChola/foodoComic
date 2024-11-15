import React from 'react';
import "cal-sans";
import { NavLink } from 'react-router-dom';
import MealPlanning from './MealPlanning';

const Home = () => {
  return (
    <div className='h-full w-full bg-[#DEF3EB]'>
        <div className='content-center text-5xl h-screen'>
            <h1 className='text-7xl text-center font-["Cal Sans"] font-bold mb-8'>
                All-in-one <br />
                recipe manager & <br />
                meal planning app
            </h1>

            {/* Button container */}
              <div className='flex gap-3 justify-center m-[100px]'>
                <NavLink to={"planmeal"}>
                  <button className='px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md hover:bg-green-600 transition duration-200'>
                      Plan Your Meal
                  </button>
                </NavLink>
                <NavLink to={"explore"}>
                  <button className='px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md hover:bg-green-600 transition duration-200'>
                      Explore Global Cuisine
                  </button>
                </NavLink>
                <NavLink>
                  <button className='px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md hover:bg-green-600 transition duration-200'>
                      Get Nutritional Insights
                  </button>
                </NavLink>
              </div>
        </div>
    </div>
  );
};

export default Home;
