import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import List from './List';
import { DateAndTime } from './DateAndTime';
import Allclera from './Allclera';

const todoKey = "Todo-Data";

const getLocalStorage = () => {
    const rawData = localStorage.getItem(todoKey);
    if (!rawData) return [];
    try {
        return JSON.parse(rawData);
    } catch (e) {
        return [];
    }
}


const Todo = () => {
    const [todos, setTodos] = useState(() =>getLocalStorage() );

    useEffect(() => {
        localStorage.setItem(todoKey, JSON.stringify(todos));
    }, [todos]);

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        if (content.trim() === "") return;
        const isTodoMatch = todos.some(
            (curEle) => curEle.content === content
        );
        if (isTodoMatch) return;
        setTodos((prevTodos) => [...prevTodos, { id, content, checked }]);
    };

    const dataDelete = (value) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.content !== value));
    };

    const clearAll = () => {
        setTodos([]);
    };

    const checkedTodo = (content) => {
        setTodos((prevTodos) =>
            prevTodos.map((curEle) =>
                curEle.content === content
                    ? { ...curEle, checked: !curEle.checked }
                    : curEle
            )
        );
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8 px-4">
            <section className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 flex flex-col gap-6">
                <header className="flex flex-col items-center mb-4">
                    <DateAndTime />
                </header>
                <TodoForm addTodo={handleFormSubmit} />
                <ul className="divide-y divide-gray-200 my-4">
                    {todos.map((curEle) => (
                        <List
                            key={curEle.id}
                            checked={curEle.checked}
                            curEle={curEle.content}
                            deleteData={dataDelete}
                            checkTodo={checkedTodo}
                        />
                    ))}
                </ul>
                <Allclera Clear={clearAll} />
            </section>
        </div>
    );
};

export default Todo;
