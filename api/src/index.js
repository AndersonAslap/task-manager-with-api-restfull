const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
    getTaskById,
    getAllTasks,
    createTask,
    updateTask,
    completedTask,
    deleteTask
} = require('./controllers/GerenciadorTarefas.controller');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

/**
 * 
 * Rotas da api
 * 
 * listar uma tarefa pelo id - get
 * Listar todas as tarefas - get
 * cadastrar uma tarefa - post
 * atualizar uma tarefa - put
 * remover uma tarefa - delete
 * concluir uma tarefa - put
 * 
 */

 app.get('/gerenciador-tarefas/:id', getTaskById);

app.get('/gerenciador-tarefas', getAllTasks);

app.post('/gerenciador-tarefas', createTask);

app.put('/gerenciador-tarefas/:id', updateTask);

app.delete('/gerenciador-tarefas/:id', deleteTask);

app.put('/gerenciador-tarefas/:id/concluir', completedTask);

app.listen(PORT, () => {
    console.log(`Servidor inicializado na porta : ${PORT}`);
});