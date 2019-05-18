import axios from 'axios';

class ClienteServico {
    removeCliente(id){
        axios.delete('http://localhost:4000/clientesRelacionamento/'+id)
        .then(() => {
            console.log('O cliente foi apagado com sucesso')
        })
        .catch((erro) => {
            console.log(erro)
        })
    }
}

export default ClienteServico;