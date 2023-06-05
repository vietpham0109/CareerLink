import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {}

const listCompany = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.LISTCOMPANY:
            return action.payload;
        default:
            return state;
    }
}


export default listCompany