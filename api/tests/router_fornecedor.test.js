const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

describe('API', () => {
  test('retorna 201 e um JSON no POST /fornecedor', async () => {
    const response = await request.post('/fornecedor').send({ nome: 'Fabio' });
    expect(response.status).toBe(201);
    expect(response.type).toBe('application/json');
    id = response.body._id;
  });

  test('retorna 422 e um JSON no POST /fornecedor', async () => {
    const response = await request.post("/fornecedor").send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });

});