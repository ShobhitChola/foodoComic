import axios from 'axios';
import React, { useState } from 'react';
import MealCards from './MealCards';

const MealPlanning = () => {
    const [array, setArray] = useState([])
    const [search, setsearch] = useState("")

    const handleInput = (event) => {
        setsearch(event.target.value)
    }
  
    const getmeal = async () => {
      try {
        const result = await axios.get(`https://cosylab.iiitd.edu.in/recipe-search/recipe?pageSize=10&searchText=${search}`);
        const final = result.data.payload.data;
        setArray(final);
        // console.log(final);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


  return (
    <div className="flex p-[100px] items-start justify-center min-h-screen bg-gray-100">
        <div className="w-full p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Find a Recipe</h2>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Enter the name of the dish"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                        onChange={handleInput}
                    />
                    <button onClick={getmeal} className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition duration-200">
                        Search
                    </button>
                </div>
            <div className='p-8 m-8'>
                <MealCards detail={array} />
            </div>
        </div>
    </div>
  );
};

export default MealPlanning;