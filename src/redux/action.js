import axios from 'axios'

export const addtodo=(data)=> async (dispatch)=>{

    
   await axios.post("http://localhost:8080/posts",data).then((res)=>{

  dispatch(get_data())
   })


   
}
export const get_data=()=> async (dispatch)=>{

    
    await axios.get("http://localhost:8080/posts").then((res)=>{
 
    dispatch({
     type:"GET_TODO",
     payload:res.data
    })
    })
 
 
    
 }
export const tododelete =(id)=>({

    type:"REMOVE_TODO",
    payload:id
})

