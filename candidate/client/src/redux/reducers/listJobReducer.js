import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = []

const allJob = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.ALLJOB:
            return action.payload;
        default:
            return state;
    }
}


export default allJob