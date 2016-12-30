'use strict';

const port = process.env.PORT || 9000;
const dbName = 'todosManager';
const db = 'mongodb://localhost:27017/' + dbName;

module.exports = { port, dbName, db };
