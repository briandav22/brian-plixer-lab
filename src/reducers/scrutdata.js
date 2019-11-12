const scrutReducerDefaultState = []

const scrutReducer = (state= scrutReducerDefaultState, action) => {
    console.log(action)

    switch(action.type) {
        case "UPDATE_JSON":

            return [...state, action.scrut]
        default:
            return state;
    }
    
}

export default scrutReducer;