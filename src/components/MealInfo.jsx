import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealInfo = () => {
    const { Recipe_id } = useParams();
    const [recipeData, setRecipeData] = useState(null);

    useEffect(() => {
        const getInfo = async () => {
            try {
                const result = await axios.get(`https://cosylab.iiitd.edu.in/recipe/${Recipe_id}`);
                console.log(result.data.payload);  // Log the fetched recipe data
                setRecipeData(result.data.payload); // Assuming 'payload' holds recipe details
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (Recipe_id) {
            getInfo();
        }
    }, [Recipe_id]);

    if (!recipeData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen flex flex-col md:flex-row gap-6">
            {/* Image Section */}
            <div className="w-full md:w-1/3 relative">
                <img src={recipeData.img_url} alt={recipeData.Recipe_title} className="rounded-lg w-full h-auto object-cover" />
                <div className="absolute bottom-2 left-2 bg-white rounded-full p-2 cursor-pointer shadow-md">
                    <svg className="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 3.172a4.007 4.007 0 015.656 0L10 4.343l1.172-1.171a4.007 4.007 0 115.656 5.656L10 15.828l-6.828-6.829a4.007 4.007 0 010-5.656z" />
                    </svg>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-2/3 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-gray-800">{recipeData.Recipe_title.replace(/<[^>]*>/g, '')}</h1>
                <p className="text-gray-500 text-sm">Source: {recipeData.Source}</p>

                {/* Recipe Stats */}
                <div className="flex items-center gap-4 text-gray-600 text-sm">
                    <span>🍽 {recipeData.servings} serves</span>
                    <span>⏲ Prep: {recipeData.prep_time} mins</span>
                    <span>👨‍🍳 Cook: {recipeData.cook_time} mins</span>
                    <span>🥕 {recipeData.ingredients ? recipeData.ingredients.length : 0} Ingredients</span>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mt-2">
                    {(recipeData.tags || ["Dinner", "Lunch", "Vegetarian"]).map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{tag}</span>
                    ))}
                </div>

                {/* Description */}
                <div>
                    <h2 className="font-semibold text-lg mt-4">Description</h2>
                    <p className="text-gray-700">{recipeData.description || "A delicious and comforting meal."}</p>
                </div>

                {/* Ingredients and Instructions */}
                <div className="flex flex-col md:flex-row gap-6 mt-6">
                    {/* Ingredients */}
                    <div className="w-full md:w-1/2">
                        <h3 className="font-semibold text-lg">Ingredients</h3>
                        <ul className="mt-2 space-y-1">
                            {recipeData.ingredients ? (
                                recipeData.ingredients.map((ingredient, index) => (
                                    <li key={index} className="text-gray-800">
                                        <span className="font-bold">{ingredient.quantity}</span> {ingredient.name}
                                    </li>
                                ))
                            ) : (
                                <p>No ingredients available.</p>
                            )}
                        </ul>
                    </div>

                    {/* Instructions */}
                    <div className="w-full md:w-1/2">
                        <h3 className="font-semibold text-lg">Instructions</h3>
                        <ol className="mt-2 space-y-2 list-decimal list-inside">
                            {recipeData.instructions ? (
                                recipeData.instructions.map((instruction, index) => (
                                    <li key={index} className="text-gray-800">
                                        {instruction}
                                    </li>
                                ))
                            ) : (
                                <p>No instructions available.</p>
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealInfo;
