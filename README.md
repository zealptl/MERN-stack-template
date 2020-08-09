# MERN-template

This is a fullstack MERN (MongoDB, Express, React, Node) application template. Follow the scripts below to get your template running. The files in the root source folder have comments about structuring the back-end code.

## Setting up backend

Install backend dependencies

```
  npm i
```

You will need to create a `defualt.json` file in `config` folder and insert

```json
{
  "mongoURI": "your mongoDB uri",
  "jwtSecret": "secret"
}
```

To only run backend server

```
  npm run server
```

## Setting up frontend

Install frontend dependencies

```
  npm run clientinstall
```

### Running frontend & backend at the same time

```
  npm run dev
```
