import React from "react"
import background from "./gambar.png";
import './about.css';

export default class About extends React.Component{
    render(){
        return(
            <div className="App" style={{ backgroundImage: `url(${background})` }}>
            <div className="App-content">
                <h1 className="about1">Hai, Saya Razaq Farhan</h1>
                <hr></hr>
                <p className="about2">Saya adalah siswa SMK Telkom Malang <br></br> jurusan Rekayasa Perakat Lunak.</p>
            </div>
        </div>
        )
    }
}

