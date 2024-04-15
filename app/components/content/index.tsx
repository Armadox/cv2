'use client'

import { ReactNode } from "react";

interface ContentProps {
    headline: string;
    text: ReactNode;
}

const Content: React.FC<ContentProps> = ({ headline, text }) => {
    return (
        <div className="flex flex-col gap-2 min-h-[100vh] justify-center lg:w-[65%] max-w-[800px]">
            <div className="border border-white rounded-b-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:-translate-x-2 hover:-translate-y-2 bg-window p-3">
                <div className="border-b border-white h-5"></div>
                <div className='text-headline text mt-4'><span className="text-pink-500">export</span> <span className="text-blue-500">const</span> <span className="text-yellow-100">{headline}</span> =&gt; &#123; </div>
                <div className='text-text'>{text}</div>
                <a href="https://drive.google.com/file/d/1I5aJwNGhagHAbYZ2ULxRwEDgmdDKLFRY/view?usp=sharing">&#125;</a>
            </div>
        </div>
    );
}

export default Content;
