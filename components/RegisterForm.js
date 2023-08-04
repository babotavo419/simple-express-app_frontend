import React from 'react';
import axios from 'axios';

class RegisterForm extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/register', this.state);
    }

    render() {
        const { username, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={this.handleChange} />
                </label>
                <button type="submit">Register</button>
            </form>
        );
    }
}

export default RegisterForm;