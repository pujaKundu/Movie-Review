import React from 'react';

const Navbar = () => {
    return (
        <div>
            <input className='bg-slate-700 rounded shadow-sm w-80 mt-5 mr-5 p-3 right-0 absolute' type="text" placeholder='Search movies..' />
        </div>
    );
};

export default Navbar;