import React from 'react';
import { Route, Routes } from 'react-router-dom'

import UserPage from '../pages/UserPage';
import PostPage from '../pages/PostPage';


const RouteList: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<UserPage />}></Route>
            <Route path="/:id/posts" element={<PostPage />}></Route>
            <Route path="*" element={<div className="text-center mt-10 text-lg">404 Not Found</div>} />
        </Routes>
    );
}

export default RouteList;
