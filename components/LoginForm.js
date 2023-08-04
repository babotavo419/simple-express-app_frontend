import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('/api/login', this.state);
        this.props.setToken(response.data.token);
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
                <button type="submit">Log In</button>
            </form>
        );
    }
}

export default LoginForm;