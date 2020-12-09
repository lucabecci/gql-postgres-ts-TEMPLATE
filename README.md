# GraphQL-TS-Template

> This is a template for my future projects graphQL. If you need to create a new graphQL project with TS, you can use my template. This is the first version, in weeks or days i will add new features, docker and docker-compose configuration for the api/postgresql.

I used Node/Typescript for this.

> Created by Luca Becci

## 1. Started ⌨️

for get the project you will use:

```tsx
git clone "https://github.com/lucabecci/gql-postgres-ts-TEMPLATE"
```

## 2. Pre-requeriments 🛠

You will need this requeriments for good rendiment:

- Node.JS > 10.X
- npm > 6.X

## 3. Installation 🔩

You will need run this comands for the installation:

```
With npm: 
npm install //install the backend dependencies.

With yarn:
yarn install //install the backend dependencies.

```

## 4. Use the project 💻

### About the app

### ORM config for your database

in the ormconfig.json

```tsx
{
    "type": "postgres", //your database system
    "host": "localhost", //host of your database
    "port": 5432,//port of your database
    "username": "postgres", 
//your username of your database, always is "postgres"
    "password": "", //your database password, always is ""
    "database": "templategql", //the name of your database
    "synchronize": true, //this is the sinchronization of typeorm
    "logging": true, 
/*logger of console, if you dont need see the the creation of tables or 
	any info of your db set this in **false***/
    "entities": ["src/entities/*.*"] //entities ubication
}
```

### Resolvers path configuration

In the `src/index.ts` you will find the code of resolvers path:

```tsx
const schema = await buildSchema({
      resolvers: [__dirname + "/modules/**/*.ts"],
    });

/*This code is for the path of resolvers. If you dont like this method
	of the set the path of all resolvers, you can use the method of
	imports. IMPORTANT if you will use the method of imports you will
	imports all resolvers and set in the resolvers.*/

example of imports:
import {IndexResolver} from './modules/IndexResolver';
import {ExampleResolver} from './modules/ExampleResolver';

const schema = await buildSchema({
	resolvers: [IndexResolver, ExampleResolver]
});

```

### How to run the API in prod

1. In your terminal, navigate to the main directory.
2. Run `npm install` to install all dependencies.
3. Run `npm run prod`  for the api build
4. Run `npm start:prod` to start the app.

### How to run the API in dev

1. In your terminal, navigate to the main directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start:dev` to start the app.

## 5. Template structure 📁

### Template

```tsx
|-- dist
|-- node_modules
|-- src
	|-- entities
		|-- Example.ts
	|-- interfaces
		|-- init.ts
	|-- modules
		|-- ExampleResolver.ts
		|-- IndexResolver.ts
	|-- types
		|-- init.ts
	|-- utils
		|-- init.ts
	|-- index.ts
|-- .eslintrc.js
|-- .gitignore
|-- commitlint.config.js
|-- ormconfig.ts
|-- .prettierrc
|-- package.json
|-- README.md
|-- tscongif.json
|-- yarn.lock

```

## 6. Build with 🛠

DEPENDENCIES:

- [express](https://expressjs.com/)- Fast, unopinionated, minimalist web framework for node.
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata) - Decorators add the ability to augment a class and its members as the class is defined, through a declarative syntax.
- [typeorm](https://typeorm.io/#/) - TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8).
- [typegraphql](https://typegraphql.com/) - ypeGraphQL is a library that makes this process enjoyable by defining the schema using only classes and a bit of decorator magic.
- [pg](https://www.npmjs.com/package/pg) - Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.
- [rimraf](https://www.npmjs.com/package/rimraf) - The UNIX command rm -rf for node.
- [apollo-server-express](https://www.npmjs.com/package/apollo-server-express) - This is the Express and Connect integration of GraphQL Server. Apollo Server is a community-maintained open-source GraphQL server that works with many Node.js HTTP server frameworks.

DEV-DEPENDENCIES:

- [typescript](https://www.typescriptlang.org/) - TypeScript is a language for application-scale JavaScript.
- [husky](https://www.npmjs.com/package/husky) - Husky can prevent bad git commit, git push and more 🐶 woof!
- [commitlint](https://commitlint.js.org/#/) - commitlint helps your team adhering to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy.
- [prettier](https://prettier.io/) - Prettier is an opinionated code formatter.
- [ts-node](https://www.npmjs.com/package/ts-node)-dev - TypeScript execution and REPL for node.js, with source map support.
- [eslint](https://eslint.org/) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript/Typescript code.

## 7. Database 📫

For the database i using PostgreSQL

- PostgreSQL
- Version: 12.5

## 8. Versioned 1️⃣

```tsx
**The version of this template is: 1.0.0**
```

For the versioning, [ConventionalCommits] was used ([https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/))

I using husky for the control in commits and push

## 9. Author 🙎🏻‍♂️

***Luca Becci -** code/template and documentation*

- [github](https://github.com/lucabecci)
- [twitter](https://twitter.com/lucabecci)
- [linkedin](https://www.linkedin.com/in/luca-becci-b8044b198/)