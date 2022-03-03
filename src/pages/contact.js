import React from "react"
import background from "./gambar.png";
import './contact.css';

export default class Contact extends React.Component{
    render(){
        return(
            <div className="App" style={{ backgroundImage: `url(${background})` }}>
            <div className="App-content">
                <h1 className="contact1">Kontak Saya</h1>
                <hr></hr>
                <p className="contact2">Telp : 082114671176 <br></br> Email : aljawadfarhan@gmail.com</p>
            </div>
        </div>
        )
    }
}
