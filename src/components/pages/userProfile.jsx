import React from 'react';
import axios from 'axios';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                email: '',
                // suponiendo que estos son los campos del usuario, agréguelos o quítelos según sea necesario
            },
            isEditMode: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    componentDidMount() {
        // suponiendo que el ID del usuario es accesible en alguna forma, aquí simplemente lo codifico
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
        // Aquí debe llamar a la API de actualización, suponiendo que sea un método PUT
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
        return (
            <div>
                <h2>Perfil de Usuario</h2>
                <div>
                    <label>
                        Nombre:
                        {this.state.isEditMode ?
                            <input name="name" value={this.state.user.name} onChange={this.handleInputChange} /> :
                            <span>{this.state.user.name}</span>}
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        {this.state.isEditMode ?
                            <input name="email" value={this.state.user.email} onChange={this.handleInputChange} /> :
                            <span>{this.state.user.email}</span>}
                    </label>
                </div>
                <button onClick={this.toggleEditMode}>
                    {this.state.isEditMode ? 'Cancelar' : 'Editar'}
                </button>
                {this.state.isEditMode &&
                    <button onClick={this.saveChanges}>Guardar</button>}
            </div>
        );
    }
}

export default UserProfile;
