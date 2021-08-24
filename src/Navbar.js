
import React from 'react';
//import { render } from 'react-dom';
import './App.css';
import logo from './assets/Integrity-Logo.png'; 

class Navbar extends React.Component {
    
    render() {
        
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="~/Index.aspx" runat="server">
                    <img src={logo} height="30" runat="server" alt="" />
                </a>
                <div id="items" className>
                     <label className="ms-auto me-1">{this.props.Username}</label>
                </div>
            </div>
        </nav>
        )
    }
}




export default Navbar;


