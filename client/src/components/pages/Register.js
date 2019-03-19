import React from 'react';
import Header from '../Header'
import firebase from '../../firebase';

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => this.props.history.push('/'))
            .catch(err => console.log(err))
    }

    render() {
        const { name, email, password, passwordConfirmation } = this.state;

        return (
            <div className="page login">
                <Header user={this.props.user} handleClick={this.props.signOut} />
                <div className="box">
                <h2 className="box-title">Register Page</h2>
                <div className="box-body">
                <form onSubmit={this.handleSubmit}>
                    
                    <input type="text" className='searchBox'  placeHolder='Name' name="name" id="name" value={name} required onChange={this.handleChange}/>

                    <input type="email" className='searchBox'  placeHolder='Email' name="email" id="email" value={email} required onChange={this.handleChange}/>

                    <input type="password" className='searchBox'  placeHolder='Password' name="password" id="password" value={password} required  onChange={this.handleChange}/>

                    <input type="password" className='searchBox' placeHolder='Confirm password' name="passwordConfirmation" id="passwordConfirmation" value={passwordConfirmation} required  onChange={this.handleChange}/>

                    <button className="blueBtn" type="submit">Register</button>
                </form>
                </div>
                </div>
            </div>
        )
    }
}

export default Register;

