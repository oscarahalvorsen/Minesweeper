import React, { Component } from "react";
import GamePage from "./GamePage";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }
 
    render() {
        return (
            <Router>
                <h1>hei på deg 1</h1>
                <Routes><Route path='/gamepage' element={<GamePage/>}/></Routes>
            </Router>
        )
    }
}