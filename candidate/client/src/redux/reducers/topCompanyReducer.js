import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {}

const topCompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.TOPCOMPANY:
            return action.payload;
        default:
            return state;
    }
}


export default topCompanyReducer