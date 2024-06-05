const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

let id  = null

describe('API Loja Virtual', () => {
    test('Deve retornar 201 e um JSON no POST /clientes', async () => {
        const response = await request.post('/clientes').send({
        nome: "alemao",
        telefone: 61555594101,
        email: "alemao@gmail.com",
        endereco: " Condominio aplhavile casa 10 SP"
    })
        expect(response.status).toBe(201);
        expect(response.type).toBe('application/json');
        id = response.body._id;
    })
    test('Deve retornar 422 e um JSON no POST /clientes', async () => {
        const response = await request.post("/clientes").send({});
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json");
    })
})