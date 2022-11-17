# Bem vindo ao Projeto de Cadastro de Consultas

## Após clonar o repositório, siga os seguintes comandos:
## - npm install dentro da pasta Frontend 
## - npm install dentro da pasta Backend
## - Se não tiver o mysql instalado, execute o comando "docker-compose up -d" dentro da pasta Backend
## - database:
      image: mysql:5.7
      container_name: mysql
      restart: always
      environment:
        MYSQL_DATABASE: 'db'   
        MYSQL_USER: 'user'
        MYSQL_PASSWORD: 'password'      
        MYSQL_ROOT_PASSWORD: 'password'
## - Dentro da pasta Backend, executar o comando "npm run dev" na raíz do projeto
## - Crie as tabelas no banco de dados com o arquivo "database.sql"
## - Dentro da pasta Frontend, executar o comando "npm start" na raíz do projeto
## Tudo certo!!!
