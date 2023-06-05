import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {}

const alert2Reducer = (state = initialState, action) => {
    switch (action.type){
        case GLOBALTYPES.ALERT2:
            return action.payload;
        default:
            return state;
    }
}


export default alert2Reducer
