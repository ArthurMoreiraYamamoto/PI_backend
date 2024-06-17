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
    test('Deve retornar 200 e um array no GET /clientes', async () => {
        const response = await request.get('/clientes');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        if(response.body.length > 0 ){
            id = response.body[0]._id.toString();
        };
      });
    
      test('Deve retornar 200 e um JSON no GET /clientes/id', async () => {
        const response = await request.get(`/clientes/${id}`);
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
      });
    
      test('Deve retornar 404 e um JSON no GET /clientes/id', async () => {
        const response = await request.get('/clientes/664901b4f1aa5565cb12f409');
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
      });

      test('Deve retornar 200 e um JSON no PUT /clientes/id', async () => {
        const response = await request.put(`/clientes/${id}`).send({nome: "Palito",
                telefone: 61333444555,
                email: "Palitodapesca@gmail.com",
                endereco: "loja qne 6 ceilandia",
        });
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
      });  
    
      test('Deve retornar 404 e um JSON no PUT /clientes/id', async () => {
        const response = await request.put('/clientes/664901b4f1aa5565cb12f4c8');
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
      });
    
      test('Deve retornar 422 e um JSON no PUT /clientes/id', async () => {
        const response = await request.put(`/clientes/${id}`).send({});
        expect(response.status).toBe(422);
        expect(response.type).toBe('application/json');
      });

      test('Deve retornar 204 no DELETE /clientes/id', async () => {
        const response = await request.delete(`/clientes/${id}`);
        expect(response.status).toBe(204);
        expect(response.type).toBe('');
      });
    
      test('Deve retornar um 404 e um JSON no DELETE /clientes/id', async () => {
        const response = await request.delete(`/clientes/${id}`);
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
      });
})