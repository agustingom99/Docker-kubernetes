const request = require('supertest');
const express = require('express');
const app = require('../index'); // Suponiendo que el código se encuentra en un archivo llamado app.js

describe('GET /', () => {
  it('responds with status code 200', async () => {
    await request(app)
      .get('/')
      .expect(200);
  });
});

describe('GET /index', () => {
  it('responds with status code 200', async () => {
    await request(app)
      .get('/index')
      .query({ person: 'Albert Einstein' }) // Cambia el nombre según necesites
      .expect(200);
  });

  it('responds with status code 404 when person not found', async () => {
    await request(app)
      .get('/index')
      .query()
      .expect(404);
  });

  // Detener la ejecución después de que todas las pruebas pasen
  after(() => {
    process.exit(0);
  });
  
});