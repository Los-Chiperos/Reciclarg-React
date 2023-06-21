import React, { Component } from 'react';
import Service from '../../service/Service'

class Registrar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            file: null
        };
        this.service = new Service();
        this.handleInput = this.handleInput.bind(this);
        this.handleFileInput = this.handleFileInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFileInput(e) {
        this.setState({
            file: e.target.files[0]
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.service.newUser('api/register', this.state, this.state.file)
            .then(response => {
                console.log(response);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" onChange={this.handleInput} />
                <input type="text" name="email" onChange={this.handleInput} />
                <input type="password" name="password" onChange={this.handleInput} />
                <input type="file" name="file" onChange={this.handleFileInput} />
                <button type="submit">Register</button>
            </form>
        );
    }
}

export default Registrar;
