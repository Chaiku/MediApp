import React from 'react';
import firebase from '../../firebase';
import Header from '../Header';
import '../../../src/login.css'

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errors: null
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(signedInUser => {
                this.props.history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="page login">
                <Header user={this.props.user} handleClick={this.props.signOut} />
                <div className="box">
                    <h2 className="box-title">Login Page</h2>
                    <div className="box-body">
                        <form onSubmit={this.handleSubmit}>
                            <input type="email" className='searchBox' placeholder='Email' name="email" id="email" value={email} required onChange={this.handleChange} />

                            <input type="password" className='searchBox' placeholder='Password' name="password" id="password" value={password} required onChange={this.handleChange} />

                            <button className="blueBtn" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;