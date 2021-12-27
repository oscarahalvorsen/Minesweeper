import React, { Component } from "react";
import InfoPage from "./InfoPage";
import GamePage from "./GamePage";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }
 
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<InfoPage />} />
                    <Route path='/gamepage' element={<GamePage/>}/></Routes>
            </Router>
        )
    }
}