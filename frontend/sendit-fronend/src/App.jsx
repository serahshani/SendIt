import {  Outlet } from 'react-router-dom';

import Navbar from './components/Navbar'; // Import Navbar

// 
export const App = () => {
    return (
        <>
            <header><Navbar /></header>
            <main style={{width: '100vw'}}> 
                <Outlet />
            </main>
            
        </>
    );
};

export default App;
