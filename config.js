'use strict';

const port = process.env.PORT || 9000;
const dbName = process.env.DATABASE_NAME || 'todosManager-test';
const db = process.env.DATABASE_URL || `mongodb://localhost:27017/${dbName}`;

module.exports = { port, dbName, db };
