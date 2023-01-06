import React from 'react';
import './App.css';
import Clock from './Clock';
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
      <title>MiracleCherryPie's website</title>
    </Helmet>
    <div className="App">
      <header className="App-header">
        <div className="spacing"></div>
        <div className='Blur App-content'>
          <Clock/>
        </div>
        <div className="spacing"></div>
        <img className='imageFile' src='https://avatars.githubusercontent.com/u/91181632?v=4' alt='pfp' />
        <div className="spacing"></div>
        <div className='Blur App-content'>
          <h1>MiracleCherryPie</h1>
          <p>Hello world. Now I decided to learn React.js. So I re-build my website from scratch and move from HTML + W3.CSS to React + pure CSS</p>
        </div>
        <div className="spacing"></div>
        <div className='Blur App-content'>
          <h2>About me</h2>
          <p>
            I'm 15 years old Linux enthuasist and Coder who learn to make discord bots from scratch and create website in some framework like React.js.
            <div className="spacing"></div>
            I also play some video games like Minecraft and osu!. BTW why not look around at this website, below there's project links you can see
          </p>
        </div>
        <div className="spacing"></div>
        <div className='App-grid-container Blur'>
          <div className='App-grid-item'>
            <h3><a href='https://github.com/MiracleCherryPie/react-website'>Current website</a></h3>
            <p>Finally the React.js version of
              <br/>
              my website</p>
          </div>
          <div className='App-grid-item'>
            <h3><a href='https://miraclecherrypie.cf'>Legacy website</a></h3>
            <p>The old version of this website</p>
          </div>
          <div className='App-grid-item'>
            <h3><a href='https://github.com/MiracleCherryPie/Discord-TerminalBot'>Some shell bot</a></h3>
            <p>Linux/Windows terminal
              <div className="spacing"></div>
              right inside Discord</p>
          </div>
        </div>
        <div className="spacing"></div>
      </header>
    </div></>
  );
}

export default App;

