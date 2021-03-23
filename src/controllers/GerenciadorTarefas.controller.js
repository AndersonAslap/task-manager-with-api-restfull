const uuidv4 = require('uuid');

let tasks = [
    { id: '1', name:'Aprender React', completed: true },
    { id: '2', name:'Estudar padrões de projeto', completed: false },
    { id: '3', name:'Aprender Javascript', completed: false },
    { id: '4', name:'Treinar', completed: false }
];


function getTaskById(request, response) {
    const id = request.params.id;

    const task = tasks.filter(task => task.id === id);

    if (task.length === 0) {
        response.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    response.json(task[0]);
}

module.exports = {
    getTaskById
}