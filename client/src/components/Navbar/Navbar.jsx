import React from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const Navbar = () => {
    return (
        <div className="flex sm:flex-row mt-5 ml-5 space-x-5">
            <div className="flex sm:flex-row justify-center h-10 w-3/4 bg-darkgrey rounded space-x-20 items-center">
                <h1 className="text-lg font-bold text-white ml-6"> Smort </h1>
                <input type="text" className="
                form-control
                block
                w-10/12 h-7
                text-sm
                placeholder:text-center
                font-normal
                text-textlightgrey
                bg-lightgrey 
                rounded 
                "
                id="search" name="search" placeholder="What are you looking for ?" />
            </div>
            <ToggleSwitch />
        </div>
    );
}

export default Navbar;