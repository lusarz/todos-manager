'use strict';

const port = process.env.PORT || 3001;
const dbName = 'todosManager-test';
const db = 'mongodb://localhost:27017/' + dbName;

module.exports = { port, dbName, db };
