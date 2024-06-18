const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

describe('API', () => {
  test('retorna 201 e um JSON no POST /fornecedor', async () => {
    const response = await request.post('/fornecedor').send({ nome: 'Fabio', cnpj: "99 999 999/9999-99" });
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

  test('retorna 200 e um JSON no PUT /fornecedor/id', async () => {
    const response = await request.put(`/fornecedor/${id}`).send({ nome: "José", cnpj: "00 000 000/0000-00" });
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
  });

  test('retorna 404 e um JSON no PUT /fornecedor/id', async () => {
    const response = await request.put('/fornecedor/666f380885ea5aaf047f8f39');
    expect(response.status).toBe(404);
    expect(response.type).toBe('application/json');
  });

  test('retorna 422 e um JSON no PUT /fornecedor', async () => {
    const response = await request.put(`/fornecedor/${id}`).send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });
});