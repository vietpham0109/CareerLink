import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {}

const homeJobReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.HOMEJOB:
            return action.payload;
        default:
            return state;
    }
}


export default homeJobReducer