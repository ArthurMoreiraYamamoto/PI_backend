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

  test('Deve retornar 200 e um array no GET /produtos', async () => {
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
    const response = await request.get('/produtos/664901b4f1aa5565cb12f409');
    expect(response.status).toBe(404);
    expect(response.type).toBe('application/json');
  });
});