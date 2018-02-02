import React from 'react';
import "../stylesheets/home.css";

export const Home = () => (
  <div className = "home">
    <div className="profile">
      <article className="profileDesc">
        <h2 style={{marginTop:0}}>
          I'm Marc and i'm interested in hacking things together on the internet.
        </h2>
        <p>
          I'm currently studying Computer Science at the
          <a href = "https://surrey.ac.uk"> University of Surrey </a>.<br />
          I will primarily use this website for blog posts on subjects i'm passionate
          about.
        </p>
        <p> I will also use this to keep track of programming projects i'm working on. </p>
      </article>
    </div>
    <hr />
    <div>
      <ul className="mediaLinks">
        <li>
          <a href="https://twitter.com/marcsstevens">
            <img src= {require("../images/twitter.png")} alt="Twitter Logo"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/marc-st">
            <img src={require("../images/github.png")} alt="Github Logo"/>
           </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/marc-stevens-292820144/">
            <img src={require("../images/linkedinlogo.png")} alt="LinkedIn Logo"/>
           </a>
        </li>
      </ul>
    </div>
  </div>

);
