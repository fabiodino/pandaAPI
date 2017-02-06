# pandaAPI

Todo git pull
  npm install

Definir as variáveis de sessão (inclua essas linhas no arquivo ~/.bashrc):
  export PANDA_DB_PASSWORD="your_db_password"
  export PANDA_DB_USERNAME="your_db_username"
  export PANDA_DB_NAME="your_db_name"

Para usa-las pode ser preciso executar o seu .bashrc
  . ~/.bashrc ou source ~/.bashrc

Para rodar a aplicação:
  node app.js

Para rodar a aplicação utilizando o supervisor(https://github.com/petruisfan/node-supervisor):
  supervisor app.js

Para testar o post:
  Ex.: curl -X POST --data "name=Mochila&description=Minha mochila da faculdade." http://localhost:3000/chests

Para testar o get:
  Ex.: curl http://localhost:3000/chests

Sobre o banco de dados.
  Estamos utilizando o Sequelize(https://www.npmjs.com/package/sequelize), este pacote do node é uma ORM para Postgres, MySQL, etc ou seja, só precisamos criar o banco de dados e o resto será criado automaticamente quando for necessário para a aplicação usar.


Ref.:
  https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql
  http://stackoverflow.com/questions/14417592/node-js-difference-between-req-query-and-req-params
  http://stackoverflow.com/questions/22100592/curl-with-nodejs-express-post-data
  http://askubuntu.com/questions/58814/how-do-i-add-environment-variables
  http://superuser.com/questions/46139/what-does-source-do
