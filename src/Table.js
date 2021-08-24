import React from 'react';
//import { render } from 'react-dom';
import './App.css';



class Table extends React.Component {

    render() {
        return (
            <div className="">
                <div className="container-fluid mx-auto">
                    <div className="h3 mt-4 d-flex justify-content-center">Integrity Locations</div>
                    <div className="row" className="mx-auto" style={{ width: '95%' }}>
                        <div className="col-12">
                            <div className="card p-3 shadow-1-strong" style={{ marginTop: '5%' }}>
                                <div className="d-flex flex-row">
                                    <input placeholder="Search" className="form-control text-dark integrity-border w-50"></input>
                                    <button className="btn btn-outline-dark ms-auto integrity-border">Download</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" className="mx-auto" style={{ width: '95%' }}>
                        <div className="col-12">
                            <div className="card p-3 shadow-1-strong mt-2" >
                                <table class="table text-center">
                                    <thead>

                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Location</th>
                                            <th scope="col" >Address</th>
                                            <th scope="col" >Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>INTEGRITY CANADA HEADQUARTERS</td>
                                            <td>Head Office 5015 O’Neil Drive Oldcastle,<br /> Ontario Canada N0R 1L0</td>
                                            <td>contact@teamintegrity.com</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>INTEGRITY  USA</td>
                                            <td>2071 Elkton Pike Pulaski, TN USA 38478</td>
                                            <td >customerservice@integritytn.com</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">3</th>
                                            <td>INTEGRITY MEXICO</td>
                                            <td > Circuito El Marqués Sur #51 Parque Industrial<br /> El Marqués El Marqués, Querétaro, Mexico C.P. 76246</td>
                                            <td >contact@teamintegrity.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}




export default Table;