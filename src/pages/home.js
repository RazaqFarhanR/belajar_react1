import React from "react";
import background from "./gambar.png";
import './home.css';

export default class Home extends React.Component{
    render(){
        return(
        <div className="App" style={{ backgroundImage: `url(${background})` }}>
            <div className="App-content">
                <h1 className="home1">Halo <br></br>Teman-Teman</h1>
                <p className="home2">Sekarang saya sedang belajar React. </p>
            </div>
        </div>
        )
    }
}
