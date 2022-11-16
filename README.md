# Projeto PDS - Sistema Moveleiro Back-End!

O projeto faz parte de uma atividade avaliativa da disciplina `PDS - Processo de Desenvolvimento de Software`, da graduação Bacharelado em Sistemas de Informação do [IFBA](https://portal.ifba.edu.br/conquista/capas-e-paginas-menu-cursos/sistemas-de-informacao).

## Habilidades

Nesse projeto:

- Modelagem de dados com **MySQL** através do **Sequelize**;
- Criação e associação de tabelas usando models do sequelize;
- Construção de uma **API REST** com endpoints para consumir os models criados;
- Construção de um **CRUD** com **JavaScript**, utilizando **ORM**;

<details>
<summary><strong> Estrutura do projeto</strong></summary><br />

O projeto é composto de 2 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**
  - Será um container docker MySQL já configurado no docker-compose através de um serviço definido como `db`.
  - Tem o papel de fornecer dados para o serviço de _backend_.
  - Você também pode conectar a um Cliente MySQL (Workbench, Beekeeper, DBeaver e etc), colocando as credenciais configuradas no docker-compose no serviço `db`.

2️⃣ **Back-end:**
 - Deve rodar na porta `3001`;
 - A aplicação deve ser inicializada a partir do arquivo `app/backend/src/server.ts`;
 - Garanta que o `express`;

</details>

# Orientações

<details>
<summary><strong> 🔰 Iniciando o projeto</strong></summary><br />

  1. Clone o repositório `Usar link SSH`

- Entre na pasta do repositório que você acabou de clonar:
  * `cd pasta-do-repositório`

  2. Instale as dependências [**Caso existam**]
  *`npm install`

</details>

<details>
<summary><strong> ⚠️ Configurações mínimas para execução do projeto</strong></summary><br />

Na sua máquina você deve ter:

 - Sistema Operacional Distribuição Unix
 - Node versão 16

➡️ O `node` deve ter versão igual ou superior à `16.14.0 LTS`:
  - Para instalar o nvm, [acesse esse link](https://github.com/nvm-sh/nvm#installing-and-updating);
  - Rode os comandos abaixo para instalar a versão correta de `node` e usá-la:
    - `nvm install 16.14 --lts`
    - `nvm use 16.14`
    - `nvm alias default 16.14`

</details>

## Desenvolvimento

<details id='Variaveis-de-ambiente'>
<summary><strong> ⚙️ Variáveis de ambiente </strong></summary><br />

  **No diretório `/` renomeie o arquivo `.env.example` para `.env` e configure os valores de acordo com o cenário do seu ambiente (credenciais de banco de dados, secrets desejadas e etc)**. Isso vai permitir que você inicialize a aplicação fora do _container_ e ela se conecte com seu banco local caso deseje.
 > `./env.example`
  ```txt
  MYSQL_USER=seu_user
  MYSQL_PASSWORD=sua_senha
  MYSQL_DATABASE=sistemamoveleiro
  MYSQL_HOST="127.0.0.1"
  MYSQL_DIALECT=mysql
  MYSQL_PORT=3306
  HOSTNAME=localhost
  PORT=3001
  API_PORT=3000
  ```

</details>

<details id='sequelize'>
  <summary><strong>🎲 Sequelize</strong></summary>
  <br/>

  ⚠️ O `package.json` do diretório `/` contém um script `db:reset` que é responsável por "dropar" o banco, recriar e executar as _migrations_ e _seeders_. Você pode executá-lo com o commando `npm run db:reset` se por algum motivo precisar recriar a base de dados;

  ⚠️ **O sequelize já foi inicializado, portanto NÃO é necessário executar o `sequelize init` novamente**

</details>
