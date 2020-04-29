import {GET_USERNAME} from "../actions/actionIndex";


const initialUserState ={
    
    username: '',
    password: '',


}

const userReducer = (state = initialUserState, action) =>{
    switch(action.type){
       
        
        case GET_USERNAME:
            return{
                
                username: action.payload
            }
        default: return state;
    }
}

export default userReducer;