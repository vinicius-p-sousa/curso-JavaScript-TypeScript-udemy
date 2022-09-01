# Routes

this is file is for organize all the routes on this project.

## Home

`localhost:8000/` just response with a simple message.

## Users

`localhost:8000/users` is the route for the users.

- **post**: `localhost:8000/users` create a new user.
  - **body**: `{ name: string, email: string, password: string }`
- **put**: `localhost:8000/users/:id` update a user - login is required.
- **delete**: `localhost:8000/users/:id` delete a user - login is required.

## Tokens

`localhost:8000/tokens` is the route for the tokens.

- **post**: `localhost:8000/tokens` create a new token.
  - **body**: `{ email: string, password: string }`

## Alunos

`localhost:8000/alunos` is the route for the students.

- **get**: `localhost:8000/alunos/` list all the alunos.
- **get**: `localhost:8000/alunos/:id`- list a aluno by id.
- **post**: `localhost:8000/alunos/` - create a aluno.
  - **body**: `{ id: Number, nome: string, sobrenome: String, email: string, idade: Number, peso: Number, altura: Number }`
- **put**: `localhost:8000/alunos/:id` - update a aluno - login is required.
- **delete**: `localhost:8000/alunos/:id`- delete a aluno- login is required.

## Pictures

`localhost:8000/pictures` is the route for the pictures.

- **post**: `localhost:8000/pictures` create a new picture.
  - **body**: `{ aluno_id: number, file: file }`
