const initState = {
    post: {},

}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'POST_LOADED':
            return{ 
                post: action.payload,
            }
        default:
            return state
    }
}

export default postReducer