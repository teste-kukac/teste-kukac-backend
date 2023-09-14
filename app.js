const express = require('express');
const cors = require('cors');
const fs = require('fs');
const axios = require('axios'); 
const app = express();
const port = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

app.get('/desafio1/:number', (req, res) => {
  const var_aux = req.params.number;

  function isPalindrome(number) {
    const numberStr = String(number);
    return numberStr === numberStr.split('').reverse().join('');
  }

  if (!isNaN(var_aux)) {
    const limit = parseInt(var_aux);
    const palindromes = [];

    for (let i = 1; i <= limit; i++) {
      if (isPalindrome(i)) {
        palindromes.push(i);
      }
    }

    res.json({ palindromes });
  } else {
    res.status(400).json({ error: 'Entrada inválida. Digite um número válido.' });
  }
});

const notas = [100, 10, 1];


app.post('/desafio2', (req, res) => {
  const { valorCompra, pagamento } = req.body;

  if (!valorCompra || !pagamento) {
    return res.status(400).json({ error: 'Forneça o valor da compra e o pagamento.' });
  }

  let troco = pagamento - valorCompra;
  const quantidadeNotas = {};

  const notas = [100, 10, 1];

  for (let nota of notas) {
    aux_troco = troco
    const quantidade = Math.floor(aux_troco / nota);
    if (quantidade > 0) {
      quantidadeNotas[nota] = quantidade;
      aux_troco -= quantidade * nota;
    }
  }

  res.json({
    valorCompra,
    pagamento,
    troco,
    aux_troco,
    quantidadeNotas,
    numeroTotalNotas: Object.values(quantidadeNotas).reduce((acc, cur) => acc + cur, 0),
  });
});


app.post('/desafio3', (req, res) => {
  try {
    const novoVeiculo = new Veiculo(
      req.body.Modelo,
      req.body.anoFabricacao,
      req.body.qtdPortas,
      req.body.Marcas
    );

    const dadosExistente = fs.existsSync('./db/veiculos.json')
      ? JSON.parse(fs.readFileSync('./db/veiculos.json', 'utf-8'))
      : [];

    dadosExistente.push(novoVeiculo);

    fs.writeFileSync('./db/veiculos.json', JSON.stringify(dadosExistente, null, 2));

    res.status(200).json({ message: 'Veículo adicionado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao adicionar veículo.' });
  }
});

app.get('/desafio4/:cep', async (req, res) => {
  try {
    const { cep } = req.params;
    const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
    
    if (!cepRegex.test(cep)) {
      return res.status(400).json({ error: 'CEP inválido' });
    }

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    
    if (response.status === 200) {
      const data = response.data;
      if (data.erro) {
        return res.status(404).json({ error: 'CEP não encontrado' });
      } else {
        return res.json(data);
      }
    } else {
      return res.status(500).json({ error: 'Erro na requisição à ViaCEP' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro na requisição à ViaCEP' });
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
