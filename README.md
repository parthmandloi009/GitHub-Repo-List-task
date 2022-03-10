#Created a REST API using Node.JS and Express integrated with GiHub API.

# Packages installed

-   node = `v14.18.1`
-   express
-   node + typescript
-   swagger-ui-express
-   ts-dotenv
-   joi
-   cors
-   supertest
-   axios
-   eslint-config-prettier

## Installation

installed all module via npm:

```bash
$ npm install
```

## Add .env

```bash
$ cp .example.env .env
```

Add PORT and GITHUB_ACCESS_KEY in .env

Start the server

```bash
$ npm start
```

### Development with tsc --watch

```bash
$ npm run dev
```

## Testing

Testing rest api:

```bash
$ npm test
```

# REST API

## Endpoint

```
GET /
```

Querying takes in the following parameters:
| Parameter | Purpose
| --------- | :--------------------------------
| `search` | what to search by (a MongoDB connection string in this case)
| `page` | Current page
| `sort` | what field to sort by.
| `per_page` | Items per page
| `order` | asc or desc

## Swagger

Visit `/swagger`

## Postman collection

Postman collection file (postman_collection.json) is at root directory

---

Thanks
