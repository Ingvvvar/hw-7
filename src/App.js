import React from 'react';
import Context from './context';
import AddTodo from './Todo/AddTodo';
import TodoList from "./Todo/TodoList";


function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, complited: false, title: 'Запилить стилизацию' },
    { id: 2, complited: false, title: 'Запилить свг в кнопки' },
    { id: 3, complited: false, title: 'Скарифицировать газон' }
  ])

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.complited = !todo.complited
      }
      return todo
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          complited: false
        }
      ]))
  }

  return (
    <Context.Provider value={{ removeTodo }} >
      <div className='wrapper'>
        <h1>Todo List</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>Запили сюда картинку</p>}

      </div>
    </Context.Provider>
  );
}

export default App;
