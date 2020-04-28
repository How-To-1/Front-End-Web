import{
    ADD_HOWTO,
    REMOVE_HOWTO,
    UPDATE_HOWTO,
    FETCH_HOWTO
} from '../actions/actionIndex';

const initialState = {
    guides: [
        {
            id: null,
            title: 'test',
            description: 'test',

        }
    ]
}

const howToReducer = (state, action) =>{
    switch(action.type){
        case FETCH_HOWTO:
            return{
                ...state
            }
        case UPDATE_HOWTO:
            return{
                ...state,
                title: action.payload,
                description: action.payload
            }
            default: return state;
    }
    
}
export default howToReducer;