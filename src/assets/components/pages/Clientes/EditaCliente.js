import React, { Component } from 'react';
import axios from 'axios';

const customStyle = {
    width: '300px',
    margin: '0 auto'
}

class EditaCliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome : '',
            email : '',
            login : '',
            senha : '',
            chave : '',
            validade : '',
            dtvalidade : ''
        }
    }

componentDidMount = () => {
    this.getClientePorId();
}

// Pega o cliente pelo número do Id
getClientePorId() {
    axios.get('http://localhost:4000/clientesRelacionamento/' + this.props.match.params.id)
    .then((cliente) => {
        this.setState({
            nome : cliente.data.nome,
            email : cliente.data.email,
            login : cliente.data.usuario.login,
            senha : cliente.data.usuario.senha,
            chave : cliente.data.licenca.chave,
            validade : cliente.data.licenca.validade,
            dtvalidade : cliente.data.licenca.dtvalidade
        });
    })
    .catch((erro) => {
    console.log(erro);
    })
}

handleChange = (evento) => {
this.setState({ [evento.target.name]: evento.target.value });
}

// Atualiza o Cliente quando executa o evento Submit
handleSubmit = (evento) => {
evento.preventDefault();
const { nome, email, login, senha, chave, validade, dtvalidade } = this.state;
axios.put('http://localhost:4000/clientesRelacionamento/' + this.props.match.params.id, {
nome: nome,
email: email,
login: login,
senha: senha,
chave: chave,
validade: validade,
dtvalidade: dtvalidade
})
.then((resposta) => {
console.log(resposta);
this.props.history.push('/');
})
.catch((erro) => {
console.log(erro);
});

}

render() {
return (
<div className="container">
    <form style={customStyle} onSubmit={this.handleSubmit}>
    <label>
        Nome
        <input
        name="nome"
        type="text"
        value={this.state.nome}
        onChange={this.handleChange}
        className="form-control"
        />
    </label>
    <br />
    <label>
        E-mail
        <input
        name="email"
        type="text"
        value={this.state.email}
        onChange={this.handleChange}
        className="form-control"
        />
    </label>
    <br />
    <label>
        Login
        <input
        name="login"
        type="text"
        value={this.state.login}
        onChange={this.handleChange}
        className="form-control"
        />
    </label>
    <br />
    <label>
        Senha
        <input
        name="senha"
        type="text"
        value={this.state.senha}
        onChange={this.handleChange}
        className="form-control"
        />
    </label>
    <br />
    <label>
        Chave
        <input
        name="chave"
        type="text"
        value={this.state.chave}
        onChange={this.handleChange}
        className="form-control"
        />
    </label>
    <br />
    <label>
        Validade
        <input
        name="validade"
        type="text"
        value={this.state.validade}
        onChange={this.handleChange}
        className="form-control"
        />
    </label>
    <br />
    <label>
        Dt. Validade
        <input
        name="dtvalidade"
        type="text"
        value={this.state.dtvalidade}
        onChange={this.handleChange}
        className="form-control"
        />
    </label>
    <br />
    <label>
        <input
        type="submit"
        value="submit"
        className="btn btn-primary"
        />
    </label>
    </form>
</div>
);
}
}

export default EditaCliente;