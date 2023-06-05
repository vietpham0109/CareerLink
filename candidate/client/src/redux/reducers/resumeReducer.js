import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {}

const allResume = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.ALLRESUME:
            return action.payload;
        default:
            return state;
    }
}


export default allResume