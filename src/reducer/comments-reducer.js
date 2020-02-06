const initState = {
    comments: [],

}

const commentsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'COMMENTS_LOADED':
            return{ 
                comments: action.payload,
            }
        default:
            return state
    }
}

export default commentsReducer