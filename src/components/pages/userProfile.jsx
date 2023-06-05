// UserProfile.js
import React from 'react';
import axios from 'axios';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                email: props.username,
            },
            isEditMode: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    componentDidMount() {
        const userId = 'usuario-id';
        axios.get(`https://api.reciclarg.cloud/users/${userId}`)
            .then(response => {
                this.setState({
                    user: response.data,
                });
            });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
    }

    toggleEditMode() {
        this.setState(prevState => ({
            isEditMode: !prevState.isEditMode,
        }));
    }

    saveChanges() {
        const userId = 'usuario-id';
        axios.put(`https://api.reciclarg.cloud/users/${userId}`, this.state.user)
            .then(response => {
                this.setState({
                    user: response.data,
                    isEditMode: false,
                });
            });
    }

    render() {
        const cardStyle = {
            width: '30rem',
            margin: '0 auto',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0 0 10px rgba(0,0,0,0.15)',
        };
        
        const inputContainerStyle = {
            marginLeft: '10px',
        };
        
        return (
            <div style={cardStyle}>
                <h2 style={{textAlign: 'center'}}>Perfil de Usuario</h2>
                <div style={{marginBottom: '10px'}}>
                    <label>
                        Nombre:
                        <div style={inputContainerStyle}>
                            {this.state.isEditMode ?
                                <input name="name" value={this.state.user.name} onChange={this.handleInputChange} /> :
                                <span>{this.state.user.name}</span>}
                        </div>
                    </label>
                </div>
                <div style={{marginBottom: '10px'}}>
                    <label>
                        Email:
                        <div style={inputContainerStyle}>
                            {this.state.isEditMode ?
                                <input name="email" value={this.state.user.email} onChange={this.handleInputChange} /> :
                                <span>{this.state.user.email}</span>}
                        </div>
                    </label>
                </div>
                <div style={{textAlign: 'center'}}>
                    <button onClick={this.toggleEditMode} style={{marginRight: '10px'}}>
                        {this.state.isEditMode ? 'Cancelar' : 'Editar'}
                    </button>
                    {this.state.isEditMode &&
                        <button onClick={this.saveChanges}>Guardar</button>}
                </div>
            </div>
        );
    }
}

export default UserProfile;