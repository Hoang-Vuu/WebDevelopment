let todoArray = [];
let nextId = 1;

function addOne(task, completed, dueDate) {
    if (task === undefined || completed === undefined || dueDate === undefined) {
        return false;
    }

    const newTodo = {
        id: nextId++,  
        task,
        completed,
        dueDate
    };

    todoArray.push(newTodo);
    return newTodo;
}

function getAll() {
    return todoArray;
}
if (require.main === module) {
    console.log("getAll called:", getAll());
}

function findById(id) {
    const numericId = Number(id);
    const todo = todoArray.find(item => item.id === numericId);
    return todo || false;
}

function updateOneById(id, updatedData) {
    const todo = findById(id);
    if (todo) {
        if (updatedData.task !== undefined) todo.task = updatedData.task;
        if (updatedData.completed !== undefined) todo.completed = updatedData.completed;
        if (updatedData.dueDate !== undefined) todo.dueDate = updatedData.dueDate;
        return todo;
    }
    return false;
}

function deleteOneById(id) {
    const initialLength = todoArray.length;
    todoArray = todoArray.filter(todo => todo.id !== Number(id));
    return todoArray.length < initialLength;
}

let result = addOne("Buy groceries", false, "2025-08-30");
console.log(result);
