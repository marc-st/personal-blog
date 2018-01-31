import React, {Component} from 'react';
import logo from '../logo.svg';
import '../stylesheets/headfoot.css';

export const Header = () => (
  <header className="header">
    <img src = {require("../images/marc.jpg")} className = "profileImage"/>
    <h1 style={{marginTop:0}} className="App-title">Marc Stevens</h1>
  </header>
);
