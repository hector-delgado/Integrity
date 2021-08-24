import React from 'react';
import './App.css';
import Table from './Table';

class Login extends React.Component {
  state = {
      showMySelf:this.props.show,
      Username:""
  }

  
  onSubmit = () =>{
    var txt = document.getElementById('txtUsername');
   
    if(txt.value !== ""){
        alert("Welcome back " + txt.value)
        this.setState({showMySelf: false})
        this.setState({Username:txt.value})
       
        //this.setState({App.state.Username:txt.value})
    }else{
        alert("Enter a username")
    }
  }

  render() {
    console.log(this.props);
      if(this.state.showMySelf){
        return (
            <div className="container-fluid">
              <div className="row">
                <div className="col-1 col-sm-2 col-md-3 col-lg-4">
        
                </div>
                <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                  <div className="card p-4 shadow-1-strong" style={{ marginTop: '20%' }}>
                    <div className="card-header text-center">
                      <p className="h4">Welcom to Integrity!</p>
                    </div>
                    <form onSubmit={this.onSubmit}>
                      <div className="d-flex flex-column">
                      <label className="form-label fs-5">Username</label>
                      <input className="form-control integrity-border" id="txtUsername" type="text"
                      onChange={event => this.props.onChange(event.target.value)}></input>
        
                      <label className="form-label mt-3 fs-5">Password</label>
                      <input className="form-control integrity-border" type="password" value="Integrity"></input>
        
                      <div class="form-check mt-3">
                        <input class="form-check-input " type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">Remember me</label>
                      </div>
                      <button type="submit" id="btnLogin" class="btn btn-light mt-3 text-light integrity-bg"
                      >Login</button>
                    </div>
                    </form>
                    <div className="card-footer">
                      <div className="d-flex flex-column ">
                        <button type="button" class="btn btn-link ">Register</button>
                        <button class="btn btn-link ">Forgot your password?</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1 col-sm-2 col-md-3 col-lg-4">
                </div>
              </div>
            </div>

          );
      }else{
          return(
              <Table/>
          );
      }
     
  }
}
export default Login;
