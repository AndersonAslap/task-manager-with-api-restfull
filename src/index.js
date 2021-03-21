const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

/**
 * 
 * Rotas da api
 * 
 * Listar todas as tarefas - get
 * listar uma tarefa pelo id - get
 * cadastrar uma tarefa - post
 * atualizar uma tarefa - put
 * remover uma tarefa - delete
 * concluir uma tarefa - put
 * 
 */

app.get('/gerenciador-tarefas', (request, response) => {
    response.status(501).json({ erro: 'Não implementado' });
});

app.get('/gerenciador-tarefas/:id', (request, response) => {
    response.status(501).json({ erro: 'Não implementado' });
});


app.listen(PORT, () => {
    console.log(`Servidor inicializado na porta : ${PORT}`);
});