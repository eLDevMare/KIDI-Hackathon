import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';

function App() {
    return (
        <Router>
            <Routes>
                {/* Route ke halaman Home */}
                <Route path="/" element={<Home />} />

                {/* Anda bisa menambahkan route lain di sini */}
                {/* <Route path="/about" element={<About />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
