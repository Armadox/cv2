'use client'

import { FaArrowDown } from "react-icons/fa";

interface NavbarProps{
    categories: string[]
}

const Navbar:React.FC<NavbarProps> = ({categories}) =>{
    return(
        <div className="flex flex-row justify-evenly items-center w-[100%] h-[60px] fixed bg-black z-10 overflow-x-auto">
            {categories.map((category, index) => (
                <a href={`#${category}`} key={index} className="min-w-[85px] text-center">
                    {category}
                </a>
            ))}
            <a href="https://drive.google.com/file/d/1I5aJwNGhagHAbYZ2ULxRwEDgmdDKLFRY/view?usp=sharing" className="text-black bg-white rounded full p-2"><FaArrowDown/></a>
        </div>
    )
}

export default Navbar;