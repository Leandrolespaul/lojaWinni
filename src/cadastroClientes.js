import clientes from "./arrayClientes.js"
import id from "./id.js"
import validaTel from "./validacaoTel.js"
import validaCPF from "./validacaoCPF.js"


const cadastroClientes = (nome, dataNascimento, CPF, telefone) => {
    if (typeof nome !== "string") Error("error")
    if (typeof dataNascimento !== "string") Error("error")
    if (typeof CPF !== "string") Error("error")
    if (typeof telefone !== "string") Error("error")
    clientes.push({ id: id(), nome, dataNascimento, cpf: validaCPF(CPF), tel: validaTel(telefone) })
}

const alterarCadastroCliente = (id, nome, dataNascimento, CPF, telefone) => {
    if (typeof id !== "number") Error("error")
    if (typeof nome !== "string") Error("error")
    if (typeof dataNascimento !== "string") Error("error")
    if (typeof CPF !== "string") Error("error")
    if (typeof telefone !== "string") Error("error")
    const encontrarCliente = clientes.find(cliente => cliente.id === id)
    if (nome) encontrarCliente.nome = nome
    if (dataNascimento) encontrarCliente.dataNascimento = dataNascimento
    if (CPF) encontrarCliente.CPF = CPF
    if (telefone) encontrarCliente.telefone = telefone
}

const deletandoCliente = () => {
    if (typeof id !== "number") Error("error")
    const filtrando = clientes.filter(cliente => cliente.id !== id)
    console.log(filtrando) 
}

cadastroClientes('Leandro dos Santos Cunha', '16/10/1984', "10945157797", '22991031962')



console.log(clientes)