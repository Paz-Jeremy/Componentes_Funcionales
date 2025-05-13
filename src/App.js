import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={
                    <div>
                        <TopNavbar />
                        <div>
                            <Routes>
                                <Route path="/home" element={<Home/>} />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;