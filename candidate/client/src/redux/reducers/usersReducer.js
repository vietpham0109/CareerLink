import { GLOBALTYPES } from '../actions/globalTypes'

const users =[]

const usersReducer = (state = users, action) => {
    switch(action.type){
        case GLOBALTYPES.ALLUSER:
            return action.payload
        default:
            return state
    }
}

export default usersReducer