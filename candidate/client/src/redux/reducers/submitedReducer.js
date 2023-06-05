import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {}

const submitedReducer = (state = initialState, action) => {
    switch (action.type){
        case GLOBALTYPES.SUBMITEDRESUME:
            return action.payload;
        default:
            return state;
    }
}


export default submitedReducer