import { useState,useRef,useEffect ,useReducer} from "react";

const Test= ()=> {

    const initialTodos = [
        {
            id: 30,
          title: "Todo ",
          complete: true,
        }
        
        {
          id: 25,
          title: "Todo 2",
          complete: false,
        },
      ];
      
      const reducer = (state, action) => {
        switch (action.type) {
          case "COMPLETE":
            return state.map((todo) => {
              if (todo.id === action.id) {
               // return { ...todo, complete: !todo.complete };
               return console.log(this.props)
              } else {
                return todo;
              }
            });
          default:
            return state;
        }
      };
      
      function Todos() {
        const [todos, dispatch] = useReducer(reducer, initialTodos);
      
        const handleComplete = (todo) => {
          dispatch({ type: "COMPLETE", id: todo.id });
        };
      
        return (
          <>
          
            {todos.map((todo) => (
              <div key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => handleComplete(todo)}
                  />
                  {todo.title}
                </label>
              </div>
            ))}
          </>
        );
      }
    return(
        <Todos/>
    )
  }
      


     


    



export default Test;
