import { useEffect, useState } from "react";

export default function TodoList(){

  const [todoList, setTodoList] = useState([]);
  const [errMsg, setErrorMsg] = useState("");
  const API = "https://jsonplaceholder.typicode.com/todos";


  const getData = async () => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        setTodoList(json);
      })
      .catch((error) => {
        setErrorMsg(`에러 발생`);
      });
}




  useEffect(() => {
    getData();
  }, []);



  return(
    <>
      <h1>Todo</h1>
      {errMsg?
        <p>{errMsg}</p>
        :
        <ul>
          {todoList.map((todo,idx) => (
            <li key={idx} style={{textDecoration :  todo.completed? "line-through":undefined}}>
              {todo.title}
            </li>
          ))}
      </ul>
    }
    

    </>
  
  )

}