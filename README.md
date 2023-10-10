# Projeto de Cadastro de Produtos

![Imagem do Projeto](https://github.com/dom-pixel/fullstack-job-test/blob/laravel/logo.png)

## Descrição

Este projeto é uma aplicação de cadastro de produtos desenvolvida com Vue.js no front-end e Laravel no back-end. Ele permite aos usuários cadastrar novos produtos, visualizar a lista de produtos existentes, editar produtos e excluí-los.

## Como Executar o Projeto

Siga estas etapas para executar o projeto em seu ambiente local:

### Requisitos

Certifique-se de que você tenha as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)
- [PHP](https://www.php.net/)
- [Laravel](https://laravel.com/)
- [Vue.js](https://vuejs.org/)

### Configuração

1. Clone o repositório do GitHub para o seu ambiente local:

   ```bash
   git clone https://github.com/AldoBre/desafio_dompixel.git

2. Navegue até o diretório do projeto:

    ```bash
   cd desafio_dompixel

3. Instale as dependências do back-end com Composer:

    ```bash
    composer install

4. Instale as dependências do front-end com npm :

    ```bash
    npm install

5. Configure o arquivo .env com as configurações do banco de dados e outras configurações relevantes.

6. Gere a chave de criptografia do Laravel:

    ```bash
    php artisan key:generate

7. Execute as migrações do banco de dados para criar as tabelas necessárias:

     ```bash
    php artisan migrate

### Iniciar o Servidor

1. Inicie o servidor de desenvolvimento do Laravel:

    ```bash
    php artisan serve

2. Inicie o servidor de desenvolvimento do Vue.js:

    ```bash
    npm run serve

 3. Acesse o aplicativo em seu navegador em http://localhost:8000.

 ## Dificuldades

 - Lidar com validações e mensagens de erro no formulário de cadastro de produtos.

 ## Todas as Techs e Libs utilizadas

 - Vuetify -> Framework de componentes para Vue.Js;
 - Vue-Router -> Biblioteca VueJs para a criação de SPAs;
 - Vue-Vuex -> Biblioteca de gerenciamento de estado do Vue.Js.
