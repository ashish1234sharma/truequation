
const initialState={

    data:[]
}
export const reducer=(state=initialState,{payload,type})=>{

    switch(type){
        case "ADD_TODO" :

        return {
            ...state,
            payload
        }
        case "GET_TODO" :

        return {
            ...state,
            payload
        }
        case "REMOVE_TODO":
            
           
          let newArr= state.filter((e)=>e.id != payload )
            return{
                 payload:newArr

            }
        default: return state
            
    }
    
    
}