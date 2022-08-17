
import React from "react";
import { useState, useReducer } from "react";

function reducer(state, action) {
   
    switch (action.type) {
        case "add":
    return { todos: [...state.todos, { text: action.text , completed : false}]};

     case "toggle-todo":
        return {todos: state.todos.map((t,idx ) => idx ===action.idx ? {...t,completed : !t.completed}: t),
        todoCount: state.todoCount
    } 
    case "delete-todo":
        return {todos: state.todos.filter((t,idx ) => idx !==action.idx )}

    default:
    return state
}

};



function TodoApp() {

    const [{ todos, todocount }, dispatch] = useReducer(reducer, {
        todos: [],
        todocount: 0
    }
    )

    const [text, setText] = useState();

    return (
        <div>
            <form onSubmit={e => {

                e.preventDefault();
                dispatch({ type: 'add', text })
                setText("")

            }}>
                <input type="text" value={text} onChange={e => setText(e.target.value)}></input>

            </form>

            {todos.map((t, idx) => (
                <div style = {{color: "white"}}>
                <div key={idx} 
                
                onClick = {() => dispatch ({type:"toggle-todo" , idx})}
                onDoubleClick = {() => dispatch ({type:"delete-todo" , idx})}
                style = {{ textDecoration : t.completed ? "line-through" : "" }} 
                
                >
                    {t.text}
                    </div>
                    </div>
            )
            
            )}
            <div style = {{color: "white"}}> no of Todos : {todocount}

            </div>

            <pre style = {{color: "white"}} >{JSON.stringify(todos, null, 2)}

            </pre>

        </div>
    )
}

export default TodoApp;