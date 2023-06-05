import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = []

const dataResume = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.DATARESUME:
            return action.payload;
        default:
            return state;
    }
}


export default dataResume