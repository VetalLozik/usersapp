const getUsers = (users) =>{
    return{
        type: 'USERS_LOADED',
        payload: users
    }
}

const getUserPosts = (posts) =>{
    return{
        type: 'USER_POSTS_LOADED',
        payload: posts
    }
}

const getComments = (comments) =>{
    return{
        type: 'COMMENTS_LOADED',
        payload: comments
    }
}

const getPost = (post) =>{
    return{
        type: 'POST_LOADED',
        payload: post
    }
}


export {
    getUserPosts,
    getUsers,
    getComments,
    getPost
}