"use strict";
/*

Exercício:
Considere um sistema de cadastro de usuários onde precisamos armazenar informações sobre os usuários.
Vamos criar variáveis e objetos para representar diferentes tipos de dados relacionados a um usuário.

1- Crie as seguintes variáveis primitivas:
    nomeCompleto: do tipo string, representando o nome completo de um usuário.
    idade: do tipo number, representando a idade do usuário.
    email: do tipo string, representando o endereço de e-mail do usuário.
    isAtivo: do tipo boolean, representando se o usuário está ativo ou não.

2 -Crie um objeto usuario com as seguintes propriedades:

    nome: string, representando o primeiro nome do usuário.
    sobrenome: string, representando o sobrenome do usuário.
    idade: number, representando a idade do usuário.
    contato: objeto com as seguintes propriedades:
    email: string, representando o endereço de e-mail do usuário.
    telefone: string, representando o número de telefone do usuário (opcional).
    Em seguida, imprima todas as variáveis e propriedades do objeto usuario usando console.log.

*/
//1
let nomeCompleto = "Carlos Miguel A. C.";
let idade = 22;
let email = "carlos.almeida@aluno.ifsp.edu.br";
let isAtivo = true;
//2
let usuario;
usuario = {
    nome: "Carlos",
    sobrenome: "Miguel",
    idade: 23,
    contato: {
        email: "carlos@aluno.ifsp.edu.br",
        telefone: "11972858343"
    }
};
//INICIALIZANDO A VARIÁVEL
let contato1;
contato1 = {
    email: "carlos@aluno.ifsp.edu.br",
    telefone: "11972858343"
};
//Após inicializar, pra mudar algum dado da variável é só fazer isso:
contato1.email = "";
let user;
user = {
    nome: "Carlos",
    sobrenome: "Miguel",
    idade: 23,
    contato: {
        email: "carlos@aluno.ifsp.edu.br",
        telefone: "11972858343"
    }
};
console.log(usuario, user);
//let usuario: object = {nome: "Carlos", sobrenome: "Miguel", idade: "22"};
//let contato: object = {email: "carlos.almeida@aluno.ifsp.edu.br", telefone: "11995452364"};
//console.log(usuario);
/*

Exercício:
Vamos criar um sistema de gestão de produtos para uma loja online.
Precisamos armazenar informações sobre diferentes produtos disponíveis na loja. Vamos criar variáveis e objetos para representar esses produtos.

01 - Crie as seguintes variáveis primitivas:

    nomeProduto: do tipo string, representando o nome de um produto.
    preco: do tipo number, representando o preço do produto.
    disponivel: do tipo boolean, representando se o produto está disponível em estoque ou não.


02 - Crie um objeto produto com as seguintes propriedades:

    nome: string, representando o nome do produto.
    preco: number, representando o preço do produto.
    estoque: number, representando a quantidade em estoque do produto.
    categorias: array de strings, representando as categorias às quais o produto pertence.
    Em seguida, imprima todas as variáveis e propriedades do objeto produto usando console.log.

*/
//1
///let nomeProduto: string = "sapato";
//let preco: number = 44;
//let disponivel: boolean = true;
//2
//let produto: object = {nome: "all star", preco: 279.90 , estoque: 90, categorias: []}
