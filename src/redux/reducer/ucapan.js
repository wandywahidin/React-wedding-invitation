const initialState = {
    allComment : []
}

const ucapanReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ALL_COMMENT':
            return {...state, allComment:action.payload}
        default:
            return state
    }
}

export default ucapanReducer