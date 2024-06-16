const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

describe('API', () => {
  test('retorna 201 e um JSON no POST /produtos', async () => {
    const response = await request.post('/produtos').send({ nome: 'chumbinho', preco: 10.0 });
    expect(response.status).toBe(201);
    expect(response.type).toBe('application/json');
    id = response.body._id;
  });

  test('retorna 422 e um JSON no POST /produtos', async () => {
    const response = await request.post("/produtos").send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });
});