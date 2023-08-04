import React from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Users from './components/Users';


class App extends React.Component {
    state = {
        token: null,
    }

    setToken = (token) => {
        this.setState({ token });
    }

    render() {
        const { token } = this.state;

        return (
            <div>
                <h1>My App</h1>
                <RegisterForm />
                <LoginForm setToken={this.setToken} />
                <Users token={token} />
            </div>
        );
    }
}

export default App;
