const initState = {
    userPosts: [],
    loading: true
}

const userPostsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'USER_POSTS_LOADED':
            return{
                userPosts: action.payload,
                loading: false
            }
        default:
            return state
    }
    
}

export default userPostsReducer