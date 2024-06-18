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

  test('retorna 200 e um array no GET /fornecedor', async () => {
    const response = await request.get('/fornecedor');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    if (response.body.length > 0) {
      id = response.body[0]._id.toString();
    }
  });

  test('retorna 200 e um JSON no GET /fornecedor/id', async () => {
    const response = await request.get(`/fornecedor/${id}`);
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
  });

  test('retorna 404 e um JSON no GET /fornecedor/id', async () => {
    const response = await request.get('/fornecedor/666f3837c1871e678d6ff86b');
    expect(response.status).toBe(404);
    expect(response.type).toBe('application/json');
  });
});