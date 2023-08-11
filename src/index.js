import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import Part1 from "./pages/Part1"
import Part2 from "./pages/Part2"
import Part3 from "./pages/Part3"
import Part4 from "./pages/Part4"


function App() {
    return (
        <BrowserRouter>
            <header>
                <Link to="/">PARENT_LIFE</Link>
                <nav>
                    <Link to="/about">Part0 Prologue</Link>
                    <Link to="/Part1">Part1 Trimester 1</Link>
                    <Link to="/Part2">Part2 Trimester 1</Link>
                    <Link to="/Part3">Part3 Trimester 1</Link>
                    <Link to="/Part4">Part4 Trimester 1</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/Part1" element={<Part1 />} />
                <Route path="/Part2" element={<Part2 />} />
                <Route path="/Part3" element={<Part3 />} />
                <Route path="/Part4" element={<Part4 />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);