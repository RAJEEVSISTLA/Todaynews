import React, { Component } from 'react';

export default class Mp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agreed: false,
      confirmationMsg: ''
    };
  }

  handleCheckboxChange = () => {
    this.setState({ agreed: !this.state.agreed });
  };

  handleSubmit = () => {
    if (this.state.agreed) {
      this.setState({ confirmationMsg: 'Thank you for agreeing to our terms and conditions!' });
    } else {
      this.setState({ confirmationMsg: 'Please agree to the terms and conditions.' });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Terms and Conditions</h1>
        <div className="terms">
          <p>Welcome to our News Website. Please read these terms and conditions carefully before using our website.</p>
          <p>By using our website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our website.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non lectus vitae tellus commodo ullamcorper. Donec eget elit id purus lacinia lobortis.</p>
          <div className="checkbox">
            <input type="checkbox" id="agree" onChange={this.handleCheckboxChange} />
            <label htmlFor="agree">I agree to the terms and conditions</label>
          </div>
          <button onClick={this.handleSubmit} disabled={!this.state.agreed}>Submit</button>
          <p id="confirmationMsg">{this.state.confirmationMsg}</p>
        </div>
        <style>{`
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
          }

          .container {
            max-width: 800px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          h1 {
            text-align: center;
          }

          .terms {
            margin-top: 20px;
          }

          .checkbox {
            margin-bottom: 15px;
          }

          input[type="checkbox"] {
            margin-right: 10px;
          }

          button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
          }

          button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }

          #confirmationMsg {
            margin-top: 10px;
            font-weight: bold;
          }
        `}</style>
      </div>
    );
  }
}
