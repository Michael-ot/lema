import React from 'react';
import { usePostModalContext } from '../../features/post/context/PostModalContext';


const NewPostCard : React.FC = () => {
    const { openModal } = usePostModalContext();

    return (
      <div
        onClick={() => {openModal()}}
        className="bg-white border border-dashed border-gray-300 rounded-xl p-4 h-[293px] w-full flex flex-col items-center justify-center text-[#717680] text-sm font-semibold hover:border-indigo-500 hover:text-indigo-500 transition cursor-pointer"
      >
        <svg width={20} height={20} fill="none" stroke="#717680" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
            <path d="M12 8v8" />
            <path d="M8 12h8" />
        </svg>
        <span className="inline-block mt-2">New Post</span>
      </div>
    );
}

export default NewPostCard;
