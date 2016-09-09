import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
			email: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleGuest = this.handleGuest.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	handleGuest(){
		const user = {
			username: "Young Padawan",
			password: "password",
			email: ""
		}
		this.props.processForm({user});
	}
	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	loginOrSignUp() {
		if(this.props.formType === 'login') {
			return true;
		} else {
			return false;
		}
	}

	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					{ this.renderErrors() }
					<div className="login-form">
						<input type="text"
							value={this.state.username}
							onChange={this.update("username")}
							className="login-input"
							placeholder="username" />
						<input type="password"
							value={this.state.password}
							onChange={this.update("password")}
							className="login-input"
							placeholder="password" />
						<input type='email'
							value={this.state.email}
							onChange={this.update("email")}
							className="login-input"
							placeholder="email"
							hidden={this.loginOrSignUp()} />
						<input className='submit-login-button'
							type="submit"
							value="Submit" />
					</div>
				</form>
				<div>
					<button onClick={this.handleGuest}>
						Guest Login
					</button>
				</div>
			</div>
		);
	}

}

export default SessionForm;
