import React from 'react';
import axios from 'axios';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                surname: '',
                email: props.username,
                password: '',
                passwordConfirmation: '',
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
        if (this.state.user.password !== this.state.user.passwordConfirmation) {
            alert('Las contraseñas no coinciden. Por favor, vuelva a intentarlo.');
            return;
        }
    
        const userId = 'usuario-id';
        axios.put(`https://api.reciclarg.cloud/users/${userId}`, this.state.user)
            .then(response => {
                this.setState({
                    user: response.data,
                    isEditMode: false,
                });
                window.location.reload();
            })
            .catch(error => {
                console.error("Error al guardar los cambios: ", error);
                alert('Ocurrió un error al guardar los cambios. Por favor, intenta nuevamente.');
            });
    }
    
    
    render() {
        return (
            <div className="mx-auto w-full max-w-lg py-10 p-2n">
                <h2 className="text-center text-2xl mb-4 py-5">{this.state.isEditMode ? "Modificar Datos" : "Perfil de Usuario"}</h2>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Nombre:</label>
                    {this.state.isEditMode ?
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" value={this.state.user.name} onChange={this.handleInputChange} /> :
                        <span className="block bg-gray-100 rounded py-2 px-3 text-gray-700">{this.state.user.name}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Apellido:</label>
                    {this.state.isEditMode ?
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="surname" value={this.state.user.surname} onChange={this.handleInputChange} /> :
                        <span className="block bg-gray-100 rounded py-2 px-3 text-gray-700">{this.state.user.surname}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Email:</label>
                    {this.state.isEditMode ?
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" value={this.state.user.email} onChange={this.handleInputChange} /> :
                        <span className="block bg-gray-100 rounded py-2 px-3 text-gray-700">{this.state.user.email}</span>}
                </div>
                {this.state.isEditMode &&
                    <>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Contraseña:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" value={this.state.user.password} onChange={this.handleInputChange} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Confirmar contraseña:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="passwordConfirmation" value={this.state.user.passwordConfirmation} onChange={this.handleInputChange} />
                        </div>
                    </>}
                <div className="flex justify-center">
                    <button className="bg-green-600 text-amber-100 hover:bg-amber-100 hover:text-green-600 font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline" onClick={this.toggleEditMode}>
                        {this.state.isEditMode ? 'Cancelar' : 'Editar'}
                    </button>
                    {this.state.isEditMode &&
                        <button className="bg-green-600 text-amber-100 hover:bg-amber-100 hover:text-green-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={this.saveChanges}>Guardar</button>}
                </div>
            </div>
        );
    }
}

export default UserProfile;