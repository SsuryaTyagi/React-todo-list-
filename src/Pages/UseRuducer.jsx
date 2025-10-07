import React, { useReducer, useState } from "react";
import "./UseReducerDemo.css";

function UseReducerDemo() {
  // initial state
  const initialState = {
    todos: [],
    filter: "all",
  };

  // reducer function
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_TODO":
        if (!action.payload.trim()) return state;
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              text: action.payload,
              completed: false,
            },
          ],
        };

      case "TOGGLE_TODO":
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        };

      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };

      case "CLEAR_COMPLETED":
        return {
          ...state,
          todos: state.todos.filter((todo) => !todo.completed),
        };

      case "SET_FILTER":
        return {
          ...state,
          filter: action.payload,
        };

      default:
        return state;
    }
  }

  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  // derived data
  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "active") return !todo.completed;
    if (state.filter === "completed") return todo.completed;
    return true;
  });

  const remaining = state.todos.filter((t) => !t.completed).length;

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <main id="todoApp_123456" className="todo-app-wrapper123456">
      <header className="todo-app-header123456">
        <h1 className="todo-app-title123456">My Todo List</h1>
        <p className="todo-app-subtitle123456">
          Add tasks, mark done, filter and clear completed
        </p>
      </header>

      {/* Input Section */}
      <section className="todo-input-section123456">
        <form className="todo-form123456" onSubmit={handleSubmit}>
          <input
            className="todo-input123456"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What do you need to do?"
          />
          <button type="submit"  className="todo-add-btn123456">
            Add
          </button>
        </form>
      </section>

      {/* Controls */}
      <section className="todo-controls123456">
        <div className="todo-count123456">{remaining} items left</div>

        <div className="todo-filters123456">
          {["all", "active", "completed"].map((filter) => (
            <button 
              key={filter}
              className="filter-btn123456"
              aria-selected={state.filter === filter}
              onClick={() =>
                dispatch({ type: "SET_FILTER", payload: filter })
              }
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="todo-clear123456">
          <button
            className="clear-btn123456"
            onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
          >
            Clear completed
          </button>
        </div>
      </section>

      {/* Todo List */}
      <section className="todo-list-section123456">
        <ul className="todo-list123456">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="todo-item123456"
              data-completed={todo.completed}
            >
              <label>
                <input
                  type="checkbox"
                  className="todo-checkbox123456"
                  checked={todo.completed}
                  onChange={() =>
                    dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                  }
                />
                <span
                  className="todo-text123456"
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#888" : "#000",
                  }}
                >
                  {todo.text}
                </span>
              </label>
              <button
                className="todo-delete-btn123456"
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>

      <footer className="todo-footer123456">
        <small>
          Built with ❤ — &copy; <span id="year_123456">{new Date().getFullYear()}</span>
        </small>
      </footer>
    </main>
  );
}

export default UseReducerDemo;
