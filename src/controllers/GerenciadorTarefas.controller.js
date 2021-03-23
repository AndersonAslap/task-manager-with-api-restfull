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

function getAllTasks(request, response) {
    const page = request.query['page'] || 1;
    const order = request.query['order'];
    const filterTask = request.query['filter-task'];
    const itemsPage = request.query['itemsPage'] || 3;

    let tasksReturn = tasks.slice(0);

    // Filtrar
    if (filterTask) {
        tasksReturn.filter(
            task => task.name.toLowerCase().indexOf(filterTask.toLowerCase()) === 0
        );
    }

    // Ordenar
    if (order === 'ASC') {
        tasksReturn.sort(
            (task1, task2) => (task1.name.toLowerCase() > task2.name.toLowerCase()) ? 1 : -1
        );
    } else if (order === 'DESC') {
        tasksReturn.sort(
            (task1, task2) => (task1.name.toLowerCase() < task2.name.toLowerCase()) ? 1 : -1
        );
    } 

    response.json({
        amountItems : tasksReturn.length,
        tasks: tasksReturn.slice(0).splice((page - 1) * itemsPage, itemsPage),
        page: page
    });
}

module.exports = {
    getTaskById,
    getAllTasks
}