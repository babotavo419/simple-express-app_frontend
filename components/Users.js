import React from 'react';
import axios from 'axios';

class Users extends React.Component {
    state = {
        users: [],
    }

    componentDidUpdate(prevProps) {
        if (this.props.token && this.props.token !== prevProps.token) {
            this.fetchUsers();
        }
    }

    fetchUsers = async () => {
        const response = await axios.get('/api/users', {
            headers: { Authorization: `Bearer ${this.props.token}` }
        });
        this.setState({ users: response.data });
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => (
                    <div key={user.username}>{user.username}</div>
                ))}
            </div>
        );
    }
}

export default Users;