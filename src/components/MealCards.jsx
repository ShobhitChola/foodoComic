import React from 'react';
import { NavLink } from 'react-router-dom';

const MealCards = ({ detail }) => {
    console.log(detail);

    return (
        <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {!detail ? "" : detail.map((curItem) => {
                const cleanTitle = curItem.Recipe_title
                    .replace(/<[^>]*>/g, '')
                    .replace(new RegExp("no", 'gi'), '');

                return (
                    <div key={curItem.Recipe_id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                        <img 
                            src={curItem.img_url} 
                            alt={cleanTitle} 
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 truncate">{cleanTitle}</h3>
                            <NavLink to={`/${curItem.Recipe_id}`}>
                                <button className="mt-3 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                                    View Recipe
                                </button>
                            </NavLink>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MealCards;
