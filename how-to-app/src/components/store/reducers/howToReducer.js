import{
    FETCH_HOWTO_START,
    FETCH_HOWTO_SUCCESS,
    FETCH_HOWTO_FAIL,

    POST_HOWTO_SUCCESS,
    POST_HOWTO_FAIL,

    PUT_HOWTO_SUCCESS,
    PUT_HOWTO_FAIL,

    UPDATE_HOWTO_SUCCESS,
    UPDATE_HOWTO_FAIL



} from '../actions/actionIndex';

const initialState = {
    guides: [],
    isFetching: false,
    error: null,
    addingHowTo: false,
}

const howToReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_HOWTO_START:
            return{
                ...state,
                isFetching: true,
                error: action.payload

            }
        case FETCH_HOWTO_SUCCESS:
            return{
                ...state,
                guides: action.payload,
                isFetching: false,
                error: action.payload
            }
            case POST_HOWTO_SUCCESS:
                // const newHowTo = {
                //     title: '',
                //     description: '',
                //     id: null,
                //     category: ''
                // }
                return{...state, guide: [...state.guide, 
                  action.payload,]};
            case POST_HOWTO_FAIL:
                return{
                    ...state,
                    addingHowTo: false,
                }
        
        case UPDATE_HOWTO_SUCCESS:
            return{
                ...state,
                title: action.payload,
                description: action.payload
            }
        case UPDATE_HOWTO_FAIL:
            return{
                ...state
            }
        default:return  {
            ...state
        }
    }
    
}
export default howToReducer;