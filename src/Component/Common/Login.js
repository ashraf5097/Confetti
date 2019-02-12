import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            loginId:'',
            loginPassword:'',
        }
    }

    handleTextChange = (event) => {
        let idTextValue = event.target.value;
        this.setState({
            loginId: idTextValue
        })
    }

    handlePasswordChange = (event) => {
        let pwdTextValue = event.target.value;
        this.setState({
            loginPassword: pwdTextValue
        })
    }

    handleSubmit (event) {
        event.preventDefault()

            this.props.history.push({
                pathname: '/addRestaurant',
            });
    }

  render() {
      
    return (
      
        <div className="wrapper ">
            <div id="formContent">

                {/* <form> */}
                <input type="text" id="login" className="login-text" name="login" placeholder="login" onChange={this.handleTextChange}/>
                <input type="password" id="password" className="login-text" name="login" placeholder="password" onChange={this.handlePasswordChange}/>
                <button type="button" className="btn btn-info submit-button" onClick={(event)=>this.handleSubmit(event)}>
                            <span className="glyphicon glyphicon-search"></span> Submit
            </button>
                {/* </form> */}
            </div>
        </div>
    );
  }
}

export default Login;
