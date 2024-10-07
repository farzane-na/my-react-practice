import React from 'react';
import Home from './components/Home/Home'
import BlogPage from './components/BlogPage/BlogPage';
import About from './components/About/About';
import LibrariesPage from './components/LibrariesPage/LibrariesPage';
import Contact from './components/Contact/Contact';
import MainBlog from './components/MainBlog/MainBlog'
import MainLibrary from './components/MainLibrary/MainLibrary'
import Page404 from './components/404Page/404Page'

let routes=[
    { path:"/", element:<Home/> },
    { path:'/blogs', element:<BlogPage /> },
    { path:'/about', element:<About /> },
    { path:'/Libraries', element:<LibrariesPage />},
    { path:'/contact', element:<Contact /> },
    { path:'/blog/:blogID', element:<MainBlog /> },
    { path:'/library/:libraryID', element:<MainLibrary /> },
    { path:'*', element:<Page404 />}
]
export default routes