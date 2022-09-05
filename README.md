### CRUD_nodejs
Repositório criado com objetivo de armazenar uma aplicação CRUD feita com Nodejs, Express e Mongodb.

## Como executar esse projeto
* Para executar este projeto, abra o terminal do seu editor de código fonte. Pelo terminal, entre na pasta do
projeto e instale módulos usando
  *	**npm i express morgan nodemon ejs body-parser dotenv mongoose axios**

* Em seguida, crie o arquivo config.env e crie as variáveis:
  * **PORT** : usei PORT=8080
  * **MONGO_URI** : tem o seguinte formato, preencha com suas informações geradas no Mongo Atlas MONGO_URI=mongodb+srv://**NOME DO USUÁRIO:SENHA DO USUÁRIO**@cluster0.**EXEMPLO**.mongodb.net/**NOME DO BANCO DE DADOS**?retryWrites=true&w=majority

* Por fim, basta digitar no terminal:
  * **npm start**

## O que pode fazer neste projeto
* Criar dados e armazená-los no banco de dados na nuvem (Mongo Atlas)
* Atualizar dados
* Ler dados
* Excluir dados (apenas individualmente)

## Layouts

### Tela Inicial

![nodejs_inicial](https://user-images.githubusercontent.com/95611970/188365433-8656a770-674a-4d48-a5a4-6ab0fd415788.jpg)


### Adicionar Usuário

![nodejs_add](https://user-images.githubusercontent.com/95611970/188365450-443e1084-8142-4d46-bc45-0611306ecfab.jpg)


### Editar Usuário

![nodejs_update](https://user-images.githubusercontent.com/95611970/188365465-c081fda3-b4c7-48dd-a147-4f99921249db.jpg)


### Deletar Usuário

![nodejs_delete](https://user-images.githubusercontent.com/95611970/188365483-a8ce5085-c923-4df2-ac44-425cd6c6ed19.jpg)






