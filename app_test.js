const request = require('supertest');
const express = require('express');
const app = express();

describe('GET /desafio1/:number', () => {
  it('deve retornar palíndromes para um número válido', async () => {
    const response = await request(app).get('/desafio1/100');
    expect(response.status).toBe(200);
    expect(response.body.palindromes).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99]);
  });

  it('deve retornar um erro para uma entrada inválida', async () => {
    const response = await request(app).get('/desafio1/abc');
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Entrada inválida. Digite um número válido.');
  });
});

describe('POST /desafio2', () => {
  it('deve calcular o troco corretamente', async () => {
    const response = await request(app)
      .post('/desafio2')
      .send({ valorCompra: 100, pagamento: 150 });
    expect(response.status).toBe(200);
    expect(response.body.troco).toBe(50);
    expect(response.body.quantidadeNotas).toEqual({ 100: 0, 10: 5, 1: 0 });
  });

  it('deve retornar um erro se o valor da compra ou o pagamento não forem fornecidos', async () => {
    const response = await request(app)
      .post('/desafio2')
      .send({ valorCompra: 100 });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Forneça o valor da compra e o pagamento.');
  });
});

describe('POST /desafio3', () => {
  it('deve adicionar um novo veículo com sucesso', async () => {
    const novoVeiculo = {
      Modelo: 'Carro',
      anoFabricacao: 2022,
      qtdPortas: 4,
      Marcas: 'MarcaXYZ',
    };

    const response = await request(app)
      .post('/desafio3')
      .send(novoVeiculo);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Veículo adicionado com sucesso!');
  });

  it('deve retornar um erro ao adicionar um veículo inválido', async () => {
    const veiculoInvalido = {
      Modelo: 'Carro',
      anoFabricacao: '2022', 
      qtdPortas: 4,
      Marcas: 'MarcaXYZ',
    };

    const response = await request(app)
      .post('/desafio3')
      .send(veiculoInvalido);

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Erro ao adicionar veículo.');
  });
});

describe('GET /desafio4/:cep', () => {
  it('deve retornar os dados do CEP existente', async () => {
    const response = await request(app).get('/desafio4/12247530'); 
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('logradouro');
    expect(response.body).toHaveProperty('bairro');
    expect(response.body).toHaveProperty('localidade');
  });

  it('deve retornar um erro para um CEP inexistente', async () => {
    const response = await request(app).get('/desafio4/99999999'); 
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('CEP não encontrado');
  });
});
