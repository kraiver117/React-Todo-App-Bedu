import { useState } from "react";
import MockDataTasks from '../utils/TodoListMockData';

export const Todo = () => {
    const [tasks, setTasks] = useState(MockDataTasks);
    const [input, setInput] = useState('');
    const [todoAlert, setTodoAlert] = useState('');

    const createNewTodo = (e) => {
        e.preventDefault();
        setTodoAlert('');

        if (input === '') {
            return;
        } else {
            const exists = tasks.find(task => input === task.todo);

            if (exists) {
                setTodoAlert(`La tarea ${input} ya existe`);
            } else {
                setTasks([{id: Date.now(), todo: input , completed: false}, ...tasks]);
                setInput('');
            }
        }
    }
    
    const toggleTodo = (id) => {
        const completeTodo = tasks.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        })

        setTasks(completeTodo);
    }

    const updateTodo = () => {
        ///Logic
    }
    
    const deleteTodo = (id) => {
        const filteredList = tasks.filter(task => task.id !== id);
        setTasks(filteredList);
    }
    
    const onChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        setTodoAlert('');
    }

    return {
        todoAlert,
        tasks,
        input,
        createNewTodo,
        toggleTodo,
        deleteTodo,
        onChange,
        updateTodo
    }
}