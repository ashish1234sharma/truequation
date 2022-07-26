import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo, tododelete } from "../redux/action";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const dispatch = useDispatch();
  const store = useSelector((e) =>e.payload);
   

  const handleChange = (e) => {
    const {id, value } = e.target;

    setInput({
        ...input,
        [id]:value
    })

  };
  const handleClick = () => {
    // const payload={
    
    // }
    // console.log(input)
    dispatch(addtodo(input));
  };
  const handleDelete=(id)=>{
  dispatch(tododelete(id))

  }

  return (
    <div>
      <input type="text" placeholder="Enter todo" id="todo" onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>

      {store && store.map((e)=>{

        return(
            
            <div
            style={{
              display: "flex",
              gap: "20px",
              marginLeft: "53%",
              marginTop: "20px",
            }}
            key={e.id}
          >
           
                    <>
                    <p>{e.todo}</p>
                    <button onClick={()=>handleDelete(e.id)}>Delete</button>
                    </>
            
          </div>

        )
      })}
     
    </div>
  );
};
