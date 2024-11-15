import React, { useState } from 'react';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to handle mouse enter and leave events
    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className='w-full h-[10vh] flex justify-between items-center bg-white px-5 shadow-md'>
            <h1>FoodoComic</h1>
            <div className='flex items-center gap-5'>
                {/* Dropdown menu trigger */}
                <div 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className='relative cursor-pointer text-orange-500'
                >
                    FEATURES
                    <span className='ml-1'>▾</span>
                    
                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                        <div className='absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md'>
                            <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>ADD & IMPORT</div>
                            <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>ORGANISE & SEARCH</div>
                            <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>PLAN, SHOP, COOK</div>
                            <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>WEB APP</div>
                            <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>VIDEO</div>
                        </div>
                    )}
                </div>
                <div>PRICING</div>
                <div>CONTACT US</div>
            </div>
        </div>
    );
}

export default Navbar;
