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

  test('retorna 200 e um array no GET /produtos', async () => {
    const response = await request.get('/produtos');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    if (response.body.length > 0) {
      id = response.body[0]._id.toString();
    }
  });

  test('retorna 200 e um JSON no GET /produtos/id', async () => {
    const response = await request.get(`/produtos/${id}`);
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
  });

  test('retorna 404 e um JSON no GET /produtos/id', async () => {
    const response = await request.get('/produtos/666f3837c1871e678d6ff86b');
    expect(response.status).toBe(404);
    expect(response.type).toBe('application/json');
  });

  test('retorna 200 e um JSON no PUT /produtos/id', async () => {
    const response = await request.put(`/produtos/${id}`).send({ nome: "iscaViva", preco: 15.0 });
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
  });

  test('retorna 404 e um JSON no PUT /produtos/id', async () => {
    const response = await request.put('/produtos/666f380885ea5aaf047f8f39');
    expect(response.status).toBe(404);
    expect(response.type).toBe('application/json');
  });

  test('retorna 422 e um JSON no PUT /produtos', async () => {
    const response = await request.put(`/produtos/${id}`).send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });

  test('retorna 204 no DELETE /produtos/id', async () => {
    const response = await request.delete(`/produtos/${id}`);
    expect(response.status).toBe(204);
    expect(response.type).toBe('');
});

test('retorna 404 e um JSON no DELETE /produtos/id', async () => {
    const response = await request.delete(`/produtos/${id}`);
    expect(response.status).toBe(404);
    expect(response.type).toBe('application/json');
});

});